import React from "react";
import {
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
import { useRouter } from "@happysanta/router";


export const CreateTeamModal = ({id}: {id: string}) => {
  const router = useRouter();
  return (
    <ModalPage
      id={id}
      onClose={() => router.popPage()}
      header={
        <ModalPageHeader
          left={platform() === OS.ANDROID && <PanelHeaderButton onClick={() => router.popPage()}><Icon24Cancel /></PanelHeaderButton>}
          right={<PanelHeaderButton onClick={() => router.popPage()}>{platform() === OS.IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
        >
          Создание команды
        </ModalPageHeader>
      }
    >
      <FormLayout>
        <FormLayoutGroup top="Название команды">
          <Input placeholder={'Введите название команды'}/>
        </FormLayoutGroup>
      </FormLayout>
    </ModalPage>
  )
}
