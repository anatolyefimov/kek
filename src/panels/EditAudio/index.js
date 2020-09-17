import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { 
	Panel, 
    PanelHeader, 
    PanelHeaderBack,
    FormLayout,
    Placeholder,
    Div,
    File,
    Input,
    FormLayoutGroup, Group
} from '@vkontakte/vkui';

const EditAudio = ({ id }) => {
    const audioNode = useRef();
    const [waves, setWaves] = useState([]);
    const [currenTime, setCurrentTime] = useState(0);
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let source = audioCtx.createBufferSource();

    const handleAudioChange = async (event) => {
        audioNode.current.pause();

        let reader = new FileReader();
        reader.onload = (e) => {
            audioNode.current.src = e.target.result
        }

        const file = event.target.files[0];
        const arrayBuffer = await file.arrayBuffer();
        const audioContext = new AudioContext();
        let newWaves = [];
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        for (let i = 0; i < audioBuffer.length; i += Math.floor(audioBuffer.length / 100)) {
            let newWave = 0;
            for (let c = 0; c < audioBuffer.numberOfChannels; ++c) {
                newWave += audioBuffer.getChannelData(c)[i]
            }
            newWave /= audioBuffer.numberOfChannels;
            console.log(newWave);
            newWave += 1;
            newWave /= 2;

            newWaves.push(newWave);
        }
        setWaves(newWaves);
        
        reader.readAsDataURL(file);

        console.log(audioNode.current)
    }
    console.log(waves)
    console.log(currenTime)
    return (
        <Panel id={id}>
            <input type='file' accept='audio/*' onChange={handleAudioChange}/>
            <audio ref={audioNode} id='audio' controls onPlay={(e) => setCurrentTime(e.target.currenTime)} onRewind={(e) => setCurrentTime(e.target.currenTime)} onSeek={(e) => setCurrentTime(e.target.currenTime)}>

                Your browser does not support the audio element.
            </audio>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                height: 100,
                backgroundColor: '#F2F3F5',
                width: '500',
                position: 'relative'
            }}>
                <div style={{
                    height: '100%',
                    width: 10,
                    backgroundColor: 'red',
                    position: 'absolute',
                    left: currenTime
                }}></div>
                  {
                      waves.map((wave) => (
                        <div style={{
                            height: 70*wave,
                            width: 2,
                            borderRadius: '50%',
                            marginRight: 4,
                            backgroundColor: 'blue'
                        }}>

                        </div>
                      ))
                  }
            </div>

        </Panel>
    )
}


EditAudio.propTypes = {
    id: PropTypes.string.isRequired
};

export default EditAudio;