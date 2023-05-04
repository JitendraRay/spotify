console.log("I am working")

// Initiaize Variables

let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let masterPlay = document.getElementById("masterplay");
let progressBar = document.getElementById("progressBar")
let gif = document.getElementById("gif")
let songItem = Array.from(document.getElementsByClassName('songItem'));
let singer = document.getElementById("singer");
let masterSongaName = document.getElementById('masterSongaName')

let songs = [
    { songName: "Aaj Jane ki jid na karo ", filePath: "songs/0.mp3", coverPath: "covers/1.jpg", singer: "Paritam" },
    { songName: "Hoshwalon Ko Khabar", filePath: "songs/1.mp3", coverPath: "covers/2.jpg", singer: "papon" },
    { songName: "LAAL ISHQ  ", filePath: "songs/2.mp3", coverPath: "covers/3.jpg", singer: "papon" },
    { songName: "Aaoge jab tum", filePath: "songs/3.mp3", coverPath: "covers/4.jpg", singer: "papon" },
    { songName: " Ayat", filePath: "songs/4.mp3", coverPath: "covers/5.jpg", singer: "papon" },
    { songName: "Moh Moh Ke Dhaage ", filePath: "songs/5.mp3", coverPath: "covers/6.jpg", singer: "papon" },
    { songName: "Mohabbat Karna Wale ", filePath: "songs/6.mp3", coverPath: "covers/7.jpg", singer: "papon" },
    { songName: "Jiyein Kyun ", filePath: "songs/7.mp3", coverPath: "covers/8.jpg", singer: "papon" },
    { songName: "Sexy Lag raha tha ", filePath: "songs/8.mp3", coverPath: "covers/9.jpg", singer: "kanika" },
]

songItem.forEach((element, i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    // element.singer.innerText = songs[i].singer

})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterSongaName.innerHTML = songs[songIndex].songName;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress)
    progressBar.value = progress;
})
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const playAll = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('playSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        playAll();
        songIndex = parseInt(e.target.id);
        // console.log(index)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songIndex.length) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongaName.innerText = songs[songIndex].songName;
    singer.innerText = songs[songIndex].singer;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.scr = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongaName.innerText = songs[songIndex].songName;
    singer.innerText = songs[songIndex].singer;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})