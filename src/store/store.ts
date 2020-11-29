import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable, runInAction } from "mobx";
import {ApiService, Statistic, Tournament, TournamentReq} from "./api.service";
import { router } from "../router/router";
import {statSync} from "fs";

class Store {
  apiService: ApiService;

  startupParams: any = {};
  userProfile: UserInfo = {} as UserInfo;
  tournaments: Tournament[] = [];
  statistics: Statistic = {} as Statistic;

  get tournamentsOrganizedByMe(): Tournament[] {
    return this.tournaments.filter(tournament => +tournament.creator === +this.startupParams.vk_user_id);
  }

  get userStatistic(): Statistic {
    return this.statistics;
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

  async fetchUserProfile() {
    const user = await bridge.send('VKWebAppGetUserInfo');
    runInAction(() => (this.userProfile = user));
  }

  async createTournament(tournament: TournamentReq) {
    await this.apiService.createTournament(tournament);
    router.popPageIfModal();
    this.updateTournaments();
  }

  async updateTournaments() {
    const tournaments = await this.apiService.searchForTournaments();
    runInAction(() => this.tournaments = tournaments);
  }
}

export const store = new Store();
