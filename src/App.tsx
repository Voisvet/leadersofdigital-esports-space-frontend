import React, { useEffect } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import { Root, View } from "@vkontakte/vkui";
import { useLocation } from "@happysanta/router";
import {
  PANEL_A_TEST,
  PANEL_MAIN_TEST,
  PANEL_P_TEST,
  PANEL_R_TEST,
  PANEL_T_TEST,
  PANEL_TO_TEST,
  PANEL_TS_TEST,
  VIEW_ACHIEVEMENTS,
  VIEW_MAIN,
  VIEW_PROFILE,
  VIEW_RATING,
  VIEW_TOURNAMENT,
  VIEW_TOURNAMENT_ORGANIZATION,
  VIEW_TOURNAMENTS_SEARCH
} from "./router/router";
import { RootPage } from "./container/RootPage/RootPage";
import { SearchPage } from "./container/SearchPage/SearchPage";
import { OrganizePage } from "./container/OrganizePage/OrganizePage";
import { TournamentPage } from "./container/TournamentPage/TournamentPage";
import { ProfilePage } from "./container/ProfilePage/ProfilePage";
import { RatingPage } from "./container/RatingPage/RatingPage";
import { AchievementsPage } from "./container/AchievementsPage/AchievementsPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    // vkData.updateTournamentState(1);
    // vkData.registerOnTournament(2);
    // vkData.joinTeam(1);
    // vkData.getMyTeams();
    // vkData.registerTeam('Бешеные бурундуки');
    // vkData.getOrgInfoForTournament(2);
    // vkData.searchForTournaments();
    // vkData.createTournament({
    //   title: 'Супер-турнир',
    //   discipline: 'Chess',
    //   discipline_type: "solo",
    //   type: "play_off",
    //   start_time: '2020-01-01 12:00:00'
    // });
  }, []);

  return (
    <Root activeView={location.getViewId()}>
      <View
        id={VIEW_MAIN}
        activePanel={location.getViewActivePanel(VIEW_MAIN)}
        history={location.getViewHistory(VIEW_MAIN)}
      >
        <RootPage id={PANEL_MAIN_TEST} />
      </View>
      <View
        id={VIEW_TOURNAMENTS_SEARCH}
        activePanel={location.getViewActivePanel(VIEW_TOURNAMENTS_SEARCH)}
        history={location.getViewHistory(VIEW_TOURNAMENTS_SEARCH)}
      >
        <SearchPage id={PANEL_TS_TEST} />
      </View>
      <View
        id={VIEW_TOURNAMENT_ORGANIZATION}
        activePanel={location.getViewActivePanel(VIEW_TOURNAMENT_ORGANIZATION)}
        history={location.getViewHistory(VIEW_TOURNAMENT_ORGANIZATION)}
      >
        <OrganizePage id={PANEL_TO_TEST}/>
      </View>
      <View
        id={VIEW_TOURNAMENT}
        activePanel={location.getViewActivePanel(VIEW_TOURNAMENT)}
        history={location.getViewHistory(VIEW_TOURNAMENT)}
      >
        <TournamentPage id={PANEL_T_TEST} />
      </View>
      <View
        id={VIEW_PROFILE}
        activePanel={location.getViewActivePanel(VIEW_PROFILE)}
        history={location.getViewHistory(VIEW_PROFILE)}
      >
        <ProfilePage id={PANEL_P_TEST} />
      </View>
      <View
        id={VIEW_RATING}
        activePanel={location.getViewActivePanel(VIEW_RATING)}
        history={location.getViewHistory(VIEW_RATING)}
      >
        <RatingPage id={PANEL_R_TEST} />
      </View>
      <View
        id={VIEW_ACHIEVEMENTS}
        activePanel={location.getViewActivePanel(VIEW_ACHIEVEMENTS)}
        history={location.getViewHistory(VIEW_ACHIEVEMENTS)}
      >
        <AchievementsPage id={PANEL_A_TEST} />
      </View>
    </Root>
  );
}

export default App;
