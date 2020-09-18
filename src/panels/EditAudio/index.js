import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import { Button, Div, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import Icon24Play from '@vkontakte/icons/dist/24/play';
import Icon24Pause from '@vkontakte/icons/dist/24/pause';
import Icon24ArrowUturnLeftOutline from '@vkontakte/icons/dist/24/arrow_uturn_left_outline';
import Icon20MusicOutline from '@vkontakte/icons/dist/20/music_outline';
import { ReactComponent as Scissors } from 'img/scissors 1.svg'
import { ReactComponent as BarChart } from 'img/bar-chart 1.svg'

import throttle from 'utils/throttle';
import convertDataURIToBinary from 'utils/convertDataURIToBinary'
import trimAudio from 'api/trimAudio'
import LoadingSinner from 'panels/LoadingSpinnerBlur';

import './EditAudio.css';


const EditAudio = ({id, audioSrc, waves, go, setCurrentSettings}) => {
  const audioNode = useRef();
  const progressBar = useRef();
  const [currenTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [audiofile, setAudiofile] = useState();
  const [coords, setCoords] = useState([20, 60])
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false)

=======
>>>>>>> 9459682af372e745d7bf7a07378b6178296b3ce9
  let timeUpdate = (e) => {
      // console.log(audioNode.current.currentTime  || audioNode.current.currentTime === 0)
    if (audioNode.current.currentTime  || audioNode.current.currentTime === 0) {
        setCurrentTime(e.target.currentTime / audioNode.current.duration * 100);
    }
  }



  timeUpdate = throttle(timeUpdate, 1000)
  useEffect(() => {
    audioNode.current.addEventListener('timeupdate', timeUpdate)
  })

  const onRangeChange = (event) => {
      if (audioNode.current.currentTime || audioNode.current.currentTime === 0) {
        audioNode.current.currentTime = audioNode.current.duration * event.target.value / 100;

        setCurrentTime(event.target.value)
      }
  }

  const cutAudio = async (start, finish) => {
      setIsLoading(true)
    let binary = convertDataURIToBinary(audioNode.current.src);
    var blob = new Blob([binary], {type: 'audio/mp3'});
    trimAudio(blob, 'audio.mp3', audioNode.current.duration*coords[0] / 100, audioNode.current.duration*coords[1] / 100, setCurrentSettings)
        .then(() => setIsLoading(false));

// create audio context
//     const audioContext = getAudioContext();
// create audioBuffer (decode audio file)
//     const audioBuffer = await audioContext.decodeAudioData(response.data);
// create audio source
//     const source = audioContext.createBufferSource();
//     source.buffer = audioBuffer;
//     source.connect(audioContext.destination);

// play audio
//     source.start();


  }

  const fadeIn = async (start, finish) => {
    let binary = convertDataURIToBinary(audioNode.current.src);
    var blob = new Blob([binary], {type: 'audio/mp3'});
    await fadeIn(blob, 'audio.mp3', audioNode.current.duration*coords[0] / 100, audioNode.current.duration*coords[1] / 100, setCurrentSettings)
  }


  const fadeOut = async (start, finish) => {
    let binary = convertDataURIToBinary(audioNode.current.src);
    var blob = new Blob([binary], {type: 'audio/mp3'});
    await fadeOut(blob, 'audio.mp3', audioNode.current.duration*coords[0] / 100, audioNode.current.duration*coords[1] / 100, setCurrentSettings)
  }

  const handlePlay = () => {
        if (play) {
        audioNode.current.pause();
        }
        else {
        audioNode.current.play();
        }
        setPlay(!play)
    }

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to='new-podcast'/>} >
                Редактирование
            </PanelHeader>
            {
                isLoading && 
                <LoadingSinner />
            }
            
            <audio ref={audioNode} id='audio' src={audioSrc}>

                Your browser does not support the audio element.
            </audio>
            <div style={{
                borderRadius: '10px',
                border: '0.5px solid rgba(0, 0, 0, 0.12)',
                margin: '0 12px',
                position: 'relative'
            }}>
                <Nouislider
                    className={'double-slider'}
                    range={{ min: 0, max: 100 }}
                    start={coords} connect
                    onSlide={(render, handle, value, un, percent) => { setCoords(value)}}
                />
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
                        mode='secondary'
                    >
                        <Scissors/>
                    </Button>
                    <Button
                        className='toolbar__button'
                        mode='secondary'
                    >
                        <Icon24ArrowUturnLeftOutline />
                    </Button>
                    <Button
                        className='toolbar__button'
                        mode='secondary'
                        onClick={e => {setPlay(false);go(e)}}
                        data-to='add-music'
                    >
                        <Icon20MusicOutline width={24} height={24}/>
                    </Button>
                    <Button
                        className='toolbar__button'
                        mode='secondary'
                        onClick={fadeIn}
                    >
                        <BarChart style={{transform: 'rotate(270deg)'}}/>
                    </Button>
                    <Button
                        className='toolbar__button'
                        mode='secondary'
                        onClick={fadeOut}
                    >
                        <BarChart />
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
