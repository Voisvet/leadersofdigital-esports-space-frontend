import React from "react";
import {BackgroundImg, CardContainer, StyledText, StyledTitle, TextContainer} from './tournamentCard.styled';

export interface TournamentCardProps {
    title: string;
    discipline: string;
    nextMatch?: string;
    place?: string;
    date: string;
    image: string;
    type: 'current' | 'passed' | 'planned';
    registration?: 'registered' | 'planned';
}

export const TournamentCard = (props: TournamentCardProps) => {
    return (
        <CardContainer size={'l'}>
            <BackgroundImg src={props.image} alt={props.title}/>
            <TextContainer>
                <StyledTitle weight={"regular"} level={"2"}>{props.title}</StyledTitle>
                <StyledTitle weight={"regular"} level={"3"}>{props.discipline}</StyledTitle>
                {
                    props.type === 'current' ? (
                        <>
                            <StyledText weight={"regular"}>Следующий соперник:</StyledText>
                            <StyledText weight={"regular"}>{props.nextMatch}, {props.date}</StyledText>
                        </>
                    ) : null
                }
                {['passed', 'planned'].includes(props.type) ?
                    (<>
                        <StyledText weight={"regular"}>{props.date}</StyledText>
                        <StyledText weight={"regular"}>{
                            props.registration === 'planned' ? 'Заявлен' : 'Вы зарегистрированы'
                        }</StyledText>
                    </>)
                    : null}
                {props.type === 'passed' ? (<StyledText weight={"regular"}>{props.place}</StyledText>) : null}
            </TextContainer>
        </CardContainer>
    )
}
