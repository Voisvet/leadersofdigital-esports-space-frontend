import React, { useEffect } from "react";
import { Button, Div, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { MODAL_CREATE_TOURNAMENT, PAGE_TOURNAMENT_MANAGE } from "../../router/router";
import { TournamentCard } from "../../component/TournamentCard";
import tournament_img from "../../assets/tournament_example.png";
import { useRouter } from "@happysanta/router";
import { store } from "../../store/store";
import { observer } from "mobx-react-lite";

export const OrganizePage = observer(({id}: {id: string}) => {
  const router = useRouter();

  useEffect(() => {
    store.updateTournaments();
  }, []);

  console.log(store.tournamentsOrganizedByMe, store.tournaments)

  return (
      <Panel id={id}>
        <PanelHeader
          left={<PanelHeaderBack onClick={() => router.popPage()}/>}
        >
          Управление
        </PanelHeader>
        <Div>
          <Button size={"xl"} onClick={() => router.pushModal(MODAL_CREATE_TOURNAMENT)}>Создать турнир</Button>
        </Div>
        {
          store.tournamentsOrganizedByMe.map(tournament => (
            <Div>
              <TournamentCard
                onClick={() => router.pushPage(PAGE_TOURNAMENT_MANAGE, { id: tournament.id as any })}
                type={"planned"}
                title={tournament.title}
                discipline={tournament.discipline}
                date={tournament.start_time}
                image={tournament_img}
              />
            </Div>
          ))
        }
      </Panel>
    );
})
