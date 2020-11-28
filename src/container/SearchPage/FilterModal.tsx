import React from "react";
import {
  Button,
  FormLayout,
  FormLayoutGroup,
  ModalPage,
  ModalPageHeader,
  OS,
  PanelHeaderButton,
  platform,
  Select,
  SelectMimicry
} from "@vkontakte/vkui";
import { Icon24Cancel, Icon24Done } from "@vkontakte/icons";
import { useRouter } from "@happysanta/router";

export const FilterModal = ({id, onClose}: {id: string, onClose: any}) => {
  const router = useRouter();
  return (
    <ModalPage
      id={id}
      onClose={onClose}
      header={
        <ModalPageHeader
          left={platform() === OS.ANDROID && <PanelHeaderButton onClick={() => router.popPage()}><Icon24Cancel /></PanelHeaderButton>}
          right={<PanelHeaderButton onClick={() => router.popPage()}>{platform() === OS.IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
        >
          Фильтры
        </ModalPageHeader>
      }
    >
      <FormLayout>
        <Select top="Дисциплина" placeholder="Выбрать дисциплину">
          <option value="League of Legends">League of Legends</option>
          <option value="DotA 2">DotA 2</option>
          <option value="World of Tanks">World of Tanks</option>
          <option value="CS:GO">CS:GO</option>
        </Select>

        <FormLayoutGroup top="Тип турнира">
          <Button size={"l"}>Любой</Button>
          <Button size={"l"} mode={"secondary"}>Плей-офф</Button>
          <Button size={"l"} mode={"secondary"} disabled>Групповой</Button>
        </FormLayoutGroup>

        <SelectMimicry top="Дата" placeholder="Выбрать дату" disabled />

        <FormLayoutGroup top="Время">
          <SelectMimicry placeholder="От" disabled />
          <SelectMimicry placeholder="До" disabled />
        </FormLayoutGroup>
      </FormLayout>
    </ModalPage>
  )
}
