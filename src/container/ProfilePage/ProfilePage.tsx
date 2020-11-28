import React from "react";
import { Avatar, Card, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack, Text, Title } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import avatar from '../../assets/tournament_example.png'
import cup_icon from '../../assets/cup_icon.png'
import rating_icon from '../../assets/rating_icon.png'
import sword_icon from '../../assets/sword_icon.png'
import {NameTitle, StatisticDiv, StatisticIconImg, StyledGroup} from './profile.styled'
import {TournamentCard} from "../../component/TournamentCard";

export const ProfilePage = ({id}: {id: string}) => {
    const router = useRouter();

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.popPage()}/>}
            >
                Профиль
            </PanelHeader>
            <StyledGroup>
                <Avatar size={72} src={avatar}/>
                <NameTitle weight={"regular"} level={"2"}>Алексей Мазелюк</NameTitle>
            </StyledGroup>
            <Group header={<Header mode="secondary">Статистика</Header>}>
                <Div>
                    <Card size={'l'}>
                        <StatisticDiv>
                            <StatisticIconImg src={rating_icon} alt={'Рейтинг'}/>
                            <Text weight={"regular"}>Ваш Рейтинг: 100</Text>
                        </StatisticDiv>
                    </Card>
                </Div>
                <Div>
                    <Card size={'l'}>
                        <StatisticDiv>
                            <StatisticIconImg src={cup_icon} alt={'Победы'}/>
                            <Text weight={"regular"}>Побед: 5</Text>
                        </StatisticDiv>
                    </Card>
                </Div>
                <Div>
                    <Card size={'l'}>
                        <StatisticDiv>
                            <StatisticIconImg src={sword_icon} alt={'Турниры'}/>
                            <Text weight={"regular"}>Участие в турнирах: 7</Text>
                        </StatisticDiv>
                    </Card>
                </Div>
            </Group>
            <Group header={<Header mode="secondary">Турниры</Header>}>
                <TournamentCard
                    type={"passed"}
                    title={'Супер-турнир'}
                    discipline={'Dota 2'}
                    date={'27.11.2020 18:00'}
                    place={'3 место'}
                    image={avatar}
                />
            </Group>
        </Panel>
    );
}
