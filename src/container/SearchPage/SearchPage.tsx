import React, { useEffect } from "react";
import { Button, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import { TournamentCard } from "../../component/TournamentCard";
import tournament_image from "../../assets/tournament_example.png";
import { MODAL_FILTER, PAGE_TOURNAMENT } from "../../router/router";
import { store } from "../../store/store";
import { observer } from "mobx-react-lite";

export const SearchPage = observer(({id}: { id: string }) => {
    const router = useRouter();

    useEffect(() => {
      store.updateTournaments();
    }, []);

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
                    aside={<Button style={{color: '#3F8AE0'}} mode="tertiary"
                                   onClick={() => router.pushModal(MODAL_FILTER)}>Отфильтровать</Button>}
                >
                    <span style={{color: '#F2F2F2'}}>Предстоящие</span>
                </Header>
            }>
              {
                store.tournamentsNotOrganizedByMe.map(tournament => (
                  <Div>
                    <TournamentCard
                      onClick={() => router.pushPage(PAGE_TOURNAMENT, {id: tournament.id as any})}
                      type={"planned"}
                      registration={"planned"}
                      title={tournament.title}
                      discipline={tournament.discipline}
                      date={tournament.start_time}
                      image={tournament_image}
                    />
                  </Div>
                ))
              }
            </Group>
        </Panel>
    );
})
