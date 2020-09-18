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
  

    let reader = response.body.getReader();
    let result = await reader.read();
    var blob = new Blob([result.value], { type: 'audio/mp3' });
    let url = window.URL.createObjectURL(blob)
    console.log(url);
    return url
}

export default trimAudio;