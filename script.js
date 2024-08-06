var typed = new Typed(".multiple-text",{
    strings:[ "Frontend developer","degital marketer","content writer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){
    videoPlayer.style.display = "none";
}


function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block";
}