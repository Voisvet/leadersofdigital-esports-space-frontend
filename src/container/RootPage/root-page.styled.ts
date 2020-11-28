import styled from "styled-components";
import {Button, Div, Group, Panel} from "@vkontakte/vkui";

export const MainGroup = styled(Group)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconDiv = styled(Div)`
    padding: 5vh 0 2vh 0;
`

export const TextDiv = styled(Div)`
    text-align: center;
`

export const AdminButtonsDiv = styled(Div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
`

export const AdminButton = styled(Button)`
    background-color: #3F8AE0;
    color: #FFFFFF;
    height: 44px;
    margin: 5px;
`

export const CardGroup = styled(Group)`
    width: 100%;
`

export const PersonalButtonsDiv = styled(Div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: center;
`

export const PersonalButton = styled(Button)`
    margin: 5px;
    height: 44px;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    justify-content: center;
`
