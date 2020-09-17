import React from 'react';
import PropTypes from 'prop-types';

import { 
	Panel, 
	PanelHeader, 
	Button,
	Placeholder 
} from '@vkontakte/vkui';
import Icon56AddCircleOutline from '@vkontakte/icons/dist/56/add_circle_outline';

import './Home.css'

const Home = ({ id, go }) => (
	<Panel id={id} centered>
		<PanelHeader>Подкасты</PanelHeader>
		<Placeholder
			icon={ <Icon56AddCircleOutline className='Home__icon'/> }
			header='Добавьте первый подкаст'
			action={
				<Button 
					size='l'
					onClick={go}
					data-to='new-podcast'
				>
					Добавить подкаст
				</Button>
			}
			className='Home__placeholder'
		>
			Добавляйте, редактируйте и делитесь подкастами вашего сообщества.
		</Placeholder>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Home;
