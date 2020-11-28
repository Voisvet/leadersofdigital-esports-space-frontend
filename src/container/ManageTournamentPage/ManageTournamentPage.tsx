import React from "react";
import { Button, Card, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import { TournamentCard } from "../../component/TournamentCard";
import avatar from '../../assets/tournament_example.png';
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 24px 48px;
`

const EventsContainer = styled.div`
  padding: 16px 11px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ManageTournamentPage = ({id}: {id: string}) => {
  const router = useRouter();

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={() => router.popPage()}/>}
      >
        Турнир
      </PanelHeader>
      <Group>
        <TournamentCard title={'Супер-турнир'} discipline={'DotA 2'} date={'153135'} image={avatar} type={"planned"} />
        <Div>
          <Button size={"xl"}>Редактировать турнир</Button>
        </Div>
      </Group>
      <Group header={<Header mode="secondary">Статистика</Header>}>
        <Div>
          <Card size="l">
            <CardContainer>
              Участников: 300
            </CardContainer>
          </Card>
        </Div>
        <Div>
          <Card size="l">
            <CardContainer>
              Команд: 100
            </CardContainer>
          </Card>
        </Div>
      </Group>
      <Group header={<Header mode="secondary">Подтверждение</Header>}>
        <Div>
          <Card size="l">
            <EventsContainer>
              События ожидают: 10
              <Button size={"xl"} style={{marginTop: 16}}>Подтвердить</Button>
            </EventsContainer>
          </Card>
        </Div>
      </Group>
      <Group header={<Header mode="secondary">Турнирная сетка</Header>}>
        <Div>
          <Card size="l">
            <Button size={"xl"}>Турнирная сетка</Button>
          </Card>
        </Div>
      </Group>
    </Panel>
  )
}
