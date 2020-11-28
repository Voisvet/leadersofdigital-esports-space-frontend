import React from "react";
import {Cell, Panel, PanelHeader, PanelHeaderBack, Avatar, Subhead} from "@vkontakte/vkui";
import {useRouter} from "@happysanta/router";
import styled from "styled-components";

const StyledSubhead = styled(Subhead)`
  color: rgba(76, 217, 100, 1);
`

export const AchievementsPage = ({id}) => {
    const achievements = [
        {
            name: 'Первый шаг',
            completed: true,
            description: 'Приянять участие в турнире'
        },
        {
            name: 'Частый гость',
            completed: false,
            description: 'Принять участие в 10 турнирах'
        },
        {
            name: 'Гуру соревнований',
            completed: false,
            description: 'Принять участие в 50 турнирах'
        },
        {
            name: 'Начало положено',
            completed: false,
            description: 'Выиграть 1 турнир'
        },
        {
            name: 'Я у мамы молодец',
            completed: false,
            description: 'Выиграть 5 турниров'
        },
        {
            name: 'Давайте следующий',
            completed: false,
            description: 'Выиграть 10 турниров'
        }
        ];

    const router = useRouter();

    return (
        <Panel id={id}>
            <PanelHeader
                 left={<PanelHeaderBack onClick={() => {router.popPage()}}/>}
            >
                Достижения
            </PanelHeader>
            {
                achievements.map((achievement) => {
                    return <Cell
                        description={
                            <>
                                <StyledSubhead weight={400}>{achievement.completed ? 'Завершено' : null}</StyledSubhead>
                                {achievement.description}
                            </>
                        }
                        before={<Avatar />}
                    >
                        {achievement.name}
                    </Cell>;
                })
            }
        </Panel>
    );
}
