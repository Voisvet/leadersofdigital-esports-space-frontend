import React from "react";
import {Panel, Text} from "@vkontakte/vkui";
import {TournamentCard} from "../../component/TournamentCard";
import Icon32Poll from '@vkontakte/icons/dist/32/poll';
import Icon16DonateOultine from '@vkontakte/icons/dist/16/donate_oultine';
import logo from "../../assets/logo.png";
import tournament from "../../assets/tournament_example.png";
import {useRouter} from "@happysanta/router";
import {PAGE_ACHIEVEMENTS, PAGE_ORGANIZE, PAGE_PROFILE, PAGE_RATING, PAGE_SEARCH} from "../../router/router";
import {
    AdminButton,
    AdminButtonsDiv,
    CardGroup,
    IconDiv,
    MainGroup, PersonalButton,
    PersonalButtonsDiv,
    TextDiv
} from "./root-page.styled";

export const RootPage = ({id}: { id: string }) => {
    const router = useRouter();

    return (
        <Panel id={id}>
            <MainGroup>
                <IconDiv style={{alignItems: "center"}}>
                    <img src={logo} alt={'Logo'}/>
                </IconDiv>
                <TextDiv>
                    <Text weight={"regular"} style={{maxWidth: '196px'}}>Первое киберспортивное приложение
                        Вконтакте!</Text>
                </TextDiv>
                <AdminButtonsDiv>
                    <AdminButton style={{width: '100%'}} onClick={() => router.pushPage(PAGE_SEARCH)}>Найти турнир</AdminButton>
                    <AdminButton style={{flex: '1 0 auto', width: '40%'}} onClick={() => router.pushPage(PAGE_ORGANIZE)}>Управление</AdminButton>
                    <AdminButton style={{flex: '1 0 auto', width: '40%'}} onClick={() => router.pushPage(PAGE_PROFILE)}>Профиль</AdminButton>
                </AdminButtonsDiv>
                <CardGroup>
                    <TournamentCard
                        type={"current"}
                        title={'Супер-турнир'}
                        discipline={'Dota 2'}
                        nextMatch={'Босс'}
                        date={'18:00'}
                        image={tournament}
                    />
                </CardGroup>
                <PersonalButtonsDiv>
                    <PersonalButton
                        before={<Icon32Poll width={20} height={20}/>}
                        onClick={() => router.pushPage(PAGE_RATING)}
                    >
                        Рейтинг
                    </PersonalButton>
                    <PersonalButton
                        before={<Icon16DonateOultine width={20} height={20}/>}
                        onClick={() => router.pushPage(PAGE_ACHIEVEMENTS)}
                    >
                        Достижения
                    </PersonalButton>
                </PersonalButtonsDiv>
            </MainGroup>
        </Panel>
    );
}
