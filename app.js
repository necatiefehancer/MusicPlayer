
const image=document.querySelector('.music_image');

const audio=document.querySelector('.music_audio');

const musicName=document.querySelector('.music_name');

const musicSinger=document.querySelector('.music_singer');

const playButton=document.querySelector('.play_button');

const previousButton=document.querySelector('.previous_button');

const nextButton=document.querySelector('.next_button');

const duration=document.querySelector('.duration');

const currentTime=document.querySelector('.current_time');

const musicRange=document.querySelector('.music_range');

const container=document.querySelector('.container');

const volumeButton=document.querySelector('.volume_button');

const volumeRange=document.querySelector('.volume_range');

const player=new MusicPlayer(musicList);

let music=player.getMusic();


const displayMusic=(music)=>{
    image.src=`images//${music.img}`;
    audio.src=`audio//${music.file}`;
    musicName.textContent=music.name;
    musicSinger.textContent=music.singer;
}
window.addEventListener('load',()=>{
    displayMusic(music);
})
playButton.addEventListener('click',()=>{

let isPlaying=container.classList.contains('playing');

isPlaying ? pause():play();

})

const play=()=>{
    audio.play();
    container.classList.add('playing');
    playButton.classList="fa-solid fa-circle-pause  play_button  fs-1"
}
const pause=()=>{
    audio.pause();
    container.classList.remove('playing');
    playButton.classList="fa-solid fa-circle-play  play_button  fs-1"
}

nextButton.addEventListener('click',()=>{
    nextMusic();
})

const nextMusic=()=>{
    player.next();
    let music=player.getMusic();
    displayMusic(music);
    play();
}
previousButton.addEventListener('click',()=>{
    prevMusic();
})
const prevMusic=()=>{
    player.previous();
    let music=player.getMusic();
    displayMusic(music);
    play();
}
audio.addEventListener('loadedmetadata',()=>{

    duration.innerText=calculateTime(audio.duration);

    musicRange.max=Math.floor(audio.duration);

})
audio.addEventListener('timeupdate',()=>{
    musicRange.value=(audio.currentTime);
    currentTime.innerText=calculateTime(audio.currentTime);
})

const calculateTime=(süre)=>{

    let dakika = Math.floor(süre/60);

    let saniye = Math.floor(süre%60);

    let saniyeKontrol=saniye<10?`0${saniye}`:saniye;

    return `${dakika}:${saniyeKontrol}`;
}
musicRange.addEventListener('input',()=>{

    audio.currentTime=musicRange.value;
    currentTime.textContent=calculateTime(audio.currentTime)

})

let mutedState="unmuted";

volumeButton.addEventListener('click',()=>{

    if(mutedState=="unmuted"){
        audio.muted=true;
        volumeButton.classList="fa-solid fa-volume-xmark volume_button"
        volumeRange.value=0;
        mutedState="muted";
    }
    else{
        audio.muted=false;
        volumeButton.classList="fa-solid fa-volume-high volume_button"
        volumeRange.value=100;
        audio.volume=1;
        mutedState="unmuted";
    }

})

volumeRange.addEventListener('input',()=>{
    audio.volume=volumeRange.value/100;
    if(volumeRange.value==0){
        audio.muted=true;
        volumeButton.classList="fa-solid fa-volume-xmark volume_button"
        volumeRange.value=0;
        mutedState="muted";
    }
    else{
        audio.muted=false;
        volumeButton.classList="fa-solid fa-volume-high volume_button"
        mutedState="unmuted";
        console.log(volumeRange.value)
    }

})

audio.addEventListener('ended',()=>{
    setTimeout(nextMusic,2000)
})