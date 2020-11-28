import styled from "styled-components";
import {Div, Group, Title} from "@vkontakte/vkui";

export const StyledGroup = styled(Group)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const NameTitle = styled(Title)`
    margin: 2vh 0 0 0;
`;

export const StatisticDiv = styled(Div)`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const StatisticIconImg = styled.img`
    margin: 0 3vw 0 0;
`;
