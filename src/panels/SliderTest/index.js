import React from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  RangeSlider
} from '@vkontakte/vkui';

import './style.css'

const Home = ({ id, go }) => (
  <Panel id={id} centered>
    <PanelHeader>Редактирование</PanelHeader>
    <input className='slider_play' type={'range'}/>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Home;
