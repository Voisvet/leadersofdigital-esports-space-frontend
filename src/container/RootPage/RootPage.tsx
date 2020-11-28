import React from "react";
import { Div, Panel, Text } from "@vkontakte/vkui";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { TournamentCard } from "../../component/TournamentCard";
import Icon16Poll from '@vkontakte/icons/dist/16/poll';
import Icon16DonateOultine from '@vkontakte/icons/dist/16/donate_oultine';
import logo from "../../assets/logo.png";
import tournament from "../../assets/tournament_example.png";
import { useRouter } from "@happysanta/router";
import { PAGE_ACHIEVEMENTS, PAGE_ORGANIZE, PAGE_PROFILE, PAGE_RATING, PAGE_SEARCH } from "../../router/router";

export const RootPage = ({id}: {id: string}) => {
  const router = useRouter();

    return (
        <Panel id={id}>
            <Div>
              <img src={logo} alt={'Logo'} />
              <Text weight={"regular"}>Первое киберспортивное приложение Вконтакте!</Text>
              <Div>
                <Button onClick={() => router.pushPage(PAGE_SEARCH)}>Найти турнир</Button>
                <Button onClick={() => router.pushPage(PAGE_ORGANIZE)}>Организовать турнир</Button>
                <Button onClick={() => router.pushPage(PAGE_PROFILE)}>Профиль</Button>
              </Div>
              <TournamentCard
                type={"current"}
                title={'Супер-турнир'}
                discipline={'Dota 2'}
                nextMatch={'Босс'}
                date={'18:00'}
                image={tournament}
              />
              <Div>
                <Button
                  before={<Icon16Poll />}
                  onClick={() => router.pushPage(PAGE_RATING)}
                >
                  Рейтинг
                </Button>
                <Button
                  before={<Icon16DonateOultine />}
                  onClick={() => router.pushPage(PAGE_ACHIEVEMENTS)}
                >
                  Достижения
                </Button>
              </Div>
            </Div>
        </Panel>
    );
}
