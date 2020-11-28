import React from "react";
import { Button, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import { TournamentCard } from "../../component/TournamentCard";
import tournament from "../../assets/tournament_example.png";
import { MODAL_FILTER } from "../../router/router";

export const SearchPage = ({id}: {id: string}) => {
  const router = useRouter();

    return (
        <Panel id={id}>
          <PanelHeader
            left={<PanelHeaderBack onClick={() => router.popPage()}/>}
          >
            Поиск
          </PanelHeader>
          <Group header={
            <Header
              mode="secondary"
              aside={<Button mode="tertiary" onClick={() => router.pushModal(MODAL_FILTER)}>Отфильтровать</Button>}
            >
              Статистика
            </Header>
          }>
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
          </Group>
        </Panel>
    );
}
