import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { 
	Panel, 
    PanelHeader, 
    Div,
    Button
} from '@vkontakte/vkui';

import Icon24Play from '@vkontakte/icons/dist/24/play';
import Icon24Pause from '@vkontakte/icons/dist/24/pause';

import throttle from 'utils/throttle';
import convertDataURIToBinary from 'utils/convertDataURIToBinary'
import trimAudio from 'api/trimAudio' 


import './EditAudio.css';

const EditAudio = ({ id, audioSrc, waves }) => {
    const audioNode = useRef();
    const progressBar = useRef();
    const [currenTime, setCurrentTime] = useState(0);
    const [play, setPlay] = useState(false);
    const [audiofile, setAudiofile] = useState();
    // let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // let source = audioCtx.createBufferSource();

    let timeUpdate = (e) => {
        console.log(audioNode.current.duration )
        setCurrentTime(e.target.currentTime / audioNode.current.duration * 100);
    }

    

    timeUpdate = throttle(timeUpdate, 100000)
    useEffect(() => {
        audioNode.current.addEventListener('timeupdate', timeUpdate)
    })

    const onRangeChange = (event) => {
        console.log(audioNode.current.duration)
        audioNode.current.currentTime = audioNode.current.duration * event.target.value / 100;

        setCurrentTime(event.target.value)
    }

    const cutAudio = async (start, finish) => {
        let binary = convertDataURIToBinary(audioNode.current.src);
        var blob=new Blob([binary], {type : 'audio/mp3'});
        audioNode.current.src = await trimAudio(blob, 'audio.mp3', 5, 10)
        
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
            <audio ref={audioNode} id='audio' src={audioSrc}>

                Your browser does not support the audio element.
            </audio>
            <div style={{
                borderRadius: '10px',
                border: '0.5px solid rgba(0, 0, 0, 0.12)',
                margin: '0 12px',
                position: 'relative'
            }}>
                <Nouislider className={'double-slider'} range={{ min: 0, max: 100 }} start={[20, 80]} connect />
                <input 
                    className='slider_play' 
                    type={'range'} 
                    style={{
                        position: 'absolute',
                        top: -70,
                        left: 0,
                        zIndex: 100
                    }}
                    step='0.1'
                    value={currenTime}
                    onChange={onRangeChange}
                />
                <Div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 96,
                    backgroundColor: '#F2F3F5',
                    position: 'relative',
                    borderRadius: '10px 10px 0 0',
                    
                }}>
                                
                    {
                        waves.map((wave) => (
                            <div style={{
                                height: wave  < 0.5 ? 40*wave*0.5 : 40*wave,
                                width: 2,
                                borderRadius: '2px',
                                backgroundColor: '#3F8AE0',
                                
                            }}>

                            </div>
                        ))
                    }
                </Div>
                <div className='toolbar'>
                    <Button
                        className='toolbar__button'
                        onClick={handlePlay}
                    >
                        {play ? <Icon24Pause /> : <Icon24Play />}
                    </Button>
                    <Button
                        className='toolbar__button'
                        onClick={cutAudio}
                    >

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