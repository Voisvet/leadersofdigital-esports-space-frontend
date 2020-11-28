import React from "react";
import { Card, Text, Title } from "@vkontakte/vkui";

export interface TournamentCardProps {
  title: string;
  discipline: string;
  nextMatch?: string;
  place?: string;
  date: string;
  image: string;
  type: 'current' | 'passed' | 'planned'
}

export const TournamentCard = (props: TournamentCardProps) => {
  return (
    <Card size={'l'}>
      <Title weight={"regular"} level={"2"}>{props.title}</Title>
      <Title weight={"regular"} level={"3"}>{props.discipline}</Title>
      {props.type === 'current' ? (
          <>
            <Text weight={"regular"}>Следующий соперник:</Text>
            <Text weight={"regular"}>{props.nextMatch}, {props.date}</Text>
          </>
        ) : null}
      {['passed', 'planned'].includes(props.type) ? (<Text weight={"regular"}>{props.date}</Text>) : null}
      {props.type === 'passed' ? (<Text weight={"regular"}>{props.place}</Text>) : null}
      <img src={props.image} alt={props.title}/>
    </Card>
  )
}
