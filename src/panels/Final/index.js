import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Placeholder
} from '@vkontakte/vkui';
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';

import './style.css'
import { Icon56CheckCircleOutline } from "@vkontakte/icons";

const Home = ({ id, go }) => (
  <Panel id={id} centered>
    <PanelHeader>Подкасты</PanelHeader>
    <Placeholder
      icon={ <Icon56CheckCircleOutline style={{color: '#3F8AE0'}} className='Home__icon'/> }
      header='Подкаст добавлен'
      action={
        <Button
          size='l'
        >
          Поделиться подкастом
        </Button>
      }
      className='Home__placeholder'
    >
      Раскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей.
    </Placeholder>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Home;
