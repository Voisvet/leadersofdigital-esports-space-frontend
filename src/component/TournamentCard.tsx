import React from "react";
import { Card, Text, Title } from "@vkontakte/vkui";

export interface TournamentCardProps {
  title: string;
  discipline: string;
  nextMatch: string;
  time: string;
  image: string;
}

export const TournamentCard = (props: TournamentCardProps) => {
  return (
    <Card size={'l'}>
      <Title weight={"regular"} level={"2"}>{props.title}</Title>
      <Title weight={"regular"} level={"3"}>{props.discipline}</Title>
      <Text weight={"regular"}>Следующий соперник:</Text>
      <Text weight={"regular"}>{props.nextMatch}, {props.time}</Text>
      <img src={props.image} alt={props.title}/>
    </Card>
  )
}
