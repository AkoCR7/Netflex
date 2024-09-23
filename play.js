onload = function(){

 let video_5_1 =this.document.getElementById('video-5-1')
 let video_5_2 =this.document.getElementById('video-5-2')
 let video_5_3 =this.document.getElementById('video-5-3')
 let video_5_4 =this.document.getElementById('video-5-4')
 let video_5_5 =this.document.getElementById('video-5-5')
 let video_5_6 =this.document.getElementById('video-5-6')


 video_5_1.addEventListener("mouseenter" , function(){
    this.play()
})
video_5_1.addEventListener("mouseout" , function(){
    this.pause()
})
    // 
    video_5_2.addEventListener("mouseenter" , function(){
        this.play()
    })
    video_5_2.addEventListener("mouseout" , function(){
        this.pause()
    })      
    // 
    video_5_3.addEventListener("mouseenter" , function(){
        this.play()
    })
    video_5_3.addEventListener("mouseout" , function(){
        this.pause()
    })
}