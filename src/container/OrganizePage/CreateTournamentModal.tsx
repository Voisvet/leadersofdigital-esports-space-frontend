import React, { useState } from "react";
import {
  Button,
  FormLayout,
  FormLayoutGroup,
  Input,
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
import { store } from "../../store/store";


export const CreateTournamentModal = ({id}: {id: string}) => {
  const router = useRouter();
  const [discipline, setDiscipline] = useState('');
  const [type, setType] = useState<'play_off' | 'group'>('play_off');
  const [title, setTitle] = useState<string>('');

  const createTournament = () => {
    store.createTournament({
      discipline_type: 'team',
      discipline,
      type,
      title,
      start_time: '2020-11-30 12:00:00',
    })
  }

  return (
    <ModalPage
      id={id}
      onClose={() => router.popPage()}
      header={
        <ModalPageHeader
          left={platform() === OS.ANDROID && <PanelHeaderButton onClick={() => router.popPage()}><Icon24Cancel /></PanelHeaderButton>}
          right={<PanelHeaderButton onClick={createTournament}>{platform() === OS.IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}
        >
          Создание турнира
        </ModalPageHeader>
      }
    >
      <FormLayout>
        <Input
          top={"Название турнира"}
          placeholder={""}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select
          top="Дисциплина"
          placeholder="Выбрать дисциплину"
          onChange={(e) => setDiscipline(e.target.value)}
        >
          <option value="League of Legends">League of Legends</option>
          <option value="DotA 2">DotA 2</option>
          <option value="World of Tanks">World of Tanks</option>
          <option value="CS:GO">CS:GO</option>
        </Select>
        <FormLayoutGroup top="Тип турнира">
          <Button
            size={"l"}
            mode={type === "play_off" ? "primary" : "secondary"}
            onClick={() => setType('play_off')}
          >
            Плей-офф
          </Button>
          <Button
            size={"l"}
            mode={type === "group" ? "primary" : "secondary"}
            onClick={() => setType('group')}
            disabled
          >
            Групповой
          </Button>
        </FormLayoutGroup>

        <SelectMimicry top="Дата" placeholder="Выбрать дату" disabled />

        <FormLayoutGroup top="Время">
          <SelectMimicry placeholder="Начало" disabled />
          <SelectMimicry placeholder="Конец" disabled />
        </FormLayoutGroup>
      </FormLayout>
    </ModalPage>
  )
}
