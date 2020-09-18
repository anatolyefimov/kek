import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Placeholder, Div, File, FormLayout, Input
} from '@vkontakte/vkui';
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';

import './style.css'
import Icon56GalleryOutline from "@vkontakte/icons/dist/56/gallery_outline";

const FinalPreview = ({ id, go, currentSettings }) => (
  <Panel id={id}>
    <PanelHeader>Новый подкаст</PanelHeader>
    <Div style={{
      display: 'flex',
      padding: 0
    }}>
      <Div className='NewPodcast__imageOverlay'>
          <img className='NewPodcast__image'
               src={currentSettings.imgSrc}
               alt='Обложкаф'
          />
      </Div>
    </Div>

  </Panel>
);

FinalPreview.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default FinalPreview;
