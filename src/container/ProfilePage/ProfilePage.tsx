import React from "react";
import { Avatar, Card, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack, Text, Title } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import avatar from '../../assets/tournament_example.png'
import cup_icon from '../../assets/cup_icon.png'
import rating_icon from '../../assets/rating_icon.png'
import sword_icon from '../../assets/sword_icon.png'
import { TournamentCard } from "../../component/TournamentCard";

export const ProfilePage = ({id}: {id: string}) => {
    const router = useRouter();

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.popPage()}/>}
            >
                Профиль
            </PanelHeader>
            <Group>
                <Avatar size={72} src={avatar}/>
                <Title weight={"regular"} level={"2"}>Алексей Мазелюк</Title>
            </Group>
            <Group header={<Header mode="secondary">Статистика</Header>}>
                <Div>
                    <Card size={'l'}>
                        <Div>
                            <img src={rating_icon} alt={'Рейтинг'}/>
                            <Text weight={"regular"}>Ваш Рейтинг: 100</Text>
                        </Div>
                    </Card>
                </Div>
                <Div>
                    <Card size={'l'}>
                        <Div>
                            <img src={cup_icon} alt={'Победы'}/>
                            <Text weight={"regular"}>Побед: 5</Text>
                        </Div>
                    </Card>
                </Div>
                <Div>
                    <Card size={'l'}>
                        <Div>
                            <img src={sword_icon} alt={'Турниры'}/>
                            <Text weight={"regular"}>Участие в турнирах: 7</Text>
                        </Div>
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
