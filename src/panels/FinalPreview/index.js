import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Placeholder, Div, File, FormLayout, Input, Headline, Subhead, Caption, Separator, Text, Cell, PanelHeaderBack
} from '@vkontakte/vkui';
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';

import './style.css'
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";

const FinalPreview = ({id, go, currentSettings}) => (
  <Panel id={id} className={'FinalPreview'} style={{display: 'flex'}}>
    <PanelHeader left={<PanelHeaderBack onClick={go} data-to='new-podcast'/>}>Новый подкаст</PanelHeader>
    <Div style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      padding: 0
    }}>
      <Div className='FinalPreview__imageOverlay'>
        <img className='NewPodcast__image'
             src={currentSettings.imgSrc}
             alt='Обложка'
        />
        <Div style={{padding: 0, height: '100%', display: 'flex', flexDirection: 'column'}}>
          <Headline style={{fontSize: '17px', marginTop: '6px', padding: 0, marginBottom: '6px'}} weight={'regular'}>{currentSettings.podcastName}</Headline>
          <Caption style={{fontSize: '12px', marginBottom: '6px', padding: 0, color: '#4986CC', fontWeight: 'medium'}} weight={'regular'}>ПараDogs</Caption>
          <Caption style={{fontSize: '12px', color: '#818C99', padding: 0}} weight={'regular'}>Длительность: {currentSettings.audioDurationString}</Caption>
        </Div>
      </Div>

      <Separator style={{marginTop: '12px'}}/>

      <Div>
        <Headline weight={'medium'} style={{fontSize: '17px'}}>Описание</Headline>
        <Text style={{marginTop: '14px'}}>{currentSettings.podcastDescription}</Text>
      </Div>
      <Separator style={{marginTop: '6px'}}/>

      <Div>
        <Headline weight={'medium'} style={{fontSize: '17px', paddingBottom: '9px'}}>Содержание</Headline>
        {
          currentSettings.timeCodes.map((timeCode) => (
            <Cell className={'Preview__timecodeCell'} before={<Div style={{padding: 0}}>{timeCode.time}</Div>}> &mdash; {timeCode.topic}</Cell>
          ))
        }
      </Div>
      <Div style={{flexGrow: 1}}/>
      <Div>
      <Button size="xl"
              mode="primary" onClick={go}
              data-to='final'>Опубликовать подкаст</Button>
      </Div>


    </Div>

  </Panel>
);

FinalPreview.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default FinalPreview;
