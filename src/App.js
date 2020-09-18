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
import Final from './panels/Final'

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [currentSettings, setCurrentSettings] = useState({
		audioName: 'Михаил Круг.mp3',
		audioDurationString: '59:41',
		imgSrc: 'https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg',
		timeCodes: [{time: '05:41', topic: 'Начало обсуждения'}, {time: '15:23', topic: 'Основная тема подкаста'},],
		podcastName: 'ЛучшийПо',
		podcastDescription: 'Подкаст, который рассказывает про то, как много в мире прекрасных вещей, которые можно совершить, а также сколько людей, которые могут помочь вам в реализации ваших заветных мечт.'
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
			<AddMusic id='add-music' go={go} currentSettings={currentSettings} setCurrentSettings={setCurrentSettings} setActivePanel={setActivePanel}/>
			<FinalPreview id={'final-preview'} go={go} currentSettings={currentSettings} setCurrentSettings={setCurrentSettings} setActivePanel={setActivePanel}/>
			<Final id={'final'} go={go}/>
		</View>
	);
}

export default App;

