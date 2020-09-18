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

import trimAudio from 'api/trimAudio';


const NewPodcast = ({id, go, setCurrentSettings, currentSettings}) => {

  const handleImageChange = event => {
    const reader = new FileReader();
    reader.onload = () => reader.result;
    reader.readAsDataURL(event.target.files[0]);
  }

  const handleImageDelete = () => {
    setCurrentSettings(prevSettings => ({
        ...prevSettings,
        imgSrc: null
    }))
  }

  const handleAudioUpload = async (event) => {
    const file = event.target.files[0];
    console.log(file)

    const arrayBuffer = await file.arrayBuffer();
    const audioContext = new AudioContext();
    let newWaves = [];
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    for (let i = 0; i < audioBuffer.length; i += Math.floor(audioBuffer.length / 100)) {
        let newWave = 0;
        for (let c = 0; c < audioBuffer.numberOfChannels; ++c) {
            newWave += audioBuffer.getChannelData(c)[i]
        }
        newWave /= audioBuffer.numberOfChannels;
        newWave += 1;
        newWave /= 2;

        newWaves.push(newWave);
    }
    setCurrentSettings(prevSettings => ({...prevSettings, waves: newWaves}));

    const duration = MMSSfromSeconds(audioBuffer.duration)
    let reader = new FileReader();
    reader.onload = (event) => {
        console.log(reader.result)
        setCurrentSettings(prevSettings =>({
            ...prevSettings,
            audioDurationString: duration,
            audioName: file.name,
            audio: reader.result
        }))
    }
    reader.readAsDataURL(file);
    console.log(file);

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
            {!currentSettings.imgSrc ? <File
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
                   src={currentSettings.imgSrc}
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
                value={currentSettings.podcastName}
                onChange={(event) => {
                    event.persist()
                    setCurrentSettings(prevSettings => ({
                    ...prevSettings,
                    podcastName: event.target.value
                }))}}
              />
            </FormLayout>
          </Div>

        </Div>
      </FormLayout>
      <FormLayout>
        <Textarea value={currentSettings.podcastDescription} onChange={(event) => { event.persist(); setCurrentSettings( prevSettings => ({
                ...prevSettings,
                podcastDescription: event.target.value
            })
            )}}
                  top="Описание подкаста"/>
      </FormLayout>

      {
        !currentSettings.audio ? <Placeholder
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
                  asideContent={currentSettings.audioDurationString}>{currentSettings.audioName}</Cell>
            <Caption level='1' className='' weight="regular" style={{color: '#818C99', marginTop: '10px'}}>Вы можете
              добавить
              таймкоды и скорректировать подкаст в режиме редактирования</Caption>

            <Button size={'xl'} mode={'outline'} style={{marginTop: '18px'}} onClick={go} data-to='edit-audio'>Редактировать аудиозапись</Button>
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
        <Button disabled={!currentSettings.imgSrc || !currentSettings.podcastName || !currentSettings.podcastDescription || !currentSettings.audio}
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
