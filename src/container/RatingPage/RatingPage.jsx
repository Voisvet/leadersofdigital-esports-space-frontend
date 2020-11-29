import React from "react";
import {Avatar, Cell, Div, Group, Header, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import Icon201CircleFillGold from "@vkontakte/icons/dist/20/1_circle_fill_gold";
import Icon202CircleFillSilver from "@vkontakte/icons/dist/20/2_circle_fill_silver";
import Icon203CircleFillBronze from "@vkontakte/icons/dist/20/3_circle_fill_bronze";
import styled from "styled-components";
import {useRouter} from "@happysanta/router";

const CellWithPlace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

export const RatingPage = ({id}) => {
    const top = [
        {
            name: 'Данил Даньшин',
            place: 1,
            points: 42200,
        },
        {
            name: 'Марина Антоненко',
            place: 2,
            points: 41600,
        },
        {
            name: 'Artem Ka',
            place: 3,
            points: 38600,
        },
        {
            name: 'Виолетта Силенина',
            place: 4,
            points: 35700,
        },
        {
            name: 'Крись Третьякова',
            place: 5,
            points: 30500,
        },
        {
            name: 'Александр Афанасьев',
            place: 6,
            points: 28000,
        },
        {
            name: 'Даниил Соболев',
            place: 7,
            points: 27300,
        },
        {
            name: 'Сергей Корнеев',
            place: 8,
            points: 26600,
        },
        {
            name: 'Роман Соколов',
            place: 9,
            points: 24400,
        },
        {
            name: 'Кирилл Карманов',
            place: 10,
            points: 23800,
        }
    ]

    const router = useRouter();

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => {
                    router.popPage()
                }}/>}
            >
                Рейтинг
            </PanelHeader>
            <Group>
                {
                    top.map((player) => {
                        return (
                            <Group>
                                <CellWithPlace>
                                    {player.place === 1 ?
                                        <Div><Icon201CircleFillGold/></Div> :
                                        player.place === 2 ?
                                            <Div><Icon202CircleFillSilver/></Div> :
                                            player.place === 3 ?
                                                <Div><Icon203CircleFillBronze/></Div> :
                                                <Div style={{margin: '0 5px 0 6px'}}>{player.place}</Div>
                                    }
                                    <Cell before={<Avatar />} description={player.points}>
                                        {player.name}
                                    </Cell>
                                </CellWithPlace>
                            </Group>
                        );
                    })
                }
            </Group>
        </Panel>
    );
}
