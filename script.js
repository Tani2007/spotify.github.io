console.log("welcome to spotify");
//inetialize the variables 
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let upperAudio = document.querySelectorAll(".audio");
let songNaam = document.getElementById("songNaam")





//handling play pause
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update SeekBar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
upperAudio.forEach(function(element){
    element.addEventListener("click",function(e){
        let index = e.target.id;
        console.log(index);
        audioElement.src  = `${index}.mp3`
        console.log(audioElement);
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        songNaam.innerText = element.parentElement.previousElementSibling.innerHTML
    })
})
