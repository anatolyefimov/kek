async function trimAudio(blob, filename, left, right) {
    let formData = new FormData();
    console.log('trim', blob)
    formData.append('audio', blob, filename)
    formData.append('left', left);
    formData.append('right', right);

    let response = await fetch('/cut_audio', {
        method: 'POST',
        body: formData
      });
  
    let res = await response.json();

    return 'http://ec2-18-192-103-136.eu-central-1.compute.amazonaws.com:3001/audios/' + res.fileName
}

export default trimAudio;