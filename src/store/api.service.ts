import axios from 'axios';

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

export interface TournamentSearchParams {
  discipline?: string,
  type?: 'play_off' | 'group',
  lower_date?: string,
  upper_date?: string,
  lower_time?: string,
  upper_time?: string
}

export interface TeamData {
  title: string;
  captain: number;
  players: number[];
  id: number
}

const URL_ENDPOINT = 'https://hub.education';

export class ApiService {
  constructor(private startupParams: any) {
  }

  /**
   * Поиск турниров
   */
  async searchForTournaments(
    params: TournamentSearchParams = {}
  ): Promise<Tournament[]> {
    const response = await axios.get<{ tournaments: Tournament[] }>(`${ URL_ENDPOINT }/tournaments`, {
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
  async createTournament(params: TournamentReq): Promise<number> {
    const response = await axios.post<{ tournament_id: number }>(`${ URL_ENDPOINT }/tournaments`, params, {
      params: { ...this.startupParams }
    });
    return response.data.tournament_id;
  }

  /**
   * Обновление состояния турнира
   */
  async updateTournamentState(tournamentId: number) {
    const response = await axios.post(`${ URL_ENDPOINT }/tournaments/state`, {
      tournament_id: tournamentId
    }, { params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Регистрация на турнир
   */
  async registerOnTournament(tournamentId: number) {
    const response = await axios.post(`${ URL_ENDPOINT }/tournament/register`, {
      tournament_id: tournamentId
    }, { params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Получить организаторскую инфу
   */
  async getOrgInfoForTournament(tournamentId: number): Promise<TournamentOrgInfo> {
    const response = await axios.get<TournamentOrgInfo>(`${ URL_ENDPOINT }/tournament/org_info`, {
      params: {
        ...this.startupParams,
        tournament_id: tournamentId
      }
    });
    console.log(response);
    return response.data;
  }

  /**
   * Создание команды
   */
  async registerTeam(title: string) {
    const response = await axios.post(`${ URL_ENDPOINT }/teams`, { title }, { params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Вступление в команду
   */
  async joinTeam(team_id: number) {
    const response = await axios.post(`${ URL_ENDPOINT }/teams/enter`, { team_id }, { params: { ...this.startupParams } });
    console.log(response);
  }

  /**
   * Список ID команд
   */
  async getMyTeams(): Promise<Team[]> {
    const response = await axios.get<{ teams: Team[] }>(`${ URL_ENDPOINT }/teams`, {
      params: { ...this.startupParams }
    });
    console.log(response);
    return response.data.teams;
  }

  /**
   * Подтверждение участия
   */
  async confirmParticipation(tournament_id: number) {
    const response = await axios.post(`${ URL_ENDPOINT }/tournament/check_in`, { tournament_id }, {
      params: { ...this.startupParams }
    });
    console.log(response);
    return response.data.teams;
  }

  /**
   * Получение своей команды в турнире
   */
  async getTeamInTournament(tournament_id: number) {
    const response = await axios.get<{team: TeamData}>(`${ URL_ENDPOINT }/tournaments/me`, {
      params: {
        ...this.startupParams,
        tournament_id
      }
    });
    return response.data.team;
  }

  /**
   * Отправка заявки на турнир
   */
  async joinTournament(request: {tournament_id: number, team_id?: number, title: string}) {
    const response = await axios.post<{team: TeamData}>(`${ URL_ENDPOINT }/tournaments/register`, request, {
      params: {
        ...this.startupParams
      }
    });
  }


}
