import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Panel,
  PanelHeader,
  Button,
  Cell,
  Search,
  Placeholder, PanelHeaderBack,
} from '@vkontakte/vkui';
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';

import './style.css'
import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";

const AddMusic = ({id, go}) => {
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  return <Panel id={id}>
    <PanelHeader separator={false} left={<PanelHeaderBack onClick={go} data-to='edit-audio'/>}>
      Выбрать музыку
    </PanelHeader>
    <Search value={search} onChange={onChange} after={null}/>
    <Cell
      asideContent={<div style={{display: 'flex'}}><div style={{marginRight: '16px', color: '#818C99', fontSize: '16px'}}>3:53</div><Icon24MoreHorizontal style={{color: '#3F8AE0'}} /></div>}
      className={'AddMusic__cell'}
      description='Верка Сердючка'
      before={<img style={{height: '48px', width: '48px', borderRadius: '4px'}}
                   src={'https://avatars.yandex.net/get-music-content/49707/fb3db1be.a.1012220-1/200x200'}/>}>Всё
      будет хорошо</Cell>

    <Cell
      asideContent={<div style={{display: 'flex'}}><div style={{marginRight: '16px', color: '#818C99', fontSize: '16px'}}>3:05</div><Icon24MoreHorizontal style={{color: '#3F8AE0'}} /></div>}
      className={'AddMusic__cell2'}
      description='Юрий Никулин'
      before={<img style={{height: '48px', width: '48px', borderRadius: '4px'}}
                   src={'https://drinking-songs.ru/wp-content/uploads/2017/09/tekst-pesni-pro-zajcev.jpg'}/>}>Песня про зайцев</Cell>
  </Panel>
};

AddMusic.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default AddMusic;
