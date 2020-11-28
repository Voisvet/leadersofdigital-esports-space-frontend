import React from "react";
import { Div, Panel, Text } from "@vkontakte/vkui";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { TournamentCard } from "../../component/TournamentCard";
import Icon16Poll from '@vkontakte/icons/dist/16/poll';
import Icon16DonateOultine from '@vkontakte/icons/dist/16/donate_oultine';
import logo from "../../assets/logo.png";
import tournament from "../../assets/tournament_example.png";

export const RootPage = ({id}: {id: string}) => {
    return (
        <Panel id={id}>
            <Div>
              <img src={logo} alt={'Logo'} />
              <Text weight={"regular"}>Первое киберспортивное приложение Вконтакте!</Text>
              <Div>
                <Button>Найти турнир</Button>
                <Button>Организовать турнир</Button>
                <Button>Профиль</Button>
              </Div>
              <TournamentCard title={'Супер-турнир'} discipline={'Dota 2'} nextMatch={'Босс'} time={'18:00'} image={tournament} />
              <Div>
                <Button before={<Icon16Poll />}>Рейтинг</Button>
                <Button before={<Icon16DonateOultine />}>Достижения</Button>
              </Div>
            </Div>
        </Panel>
    );
}
