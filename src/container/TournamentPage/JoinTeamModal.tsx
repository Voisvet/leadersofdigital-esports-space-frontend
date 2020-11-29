import React, { useState } from "react";
import {
  Div,
  FormLayout,
  FormLayoutGroup,
  Input,
  ModalPage,
  ModalPageHeader,
  OS,
  PanelHeaderButton,
  platform
} from "@vkontakte/vkui";
import { Icon24Cancel, Icon24Done } from "@vkontakte/icons";
import { useParams, useRouter } from "@happysanta/router";
import { store } from "../../store/store";


export const JoinTeamModal = ({id}: {id: string}) => {
  const router = useRouter();
  const [data, setData] = useState();
  const { id: tournamentId } = useParams();

  return (
    <ModalPage
      id={id}
      onClose={() => router.popPage()}
      header={
        <ModalPageHeader
          left={platform() === OS.ANDROID && <PanelHeaderButton onClick={() => router.popPage()}><Icon24Cancel /></PanelHeaderButton>}
          right={<PanelHeaderButton onClick={() => store.joinTournament(+tournamentId, {teamId: data})}>{platform() === OS.IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
        >
          Присоединиться к команде
        </ModalPageHeader>
      }
    >
      <Div>
        <FormLayout>
          <FormLayoutGroup top="Секретный код">
            <Input
              placeholder={'Введите код команды'}
              onChange={(e) => setData(e.target.value as any)}
              value={data}
            />
          </FormLayoutGroup>
        </FormLayout>
      </Div>
    </ModalPage>
  )
}
