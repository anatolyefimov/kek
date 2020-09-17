import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  FormLayout,
  Placeholder,
  Div,
  File,
  Input,
  Separator,
  Checkbox,
  Button,
  Cell,
  Textarea,
  Caption,
  Card
} from '@vkontakte/vkui';

import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';
import './NewPodcast.css'
import { Icon28PodcastOutline } from "@vkontakte/icons";

const NewPodcast = ({id, go, currentSettings}) => {
  const [imageSrc, setImageSrc] = useState(currentSettings.imageSrc);
  const [audio, setAudio] = useState(false)
  const [audioName, setAudioName] = useState('Валентин Стрыкало.mp3')
  const [audioDurationString, setAudioDurationString] = useState('59:16')
  const [podcastName, setPodcastName] = useState('')
  const [podcastDescription, setPodcastDescription] = useState('')

  const handleImageChange = event => {
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(event.target.files[0]);
  }

  const handleImageDelete = () => {
    setImageSrc(null)
  }

  const handleAudioUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file)
    const arrayBuffer = await file.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const duration = MMSSfromSeconds(audioBuffer.duration)
    setAudioDurationString(duration)
    setAudioName(file.name)
    setAudio(file)
  }

  const MMSSfromSeconds = (fullSeconds) => {
    const intSeconds = Math.round(fullSeconds)
    const minutes = Math.round(intSeconds / 60)
    const seconds = intSeconds % 60
    return `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
  }

  return (
    <Panel id={id} className='NewPodcast'>
      <PanelHeader left={<PanelHeaderBack onClick={go} data-to='home'/>}>
        Новый подкаст
      </PanelHeader>
      <FormLayout>
        <Div style={{
          display: 'flex',
          padding: 0
        }}>
          <Div className='NewPodcast__imageOverlay'>
            {!imageSrc ? <File
                tabIndex={0}
                mode='overlay_primary'
                className='cover-input'
                accept="image/*"
                onChange={handleImageChange}
              >
                <Icon56GalleryOutline
                  className='cover-input__icon'
                  width={32}
                  height={32}
                />
              </File>
              :
              <img className='NewPodcast__image'
                   src={imageSrc}
                   alt='Обложкаф'
                   onClick={handleImageDelete}
              />
            }
          </Div>
          <Div className='NewPodcast__TopForm'>
            <FormLayout Component='div'>
              <Input
                top='Название'
                placeholder='Введите название подкаста'
                className='NewPodcast__name'
                value={podcastName}
                onChange={(event) => setPodcastName(event.target.value)}
              />
            </FormLayout>
          </Div>

        </Div>
      </FormLayout>
      <FormLayout>
        <Textarea value={podcastDescription} onChange={(event) => setPodcastDescription(event.target.value)}
                  top="Описание подкаста"/>
      </FormLayout>

      {
        !audio ? <Placeholder
            header="Загрузите Ваш подкаст"
            className="NewPodcast__placeholder"
            action={<File style={{cursor: 'pointer'}} tabIndex={0} accept='audio/*' onChange={handleAudioUpload}
                          mode="outline" controlSize={'l'}>Загрузить
              файл</File>}
          >
            Выберите готовый аудиофайл из вашего телефона и добавьте его
          </Placeholder> :
          <Div>
            <Cell className='NewPodcast__audioInfo' before={
              <Card style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon28PodcastOutline/>
              </Card>}
                  asideContent={audioDurationString}>{audioName}</Cell>
            <Caption level='1' className='' weight="regular" style={{color: '#818C99', marginTop: '10px'}}>Вы можете
              добавить
              таймкоды и скорректировать подкаст в режиме редактирования</Caption>

            <Button size={'xl'} mode={'outline'} style={{marginTop: '18px'}}>Редактировать аудиозапись</Button>
          </Div>
      }

      <Separator style={{marginBottom: '2px', marginTop: '10px'}}/>
      <FormLayout className="NewPodcast__checkboxes">
        <Checkbox tabIndex={0} className="NewPodcast__checkbox">Ненормативный контент</Checkbox>
        <Checkbox tabIndex={0} className="NewPodcast__checkbox">Исключить эпизод из экспорта</Checkbox>
        <Checkbox tabIndex={0} className="NewPodcast__checkbox">Трейлер подкаста</Checkbox>

      </FormLayout>


      <Cell className='NewPodcast__privacyCell' expandable size={'l'} description={'Всем пользователям'}>
        Кому доступен данный подкаст
      </Cell>
      <Div style={{paddingTop: 0}}>
        <Caption level='1' weight="regular" style={{color: '#818C99'}}>При публикации записи с
          эпизодом, он
          становится доступным для всех пользователей</Caption>
      </Div>
      <Div style={{flexGrow: 1, padding: 0}}></Div>
      <Div>
        <Button disabled={!imageSrc || !podcastName || !podcastDescription || !audio} data-to='edit-audio' onClick={go}
                size="xl"
                mode="primary">Далее</Button>
      </Div>
    </Panel>
  )
}

NewPodcast.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default NewPodcast;
