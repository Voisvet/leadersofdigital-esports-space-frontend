import React from "react";
import {Cell, Panel, PanelHeader, PanelHeaderBack, Avatar, Subhead} from "@vkontakte/vkui";
import {useRouter} from "@happysanta/router";
import styled from "styled-components";
import icon56 from "../../assets/icon56.png";
import icon72 from "../../assets/icon72.png";

const StyledSubhead = styled(Subhead)`
  color: rgba(76, 217, 100, 1);
`

const StyledAvatar = styled(Avatar)`
  border-radius: 0;
`

export const AchievementsPage = ({id}) => {
    const achievements = [
        {
            name: 'Первый шаг',
            completed: true,
            description: 'Приянять участие в турнире',
            icon: icon72
        },
        {
            name: 'Частый гость',
            completed: false,
            description: 'Принять участие в 10 турнирах',
            icon: icon72
        },
        {
            name: 'Гуру соревнований',
            completed: false,
            description: 'Принять участие в 50 турнирах',
            icon: icon72
        },
        {
            name: 'Начало положено',
            completed: false,
            description: 'Выиграть 1 турнир',
            icon: '../../assets/56.png'
        },
        {
            name: 'Я у мамы молодец',
            completed: false,
            description: 'Выиграть 5 турниров',
            icon: '../../assets/56.png'
        },
        {
            name: 'Давайте следующий',
            completed: false,
            description: 'Выиграть 10 турниров',
            icon: '../../assets/56.png'
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
                        before={<StyledAvatar src={achievement.icon} />}
                    >
                        {achievement.name}
                    </Cell>;
                })
            }
        </Panel>
    );
}
