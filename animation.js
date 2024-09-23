onload = function(){

// this.addEventListener("")


Play_video = this.document.getElementsByClassName('play-video')[0]
 

// this.setTimeout(function(){Play_video.},3000)

console.log(Play_video)

Play_video.addEventListener("mouseenter" , function(){
    Play_video.play()
})

// Play_video.addEventListener("mouseout" , function(){
    // this.pause()
// }) 




}