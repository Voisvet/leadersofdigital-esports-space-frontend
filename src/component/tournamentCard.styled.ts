import styled from "styled-components";
import {Card, Title, Text} from "@vkontakte/vkui";

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
`;

export const CardContainer = styled(Card)`
  position: relative;
  overflow: hidden;
  min-height: 184px;
  margin: 12px 16px;
  
  .Card__in {
    position: unset;
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  text-align: center;
  background: rgba(25, 25, 26, 0.7);
`

export const StyledTitle = styled(Title)`
  margin: 5px 0;
`

export const StyledText = styled(Text)`
  margin: 5px 0;
`
