const sounds = document.querySelectorAll('audio');

window.addEventListener('keydown', (event) =>{
    let kCode = event.keyCode.toString();

    sounds.forEach(song =>{
        if(kCode === song.id){
            song.play();
            song.currentTime = 0;
        }
    });
});