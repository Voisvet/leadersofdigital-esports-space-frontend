import React, {useEffect, useState} from "react";
import {
    Button,
    Group,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Div,
    Separator,
    Link,
    Card,
    Cell,
    Subhead,
    Text, Avatar, Header
} from "@vkontakte/vkui";
import {useRouter} from "@happysanta/router";
import {TournamentCard} from "../../component/TournamentCard";
import avatar from "../../assets/tournament_example.png";
import styled from "styled-components";

import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon201CircleFillGold from '@vkontakte/icons/dist/20/1_circle_fill_gold';
import Icon202CircleFillSilver from '@vkontakte/icons/dist/20/2_circle_fill_silver';
import Icon203CircleFillBronze from '@vkontakte/icons/dist/20/3_circle_fill_bronze';
import {set} from "mobx";

const ContainerForLink = styled.div`
  margin: 8px 0;
`

const StyledDivForLink = styled(Div)`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`

const StyledLink = styled(Link)`
  color: #E64646;
`

const CellWithPlace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TournamentPage = ({id}) => {
    const router = useRouter();
    const [isRegistered, setIsRegistered] = useState(false);
    const [stage, setStage] = useState("planned")
    const [registration, setRegistration] = useState("planned")
    const nextRival = {name: 'Босс'}

    function handleStatusChange(status) {
        setIsRegistered(status);
    }

    function handleStageChange(changedStage) {
        setStage(changedStage);
    }

    useEffect(() => {
        isRegistered && setStage("current");
        isRegistered && setRegistration("registered");
    })

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.popPage()}/>}
            >
                Турнир
            </PanelHeader>
            <Group>
                <TournamentCard
                    type={stage}
                    title={'Супер-турнир'}
                    discipline={'Dota 2'}
                    date={'27.11.2020 18:00'}
                    place={'3 место'}
                    image={avatar}
                    nextMatch={nextRival}
                    registration={registration}
                />
                {isRegistered ?
                    <ChoiceOfTypeTeam
                        changeStatus={handleStatusChange}
                        changeStage={handleStageChange}
                    /> :
                    <Div>
                        <Button
                            stretched
                            style={{background: '#72C0EA', minHeight: '44px'}}
                            onClick={() => setIsRegistered(true)}
                        >
                            Зарегестрироваться
                        </Button>
                    </Div>
                }
            </Group>
        </Panel>
    );
}

export const ChoiceOfTypeTeam = ({changeStatus, changeStage}) => {
    const [isCreatedTeam, setIsCreatedTeam] = useState(false);
    const [isJoinedTeam, setIsJoinedTeam] = useState(false);
    const [isRival, setIsRival] = useState(false);
    const [isResult, setIsResult] = useState(false);

    function setStatusCreation(status) {
        setIsCreatedTeam(status);
    }

    useEffect(() => {
        isResult && changeStage("passed")
    })

    return (
        <Group>
            {isRival ?
                <Rival isResult={isResult} setIsResult={setIsResult}/> :
                <>
                    {isCreatedTeam || isJoinedTeam ?
                        <CreationTeam/> :
                        (<><Div>
                            <Button
                                stretched
                                style={{background: '#72C0EA', minHeight: '44px'}}
                                onClick={() => setIsCreatedTeam(true)}
                            >
                                Создать команду
                            </Button>
                        </Div>
                            <Div>
                                <Button
                                    stretched
                                    style={{background: '#72C0EA', minHeight: '44px'}}
                                    onClick={() => setIsJoinedTeam(true)}
                                >
                                    Присоединиться к команде
                                </Button>
                            </Div>
                            <Separator style={{color: '#D7D8D9'}}/></>)
                    }
                    <Links
                        isCreatedTeam={isCreatedTeam}
                        setIsCreatedTeam={setStatusCreation}
                        isJoinedTeam={isJoinedTeam}
                        changeStatus={changeStatus}
                    />
                </>
            }
            {(isCreatedTeam || isJoinedTeam || isRival) && !isResult ?
                (<>
                    <Separator style={{color: '#D7D8D9'}}/>
                    <Team/>
                </>) :
                null
            }
        </Group>
    );
}

export const Links = ({isCreatedTeam, setIsCreatedTeam, isJoinedTeam, changeStatus}) => {
    return (<StyledDivForLink>
        {isCreatedTeam || isJoinedTeam ?
            <ContainerForLink>
                <StyledLink onClick={() => setIsCreatedTeam(false)}>Распустить команду</StyledLink><br/>
            </ContainerForLink> :
            null
        }
        <ContainerForLink>
            <StyledLink onClick={() => changeStatus(false)}>Отменить регистрацию</StyledLink>
        </ContainerForLink>
    </StyledDivForLink>)
}

export const CreationTeam = () => {
    return (
        <Div>
            <Card size={'l'} style={{padding: '15px'}}>
                <Text weight={400}>Вы создали команду <b>Ночные волки</b></Text>
                <br/>
                <Text weight={400}>Код приглашения <b>000000</b>, отправьте его своим друзьям</Text>
            </Card>
        </Div>
    )
}

export const Team = () => {
    const team = [
        {
            name: 'Данил Даньшин',
        },
        {
            name: 'Марина Антоненко',
        },
        {
            name: 'Artem Ka',
        },
        {
            name: 'Виолетта Силенина',
        },
        {
            name: 'Крись Третьякова',
        }
    ]

    return (
        <Group header={<Header mode="secondary">Команда</Header>}>
            {
                team.map((teammate) => {
                    return (
                        <Cell before={<Avatar/>}>
                            {teammate.name}
                        </Cell>
                    )
                })
            }
        </Group>
    )
}

export const Rival = ({isResult, setIsResult}) => {
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
                        <Button
                            stretched
                            style={{background: '#72C0EA', minHeight: '44px'}}
                            onClick={() => setIsResult(true)}
                        >
                            Отправить результат
                        </Button>
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
