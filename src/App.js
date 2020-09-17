import React, { useState} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from 'panels/Home';
import NewPodcast from 'panels/NewPodcast'
import EditAudio from './panels/EditAudio';

const App = () => {
	const [activePanel, setActivePanel] = useState('new-podcast');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} >
			<Home id='home' go={go}/>
			<NewPodcast id='new-podcast' go={go} currentSettings={{imageSrc: '', audio: undefined}}/>
			<EditAudio id='edit-audio' />
		</View>
	);
}

export default App;

