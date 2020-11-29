import React, { useEffect, useState } from "react";
import {
    Avatar,
    Button,
    Card,
    Cell,
    CellButton,
    Div,
    Group,
    Header,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Separator,
    Text
} from "@vkontakte/vkui";
import { useParams, useRouter } from "@happysanta/router";
import { TournamentCard } from "../../component/TournamentCard";
import avatar from "../../assets/tournament_example.png";
import styled from "styled-components";

import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon201CircleFillGold from '@vkontakte/icons/dist/20/1_circle_fill_gold';
import Icon202CircleFillSilver from '@vkontakte/icons/dist/20/2_circle_fill_silver';
import Icon203CircleFillBronze from '@vkontakte/icons/dist/20/3_circle_fill_bronze';
import { store } from "../../store/store";
import { observer } from "mobx-react-lite";
import { MODAL_CREATE_TEAM, MODAL_JOIN_TEAM, router } from "../../router/router";
import { TeamData } from "../../store/api.service";

const StyledDivForLink = styled(Div)`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`

const CellWithPlace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledButton = styled(Button)`
    min-height: 44px;
    background-color: #3F8AE0;
    color: #FFFFFF;
`

export const TournamentPage = observer(({id}: {id: string}) => {
    const router = useRouter();
    const { id: tournamentId } = useParams();
    const tournament = store.getCurrentTournament(+tournamentId);

    const [isRegistered, setIsRegistered] = useState(false);
    const [stage, setStage] = useState("planned")
    const [registration, setRegistration] = useState("planned")
    const [isCreatedTeam, setIsCreatedTeam] = useState(false);
    const [isJoinedTeam, setIsJoinedTeam] = useState(false);
    const [isRival, setIsRival] = useState(false);
    const [isResult, setIsResult] = useState(false);
    const nextRival = 'Босс'

    function handleStatusChange(status: string) {
        setIsRegistered(status as any);
    }

    function setStatusCreation(status: string) {
        setIsCreatedTeam(status as any);
    }

    useEffect(() => {
        store.updateCurrentTournament(+tournamentId);
    }, []);

    useEffect(() => {
        isRegistered && setStage("current");
        isRegistered && setRegistration("registered");
    }, [isRegistered])

    useEffect(() => {
        isResult && setStage("passed")
    }, [isResult])
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.popPage()}/>}
            >
                Турнир
            </PanelHeader>
            <Group>
                {
                    store.currentTournament.title && (
                      <TournamentCard
                        type={stage as any}
                        title={store.currentTournament.title}
                        discipline={store.currentTournament.discipline}
                        date={store.currentTournament.start_time}
                        place={'3 место'}
                        image={avatar}
                        nextMatch={nextRival}
                        registration={registration as any}
                      />
                    )
                }
                {isRegistered || store.teamData.captain > 0 ? (
                    <Group>
                        {isRival ?
                            <Rival isResult={isResult} setIsResult={setIsResult}/> :
                            <>
                                {isCreatedTeam || isJoinedTeam || store.teamData.captain > 0 ?
                                    <TeamInfo
                                        teamName={store.teamData.title}
                                        inviteCode={store.teamData.id}
                                    /> :
                                    <TeamButtons
                                        handleCreateTeam={() => setIsCreatedTeam(true)}
                                        handleJoinTeam={() => setIsJoinedTeam(true)}
                                    />
                                }
                                <Links
                                    isCreatedTeam={isCreatedTeam}
                                    setIsCreatedTeam={setStatusCreation}
                                    isJoinedTeam={isJoinedTeam}
                                    changeStatus={handleStatusChange}
                                />
                            </>
                        }
                        {(isCreatedTeam || isJoinedTeam || isRival || store.teamData.captain > 0) && !isResult ?
                            (<>
                                <Separator style={{color: '#D7D8D9'}}/>
                                <Team users={store.teamData} userInfo={store.teammatesInfo}/>
                            </>) :
                            null
                        }
                    </Group>
                ) : (
                        <Div>
                            <StyledButton
                                stretched
                                onClick={() => setIsRegistered(true)}
                            >
                                Зарегистрироваться
                            </StyledButton>
                        </Div>
                    )
                }
            </Group>
        </Panel>
    );
})

export const TeamButtons = ({handleCreateTeam, handleJoinTeam}: any) => {
    return (
        <>
            <Div>
                <StyledButton
                    stretched
                    onClick={() => router.pushModal(MODAL_CREATE_TEAM)}
                >
                    Создать команду
                </StyledButton>
            </Div>
            <Div>
                <StyledButton
                    stretched
                    onClick={() => router.pushModal(MODAL_JOIN_TEAM)}
                >
                    Присоединиться к команде
                </StyledButton>
            </Div>
            <Separator style={{color: '#D7D8D9'}}/>
        </>
    )
}

export const Links = ({isCreatedTeam, setIsCreatedTeam, isJoinedTeam, changeStatus}: any) => {
    return (<StyledDivForLink>
        {/*{isCreatedTeam || isJoinedTeam ?*/}
        {/*    <CellButton mode="danger" onClick={() => setIsCreatedTeam(false)}>Распустить команду</CellButton> :*/}
        {/*    null}*/}
        <CellButton mode="danger" onClick={() => changeStatus(false)}>Отменить регистрацию</CellButton>
    </StyledDivForLink>)
}

export const TeamInfo = ({teamName, inviteCode}: any) => {
    return (
        <Div>
            <Card size={'l'} style={{padding: '15px'}}>
                <Text weight={"regular"}>Вы создали команду <b>{teamName}</b></Text>
                <br/>
                <Text weight={"regular"}>Код приглашения <b>{inviteCode}</b>, отправьте его своим друзьям</Text>
            </Card>
        </Div>
    )
}

export const Team = ({users, userInfo}: { users: TeamData, userInfo: any }) => {
    const team = [users.captain, ...users.players];

    return (
        <Group header={<Header mode="secondary">Команда</Header>}>
            <Div>
                {
                    team.map((teammate) => {
                        return (
                          <Cell before={<Avatar src={userInfo[teammate].photo}/>}>
                              {userInfo[teammate].name}
                          </Cell>
                        )
                    })
                }
            </Div>
        </Group>
    )
}

export const Rival = ({isResult, setIsResult}: any) => {
    const teamLead = {
        name: 'Данил Даньшин',
        description: 'Капитан команды-соперника',
    }
    return (
        <Group>
            {isResult ?
                <TopPlayers/> :
                <><Cell description={teamLead.description} before={<Avatar/>} asideContent={<Icon28Messages/>}>
                    {teamLead.name}
                </Cell>
                    <Div>
                        <StyledButton
                            stretched
                            onClick={() => setIsResult(true)}
                        >
                            Отправить результат
                        </StyledButton>
                    </Div>
                    <Separator style={{color: "white"}}/>
                </>
            }
        </Group>
    )
}

export const TopPlayers = () => {
    const top = [
        {
            name: 'Данил Даньшин',
            place: 1,
        },
        {
            name: 'Марина Антоненко',
            place: 2,
        },
        {
            name: 'Artem Ka',
            place: 3,
        },
        {
            name: 'Виолетта Силенина',
            place: 4,
        },
        {
            name: 'Крись Третьякова',
            place: 5,
        }
    ]

    return (
        <Group header={<Header mode="secondary">Результаты</Header>}>
            {
                top.map((player) => {
                    return (
                        <Div>
                            <CellWithPlace>
                                {player.place === 1 ?
                                    <Div><Icon201CircleFillGold/></Div> :
                                    player.place === 2 ?
                                        <Div><Icon202CircleFillSilver/></Div> :
                                        player.place === 3 ?
                                            <Div><Icon203CircleFillBronze/></Div> :
                                            <Div style={{margin: '0 5px 0 6px'}}>{player.place}</Div>
                                }
                                <Cell before={<Avatar/>}>
                                    {player.name}
                                </Cell>
                            </CellWithPlace>
                        </Div>
                    );
                })
            }
        </Group>
    )

}
