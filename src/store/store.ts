import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable, runInAction } from "mobx";
import {statSync} from "fs";
import { ApiService, Statistic, TeamData, Tournament, TournamentReq, TournamentSearchParams } from "./api.service";
import { PAGE_TOURNAMENT_MANAGE, router } from "../router/router";

class Store {
  apiService: ApiService;

  startupParams: any = {};
  userProfile: UserInfo = {} as UserInfo;
  tournaments: Tournament[] = [];
  statistics: Statistic = {} as Statistic;
  currentTournament: Tournament = {} as any;
  teamData: TeamData = {} as any;
  teammatesInfo: {[key: string]: {name: string, photo: string}} = {};

  get tournamentsOrganizedByMe(): Tournament[] {
    return this.tournaments.filter(tournament => +tournament.creator === +this.startupParams.vk_user_id);
  }

  get userStatistic(): Statistic {
    return this.statistics;
  }

  get tournamentsNotOrganizedByMe(): Tournament[] {
    return this.tournaments.filter(tournament => +tournament.creator !== +this.startupParams.vk_user_id);
  }

  constructor() {
    const url = new URL(window.location.href);
    // @ts-ignore
    for (let [key, value] of url.searchParams) {
      if (key.startsWith('vk_') || key === 'sign') {
        this.startupParams[key] = value;
      }
    }
    this.apiService = new ApiService(this.startupParams);
    makeAutoObservable(this);
  }

  async getStatistic() {
    const stat = await this.apiService.getStatistic();
    runInAction(() => (this.statistics = stat));
  }

  getCurrentTournament(id: number): Tournament {
    return this.tournaments.find(tournament => +tournament.id === +id)!;
  }

  async fetchUserProfile() {
    const user = await bridge.send('VKWebAppGetUserInfo');
    runInAction(() => (this.userProfile = user));
  }

  async createTournament(tournament: TournamentReq) {
    const id = await this.apiService.createTournament(tournament);
    router.popPageToAndPush(-1, PAGE_TOURNAMENT_MANAGE, {id: id as any});
  }

  async updateTournaments(params: TournamentSearchParams = {}) {
    const tournaments = await this.apiService.searchForTournaments(params);
    runInAction(() => this.tournaments = tournaments);
  }

  async updateCurrentTournament(tournamentId: number) {
    await this.updateTournaments();
    const tournament = this.tournaments.find(tourn => tourn.id === tournamentId);
    console.log(tournament);
    const teamData = await this.apiService.getTeamInTournament(tournamentId);
    console.log(teamData);
    if (typeof teamData.captain === "number") {
      const users = [teamData.captain, ...teamData.players];
      const token = await bridge.send("VKWebAppGetAuthToken", {"app_id": +this.startupParams.vk_app_id, "scope": ""});
      console.log(token);
      const result = await bridge.send(
        "VKWebAppCallAPIMethod",
        {
          "method": "users.get",
          "request_id": "32test",
          "params":
            {"user_ids": users.join(','), "v":"5.126", "access_token": token.access_token, "fields": "photo_50"}
        }
      );
      const tmData: any = {};
      result.response.forEach((entry: any) => (tmData[entry.id] = {
        name: `${entry.first_name} ${entry.last_name}`,
        photo: entry.photo_50
      }));
      console.log(tmData);
      runInAction(() => {
        this.teammatesInfo = tmData;
        this.teamData = teamData;
      });
    }
    runInAction(() => this.currentTournament = tournament!);
  }

  async joinTournament(tournamentId: number, params: {teamTitle?: string; teamId?: number}) {
    await this.apiService.joinTournament({
      tournament_id: tournamentId,
      team_id: params.teamId,
      title: params.teamTitle ?? ''
    });
    this.updateCurrentTournament(tournamentId);
    router.popPageIfModal();
  }
}

export const store = new Store();
