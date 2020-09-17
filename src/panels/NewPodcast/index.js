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
  Caption
} from '@vkontakte/vkui';

import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';
import './NewPodcast.css'

const NewPodcast = ({id, go, currentSettings}) => {
  const [imageSrc, setImageSrc] = useState(currentSettings.imageSrc);

  const handleImageChange = event => {
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(event.target.files[0]);
  }

  const handleImageDelete = () => {
    setImageSrc(null)
  }

  const handleAudioUpload = () => {

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
                className='NewPodcast__name'/>
            </FormLayout>
          </Div>

        </Div>
      </FormLayout>
      <FormLayout>
        <Textarea top="Описание подкаста"/>
      </FormLayout>

      <Placeholder
        header="Загрузите Ваш подкаст"
        className="NewPodcast__placeholder"
        action={<File onChange={handleAudioUpload} mode="outline" controlSize={'l'}>Загрузить файл</File>}
      >
        Выберите готовый аудиофайл из вашего телефона и добавьте его
      </Placeholder>

      <Separator style={{marginBottom: '12px'}}/>
      <FormLayout className="NewPodcast__checkboxes">
        <Checkbox className="NewPodcast__checkbox">Ненормативный контент</Checkbox>
        <Checkbox className="NewPodcast__checkbox">Исключить эпизод из экспорта</Checkbox>
        <Checkbox className="NewPodcast__checkbox">Трейлер подкаста</Checkbox>

      </FormLayout>


      <Cell className='NewPodcast__privacyCell' expandable size={'l'} description={'Всем пользователям'}>
        Кому доступен данный подкаст
      </Cell>
      <Div style={{paddingTop: 0}}>
        <Caption level='1' className='NewPodcast__' weight="regular" style={{color: '#818C99'}}>При публикации записи с
          эпизодом, он
          становится доступным для всех пользователей</Caption>
      </Div>
      <Div>
        <Button style={{marginTop: '12px'}} disabled size="xl" mode="primary">Далее</Button>
      </Div>
    </Panel>
  )
}

NewPodcast.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default NewPodcast;
