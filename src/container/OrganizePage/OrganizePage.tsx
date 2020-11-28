import React from "react";
import { Button, Div, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { MODAL_CREATE_TOURNAMENT } from "../../router/router";
import { TournamentCard } from "../../component/TournamentCard";
import tournament from "../../assets/tournament_example.png";
import { useRouter } from "@happysanta/router";

export const OrganizePage = ({id}: {id: string}) => {
  const router = useRouter();

    return (
        <Panel id={id}>
          <PanelHeader
            left={<PanelHeaderBack onClick={() => router.popPage()}/>}
          >
            Поиск
          </PanelHeader>
          <Div>
            <Button style={{backgroundColor: '#F2F2F2'}} size={"xl"} onClick={() => router.pushModal(MODAL_CREATE_TOURNAMENT)}>Создать турнир</Button>
          </Div>
          <Div>
            <TournamentCard
              type={"planned"}
              title={'Супер-турнир'}
              discipline={'Dota 2'}
              date={'27.11.2020 18:00'}
              image={tournament}
            />
          </Div>
          <Div>
            <TournamentCard
              type={"planned"}
              title={'Супер-турнир'}
              discipline={'Dota 2'}
              date={'27.11.2020 18:00'}
              image={tournament}
            />
          </Div>
          <Div>
            <TournamentCard
              type={"planned"}
              title={'Супер-турнир'}
              discipline={'Dota 2'}
              date={'27.11.2020 18:00'}
              image={tournament}
            />
          </Div>
        </Panel>
    );
}
