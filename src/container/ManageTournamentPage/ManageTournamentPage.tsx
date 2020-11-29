import React from "react";
import {Button, Card, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import {useRouter} from "@happysanta/router";
import {TournamentCard} from "../../component/TournamentCard";
import avatar from '../../assets/tournament_example.png';
import styled from "styled-components";
import user_icon from '../../assets/user_icon.png'
import team_icon from '../../assets/team_icon.png'

const StatisticDiv = styled(Div)`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  align-items: center;
  padding: 24px 12px;
`

const CardContainer = styled.div`
  margin: 0 10px;
`

const EventsContainer = styled.div`
  padding: 16px 11px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ManageTournamentPage = ({id}: { id: string }) => {
    const router = useRouter();

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.popPage()}/>}
            >
                Турнир
            </PanelHeader>
            <Group>
                <TournamentCard title={'Супер-турнир'} discipline={'DotA 2'} date={'153135'} image={avatar}
                                type={"planned"}/>
                <Div>
                    <Button style={{backgroundColor: '#3F8AE0', color: '#FFFFFF'}} size={"xl"}>Редактировать
                        турнир</Button>
                </Div>
            </Group>
            <Group header={<Header mode="secondary">Статистика</Header>}>
                <Div>
                    <Card size="l">
                        <StatisticDiv>
                            <img src={user_icon} alt={'Участик'}/>
                            <CardContainer>
                                Участников: 300
                            </CardContainer>
                        </StatisticDiv>
                    </Card>
                </Div>
                <Div>
                    <Card size="l">
                        <StatisticDiv>
                            <img src={team_icon} alt={'Участик'}/>
                            <CardContainer>
                                Команд: 100
                            </CardContainer>
                        </StatisticDiv>
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
                        <Button style={{backgroundColor: '#3F8AE0', color: '#FFFFFF'}} size={"xl"}>Турнирная
                            сетка</Button>
                    </Card>
                </Div>
            </Group>
        </Panel>
    )
}
