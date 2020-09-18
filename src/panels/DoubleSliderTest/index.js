import React from 'react';
import PropTypes from 'prop-types';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import {
  Panel,
  PanelHeader,
  RangeSlider
} from '@vkontakte/vkui';

import './style.css'

const Home = ({ id, go }) => (
  <Panel id={id} centered>
    <PanelHeader>Редактирование</PanelHeader>
    <img style={{position: 'absolute', width: '100%'}} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'}/>
    <Nouislider className={'double-slider'} range={{ min: 0, max: 100 }} start={[20, 80]} connect />
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Home;
