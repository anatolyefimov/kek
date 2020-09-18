async function trimAudio(blob, filename, left, right, setCurrentSettings) {
  let formData = new FormData();
  console.log('trim', blob)
  formData.append('audio', blob, filename)
  formData.append('left', left);
  formData.append('right', right);

  let response = await fetch('/cut_audio', {
    method: 'POST',
    body: formData,
    headers: {
      responseType: 'arraybuffer'
    }
  });
  // const base64 = reader.readA
  let blob2 = await response.blob()
  console.log(blob2)
  let reader = new FileReader()
  reader.readAsDataURL(blob2);
  reader.onloadend = async function() {
    const base64data = reader.result;
    const arrayBuffer = await blob2.arrayBuffer();
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

    setCurrentSettings((currentSettings) => ({
      ...currentSettings, audio: base64data, waves: newWaves
    }))
  }


  // const newUrl = URL.createObjectURL(blob2)
  // console.log(newUrl)
  // let pump = () => {
  //   reader.read().then(({value, done}) => {
  //     // console.log(value) // chunk of data (push chunk to audio context)
  //     if(!done) pump()
  //   })
  // }
  // pump()

  // return response
}

export const fadeIn = async (blob, filename, left, right, setCurrentSettings) => {
  let formData = new FormData();
  console.log('trim', blob)
  formData.append('audio', blob, filename)

  let response = await fetch('/fade_in', {
    method: 'POST',
    body: formData,
    headers: {
      responseType: 'arraybuffer'
    }
  });
  // const base64 = reader.readA
  let blob2 = await response.blob()
  console.log(blob2)
  let reader = new FileReader()
  reader.readAsDataURL(blob2);
  reader.onloadend = async function() {
    const base64data = reader.result;
    const arrayBuffer = await blob2.arrayBuffer();
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

    setCurrentSettings((currentSettings) => ({
      ...currentSettings, audio: base64data, waves: newWaves
    }))
  }

}


export const fadeOut = async (blob, filename, left, right, setCurrentSettings) => {
  let formData = new FormData();
  console.log('trim', blob)
  formData.append('audio', blob, filename)
  formData.append('endPoint', right)


  let response = await fetch('/fade_out', {
    method: 'POST',
    body: formData,
    headers: {
      responseType: 'arraybuffer'
    }
  });
  // const base64 = reader.readA
  let blob2 = await response.blob()
  console.log(blob2)
  let reader = new FileReader()
  reader.readAsDataURL(blob2);
  reader.onloadend = async function() {
    const base64data = reader.result;
    const arrayBuffer = await blob2.arrayBuffer();
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

    setCurrentSettings((currentSettings) => ({
      ...currentSettings, audio: base64data, waves: newWaves
    }))
  }

}

export const addMusic = async (blob, filename, musicName, setCurrentSettings) => {
  let formData = new FormData();
  console.log('trim', blob)
  formData.append('audio', blob, filename)
  formData.append('music', musicName)


  let response = await fetch('/add_music', {
    method: 'POST',
    body: formData,
    headers: {
      responseType: 'arraybuffer'
    }
  });
  // const base64 = reader.readA
  let blob2 = await response.blob()
  console.log(blob2)
  let reader = new FileReader()
  reader.readAsDataURL(blob2);
  reader.onloadend = async function() {
    const base64data = reader.result;
    const arrayBuffer = await blob2.arrayBuffer();
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

    setCurrentSettings((currentSettings) => ({
      ...currentSettings, audio: base64data, waves: newWaves
    }))
  }

}



export default trimAudio;
