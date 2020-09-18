import React, { useState} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from 'panels/Home';
import NewPodcast from 'panels/NewPodcast'
import EditAudio from './panels/EditAudio';
import SliderTest from './panels/SliderTest'
import DoubleSliderTest from './panels/DoubleSliderTest'
import AddMusic from './panels/AddMusic'
import FinalPreview from "./panels/FinalPreview";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [currentSettings, setCurrentSettings] = useState({
		audioName: 'Михаил Круг.mp3',
		audioDurationString: '59:41',
	});

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} >
			<Home id='home' go={go}/>
			<NewPodcast
				id='new-podcast'
				go={go}
				currentSettings={currentSettings}
				setCurrentSettings={setCurrentSettings}
			/>
			<EditAudio id='edit-audio' audioSrc={currentSettings.audio} waves={currentSettings.waves} setCurrentSettings={setCurrentSettings} go={go}/>
			<SliderTest id='slider-test' go={go}/>
			<DoubleSliderTest id='double-slider-test' go={go}/>
			<AddMusic id='add-music' go={go}/>
			<FinalPreview id={'final-preview'} go={go}/>
		</View>
	);
}

export default App;

