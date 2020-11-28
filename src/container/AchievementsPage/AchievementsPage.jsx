import React from "react";
import {Cell, Panel, PanelHeader, PanelHeaderBack, Avatar} from "@vkontakte/vkui";

export const AchievementsPage = ({id}) => {
    const achievements = [
        {
            name: 'Первый шаг',
            description: 'Приянять участие в турнире'
        },
        {
            name: 'Частый гость',
            description: 'Принять участие в 10 турнирах'
        },
        {
            name: 'Гуру соревнований',
            description: 'Принять участие в 50 турнирах'
        },
        {
            name: 'Начало положено',
            description: 'Выиграть 1 турнир'
        },
        {
            name: 'Я у мамы молодец',
            description: 'Выиграть 5 турниров'
        },
        {
            name: 'Давайте следующий',
            description: 'Выиграть 10 турниров'
        }
        ];

    return (
        <Panel id={id}>
            <PanelHeader
                 left={<PanelHeaderBack onClick={() => {}}/>}
            >
                Достижения
            </PanelHeader>
            {
                achievements.map((achievement) => {
                    return <Cell
                        description={achievement.description}
                        before={<Avatar />}
                    >
                        {achievement.name}
                    </Cell>;
                })
            }
        </Panel>
    );
}
