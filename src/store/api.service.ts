import axios from 'axios';

export interface Statistic {
  played: number,
  won: number,
  organized: number,
  rating: number,
}

export interface Tournament {
  id: number,
  creator: number
  discipline: string,
  discipline_type: 'solo' | 'team',
  type: 'play_off' | 'group',
  title: string,
  logo: string,
  start_time: string,
  state: 'planned' | 'check_in' | 'in_progress' | 'finished',
}

export interface TournamentReq {
  discipline: string,
  discipline_type: 'solo' | 'team',
  type: 'play_off' | 'group',
  title: string,
  logo?: string,
  start_time: string,
}

export interface TournamentOrgInfo {
  "tournament": {
    "discipline": string,
    "discipline_type": 'solo' | 'team',
    "participants": number[],
    "start_time": string,
    "state": 'planned' | 'check_in' | 'in_progress' | 'finished',
    "title": "Супер-турнир"
  }
}

export interface Team {
  id: number;
  title: string;
  captain: number;
  is_captain: boolean;
}

const URL_ENDPOINT = 'https://hub.education';

export class ApiService {
  constructor(private startupParams: any) {}

  /**
   * Получение статистики
   */
  async getStatistic(): Promise<Statistic> {
    const response = await axios.get<Statistic>(`${URL_ENDPOINT}/statistics`, { params: {
        ...this.startupParams,
      }
    });
    console.log(response);
    return response.data;
  }

  /**
   * Поиск турниров
   */
  async searchForTournaments(
    params: {
      discipline?: string,
      type?: 'play_off' | 'group',
      lower_date?: string,
      upper_date?: string,
      lower_time?: string,
      upper_time?: string
    } = {}
  ): Promise<Tournament[]> {
    const response = await axios.get<{tournaments: Tournament[]}>(`${URL_ENDPOINT}/tournaments`, {
      params: {
        ...this.startupParams,
        ...params
      }
    });
    console.log(response);
    return response.data.tournaments;
  }

  /**
   * Создать турниров
   */
  async createTournament(params: TournamentReq) {
    const response = await axios.post(`${URL_ENDPOINT}/tournaments`, params,{
      params: { ...this.startupParams }
    });
    console.log(response);
  }

  /**
   * Обновление состояния турнира
   */
  async updateTournamentState(tournamentId: number) {
    const response = await axios.post(`${URL_ENDPOINT}/tournaments/state`, {
      tournament_id: tournamentId
    },{ params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Регистрация на турнир
   */
  async registerOnTournament(tournamentId: number) {
    const response = await axios.post(`${URL_ENDPOINT}/tournament/register`, {
      tournament_id: tournamentId
    },{ params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Получить организаторскую инфу
   */
  async getOrgInfoForTournament(tournamentId: number): Promise<TournamentOrgInfo> {
    const response = await axios.get<TournamentOrgInfo>(`${URL_ENDPOINT}/tournament/org_info`,{ params: {
        ...this.startupParams,
        tournament_id: tournamentId
      } });
    console.log(response);
    return response.data;
  }

  /**
   * Создание команды
   */
  async registerTeam(title: string) {
    const response = await axios.post(`${URL_ENDPOINT}/teams`, { title },{ params: {...this.startupParams} });
    console.log(response);
  }

  /**
   * Вступление в команду
   */
  async joinTeam(team_id: number) {
    const response = await axios.post(`${URL_ENDPOINT}/teams/enter`,{team_id}, { params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Список ID команд
   */
  async getMyTeams(): Promise<Team[]> {
    const response = await axios.get<{teams: Team[]}>(`${URL_ENDPOINT}/teams`, {
      params: { ...this.startupParams }
    });
    console.log(response);
    return response.data.teams;
  }

  /**
   * Подтверждение участия
   */
  async confirmParticipation(tournament_id: number) {
    const response = await axios.post(`${URL_ENDPOINT}/tournament/check_in`, {tournament_id}, {
      params: { ...this.startupParams }
    });
    console.log(response);
    return response.data.teams;
  }
}
