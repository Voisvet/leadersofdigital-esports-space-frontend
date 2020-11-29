/**
 * Определения View и Panel
 */
import { Page, Router } from "@happysanta/router";

export const VIEW_MAIN = 'MainView';
export const PANEL_MAIN_TEST = `${ VIEW_MAIN }_test`;

export const VIEW_TOURNAMENTS_SEARCH = 'TournamentsSearchView';
export const PANEL_TS_TEST = `${ VIEW_TOURNAMENTS_SEARCH }_test`;

export const VIEW_TOURNAMENT_ORGANIZATION = 'TournamentOrganizationView';
export const PANEL_TO_TEST = `${ VIEW_TOURNAMENT_ORGANIZATION }_test`;

export const VIEW_TOURNAMENT = 'TournamentView';
export const PANEL_T_TEST = `${ VIEW_TOURNAMENT }_test`;

export const VIEW_PROFILE = 'ProfileView';
export const PANEL_P_TEST = `${ VIEW_PROFILE }_test`;

export const VIEW_RATING = 'RatingView';
export const PANEL_R_TEST = `${ VIEW_RATING }_test`;

export const VIEW_ACHIEVEMENTS = 'AchievementsView';
export const PANEL_A_TEST = `${ VIEW_ACHIEVEMENTS }_test`;

export const VIEW_MANAGE_TOURNAMENT = 'ManageTournamentView';
export const PANEL_MT_TEST = `${VIEW_MANAGE_TOURNAMENT}_test`;

/**
 * Определения роутов
 */
export const PAGE_ROOT = '/';
export const PAGE_SEARCH = '/search';
export const PAGE_ORGANIZE = '/organize';
export const PAGE_TOURNAMENT = '/tournament/:id([0-9]+)';
export const PAGE_TOURNAMENT_MANAGE = '/tournament/manage/:id([0-9]+)';
export const PAGE_PROFILE = '/profile';
export const PAGE_RATING = '/rating';
export const PAGE_ACHIEVEMENTS = '/achievements';

/**
 * Модальные окна
 */
export const MODAL_FILTER = 'FilterModal';
export const MODAL_CREATE_TEAM = 'CreateTeamModal';
export const MODAL_JOIN_TEAM = 'JoinTeamModal';
export const MODAL_CREATE_TOURNAMENT = 'CreateTournamentModal';

/**
 * Конфигурация роутинга
 */
const routes = {
  [PAGE_ROOT]: new Page(PANEL_MAIN_TEST, VIEW_MAIN),
  [PAGE_SEARCH]: new Page(PANEL_TS_TEST, VIEW_TOURNAMENTS_SEARCH),
  [PAGE_ORGANIZE]: new Page(PANEL_TO_TEST, VIEW_TOURNAMENT_ORGANIZATION),
  [PAGE_TOURNAMENT]: new Page(PANEL_T_TEST, VIEW_TOURNAMENT),
  [PAGE_PROFILE]: new Page(PANEL_P_TEST, VIEW_PROFILE),
  [PAGE_RATING]: new Page(PANEL_R_TEST, VIEW_RATING),
  [PAGE_ACHIEVEMENTS]: new Page(PANEL_A_TEST, VIEW_ACHIEVEMENTS),
  [PAGE_TOURNAMENT_MANAGE]: new Page(PANEL_MT_TEST, VIEW_MANAGE_TOURNAMENT)
};

export const router = new Router(routes);

router.start();
