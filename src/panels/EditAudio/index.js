import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { 
	Panel, 
    PanelHeader, 
    Div,
    Button
} from '@vkontakte/vkui';

import Icon24Play from '@vkontakte/icons/dist/24/play';
import Icon24Pause from '@vkontakte/icons/dist/24/pause';

import throttle from 'utils/throttle';

const EditAudio = ({ id }) => {
    const audioNode = useRef();
    const progressBar = useRef();
    const [waves, setWaves] = useState([]);
    const [currenTime, setCurrentTime] = useState(0);
    const [play, setPlay] = useState(false)
    // let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // let source = audioCtx.createBufferSource();

    let timeUpdate = (e) => {
        setCurrentTime(e.target.currentTime);
    }

    timeUpdate = throttle(timeUpdate, 100000)
    useEffect(() => {
        audioNode.current.addEventListener('timeupdate', timeUpdate)
    })

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
            newWave += 1;
            newWave /= 2;

            newWaves.push(newWave);
        }
        setWaves(newWaves);
        
        reader.readAsDataURL(file);

    }

    const handlePlay = () => {
        if (play) {
            audioNode.current.pause();
        } else {
            audioNode.current.play();
        }

        setPlay(!play)
        
    }

    return (
        <Panel id={id}>
            <PanelHeader>Редактирование</PanelHeader>
            <input type='file' accept='audio/*' onChange={handleAudioChange}/>
            <audio ref={audioNode} id='audio' controls onPlay={(e) => setCurrentTime(e.target.currenTime)} onRewind={(e) => setCurrentTime(e.target.currenTime)} onSeek={(e) => setCurrentTime(e.target.currenTime)}>

                Your browser does not support the audio element.
            </audio>
            <div style={{
                borderRadius: '10px',
                border: '0.5px solid rgba(0, 0, 0, 0.12)',
                margin: '0 12px'
            }}>
                <Div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 96,
                    backgroundColor: '#F2F3F5',
                    position: 'relative',
                    borderRadius: '10px 10px 0 0'
                    
                }}>
                    <div style={{
                        height: '100%',
                        width: 1,
                        backgroundColor: '#FF3347',
                        position: 'absolute',
                        left: currenTime*3
                    }}></div>
                    {
                        waves.map((wave) => (
                            <div style={{
                                height: wave  < 0.5 ? 40*wave*0.5 : 40*wave,
                                width: 2,
                                borderRadius: '2px',
                                backgroundColor: '#3F8AE0'
                            }}>

                            </div>
                        ))
                    }
                </Div>
                <div style={{
                    padding: 8
                }}>
                    <Button
                        style={{
                            width: 44,
                            height: 44
                        }}
                        onClick={handlePlay}
                    >
                        {play ? <Icon24Pause /> : <Icon24Play />}
                    </Button>
                </div>
                    
            </div> 

        </Panel>
    )
}


EditAudio.propTypes = {
    id: PropTypes.string.isRequired
};

export default EditAudio;