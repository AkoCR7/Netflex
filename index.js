onload = function(){
    let search_icon = this.document.getElementById('display')
    let display_input = this.document.getElementsByTagName('input')[0]
    // console.log(search_icon)

    search_icon.onclick = function(){
    display_input.classList.toggle('AS')
    // display_input.style.opacity ="1";
}
// dark or light mode
let light_mode = this.document.getElementById('dark-mode')
let main = this.document.getElementsByTagName('main')[0]
let header = this.document.getElementsByTagName('header')[0]
let i_1 = this.document.getElementsByTagName('i')[0]
let i_2 = this.document.getElementsByTagName('i')[1]
let i_3 = this.document.getElementsByTagName('i')[2]
let h1 = document.getElementsByTagName('h1')[0]
console.log(h1)

// headings
let text_white1 = document.getElementById('white-mode-1')
let text_white2 = document.getElementById('white-mode-2')
let text_white3 = document.getElementById('white-mode-3')
let text_white4 = document.getElementById('white-mode-4')
let text_white5 = document.getElementById('white-mode-5')

let h4_1 = this.document.getElementById('white-1')
let h4_2 = this.document.getElementById('white-2')
let h4_3 = this.document.getElementById('white-3')
let h4_4 = this.document.getElementById('white-4')
let h4_5 = this.document.getElementById('white-5')
let h4_6 = this.document.getElementById('white-6')
let h4_7 = this.document.getElementById('white-7')
let h4_8 = this.document.getElementById('white-8')
let h4_9 = this.document.getElementById('white-9')
let h4_10 = this.document.getElementById('white-10')
let h4_11 = this.document.getElementById('white-11')
let h4_12 = this.document.getElementById('white-12')
let h4_13 = this.document.getElementById('white-13')
let h4_14 = this.document.getElementById('white-14')
let h4_15 = this.document.getElementById('white-15')
let h4_16 = this.document.getElementById('white-16')
let h4_17 = this.document.getElementById('white-17')
let h4_18 = this.document.getElementById('white-18')
let h4_19 = this.document.getElementById('white-19')
let h4_20 = this.document.getElementById('white-20')
let h4_21 = this.document.getElementById('white-21')
let h4_22 = this.document.getElementById('white-22')
let h4_23 = this.document.getElementById('white-23')
let h4_24 = this.document.getElementById('white-24')
let h4_25 = this.document.getElementById('white-25')
let h4_26 = this.document.getElementById('white-26')
let h4_27 = this.document.getElementById('white-27')
let h4_28 = this.document.getElementById('white-28')
let h4_29 = this.document.getElementById('white-29')
let h4_30 = this.document.getElementById('white-30')
let h4_31 = this.document.getElementById('white-31')
let h4_32 = this.document.getElementById('white-32')


header.style.borderBottom ='thin solid #000'
// headings
// light_mode.onclick = function(){
//     main.classList.toggle('light-mode');
//     header.classList.toggle('light-mode');
//     // light_mode.style.color ="#000";
//     i_1.style.color ="#000";
//     i_2.style.color ="#000";
//     i_3.style.color ="#000";

//     text_white1.style.color ='#000';
//     text_white2.style.color ='#000';
//     text_white3.style.color ='#000';
//     text_white4.style.color ='#000';
//     text_white5.style.color ='#000';
    
//     h4_1.style.color ='#000';
//     h4_2.style.color ='#000';
//     h4_3.style.color ='#000';
//     h4_4.style.color ='#000';
//     h4_5.style.color ='#000';
//     h4_6.style.color ='#000';
//     h4_7.style.color ='#000';
//     h4_8.style.color ='#000';
//     h4_9.style.color ='#000';
//     h4_10.style.color ='#000';
//     h4_11.style.color ='#000';
//     h4_12.style.color ='#000';
//     h4_13.style.color ='#000';
//     h4_14.style.color ='#000';
//     h4_15.style.color ='#000';
//     h4_16.style.color ='#000';
//     h4_17.style.color ='#000';
//     h4_18.style.color ='#000';
//     h4_19.style.color ='#000';
//     h4_20.style.color ='#000';
//     h4_21.style.color ='#000';
//     h4_22.style.color ='#000';
//     h4_23.style.color ='#000';
//     h4_24.style.color ='#000';
//     h4_25.style.color ='#000';
//     h4_26.style.color ='#000';
//     h4_27.style.color ='#000';
//     h4_28.style.color ='#000';
//     h4_29.style.color ='#000';
//     h4_30.style.color ='#000';
//     h4_31.style.color ='#000';
//     h4_32.style.color ='#000';


// // video 
// video_1_1.style.border ='none';
// video_1_2.style.border ='none';
// video_1_3.style.border ='none';
// video_1_4.style.border ='none';
// video_1_5.style.border ='none';
// video_1_6.style.border ='none';

// video_2_1.style.border = "none";
// video_2_2.style.border = "none";
// video_2_3.style.border = "none";
// video_2_4.style.border = "none";
// video_2_5.style.border = "none";
// video_2_6.style.border = "none";

// video_3_1.style.border ="none";
// video_3_2.style.border ="none";
// video_3_3.style.border ="none";
// video_3_4.style.border ="none";
// video_3_5.style.border ="none";
// video_3_6.style.border ="none";
// video_3_7.style.border ="none";

// video_4_1.style.border ='none';
// video_4_2.style.border ='none';
// video_4_3.style.border ='none';
// video_4_4.style.border ='none';
// video_4_5.style.border ='none';
// video_4_6.style.border ='none';
// video_4_7.style.border ='none';

// video_5_1.style.border ='none';
// video_5_2.style.border ='none';
// video_5_3.style.border ='none';
// video_5_4.style.border ='none';
// video_5_5.style.border ='none';
// video_5_6.style.border ='none';
// // video 


// }





// dark or light mode

// this.addEventListener("click" , function(){
//     display_search.style.width ='300px'; 
//     display_search.style.display ='block'; 
//     display_search.style.marginRight ='10px'; 
//     display_search.style.opacity ='1'; 
    
// })

// Line one
let video_1_1 = this.document.getElementsByClassName('video-1-1')[0]
let video_1_2 = this.document.getElementsByClassName('video-1-2')[0]
let video_1_3 = this.document.getElementsByClassName('video-1-3')[0]
let video_1_4 = this.document.getElementsByClassName('video-1-4')[0]
let video_1_5 = this.document.getElementsByClassName('video-1-5')[0]
let video_1_6 = this.document.getElementsByClassName('video-1-6')[0]
console.log(video_1_1)

video_1_1.addEventListener("mouseenter" , function(){
    this.play()
})
video_1_1.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_1_2.addEventListener("mouseenter" , function(){
    this.play()
})
video_1_2.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_1_3.addEventListener("mouseenter" , function(){
    this.play()
})
video_1_3.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_1_4.addEventListener("mouseenter" , function(){
    this.play()
})
video_1_4.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_1_5.addEventListener("mouseenter" , function(){
    this.play()
})
video_1_5.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_1_6.addEventListener("mouseenter" , function(){
    this.play()
})
video_1_6.addEventListener("mouseout" , function(){
    this.pause()
})

// Line two
let video_2_1 = this.document.getElementsByClassName('video-2-1')[0]
let video_2_2 = this.document.getElementsByClassName('video-2-2')[0]
let video_2_3 = this.document.getElementsByClassName('video-2-3')[0]
let video_2_4 = this.document.getElementsByClassName('video-2-4')[0]
let video_2_5 = this.document.getElementsByClassName('video-2-5')[0]
let video_2_6 = this.document.getElementsByClassName('video-2-6')[0]


video_2_1.addEventListener("mouseenter" , function(){
    this.play()
})
video_2_1.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_2_2.addEventListener("mouseenter" , function(){
    this.play()
})
video_2_2.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_2_3.addEventListener("mouseenter" , function(){
    this.play()
})
video_2_3.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_2_4.addEventListener("mouseenter" , function(){
    this.play()
})
video_2_4.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_2_5.addEventListener("mouseenter" , function(){
    this.play()
})
video_2_5.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_2_6.addEventListener("mouseenter" , function(){
    this.play()
})
video_2_6.addEventListener("mouseout" , function(){
    this.pause()
})

// Line three
let video_3_1 = this.document.getElementsByClassName('video-3-1')[0]
let video_3_2 = this.document.getElementsByClassName('video-3-2')[0]
let video_3_3 = this.document.getElementsByClassName('video-3-3')[0]
let video_3_4 = this.document.getElementsByClassName('video-3-4')[0]
let video_3_5 = this.document.getElementsByClassName('video-3-5')[0]
let video_3_6 = this.document.getElementsByClassName('video-3-6')[0]
let video_3_7 = this.document.getElementsByClassName('video-3-7')[0]

video_3_1.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_1.addEventListener("mouseout" , function(){
    this.pause()
})
//
video_3_2.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_2.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_3_3.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_3.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_3_4.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_4.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_3_5.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_5.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_3_6.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_6.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_3_7.addEventListener("mouseenter" , function(){
    this.play()
})
video_3_7.addEventListener("mouseout" , function(){
    this.pause()
}) 


// Line foure
let video_4_1 = this.document.getElementsByClassName('video-4-1')[0]
let video_4_2 = this.document.getElementsByClassName('video-4-2')[0]
let video_4_3 = this.document.getElementsByClassName('video-4-3')[0]
let video_4_4 = this.document.getElementsByClassName('video-4-4')[0]
let video_4_5 = this.document.getElementsByClassName('video-4-5')[0]
let video_4_6 = this.document.getElementsByClassName('video-4-6')[0]

video_4_1.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_1.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_4_2.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_2.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_4_3.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_3.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_4_4.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_4.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_4_5.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_5.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_4_6.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_6.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_4_7.addEventListener("mouseenter" , function(){
    this.play()
})
video_4_7.addEventListener("mouseout" , function(){
    this.pause()
})  
// Line five
let video_5_1 = this.document.getElementsByClassName('video-5-1')[0]
let video_5_2 = this.document.getElementsByClassName('video-5-2')[0]
let video_5_3 = this.document.getElementsByClassName('video-5-3')[0]
let video_5_4 = this.document.getElementsByClassName('video-5-4')[0]
let video_5_5 = this.document.getElementsByClassName('video-5-5')[0]
let video_5_6 = this.document.getElementsByClassName('video-5-6')[0]

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
// 
video_5_4.addEventListener("mouseenter" , function(){
    this.play()
})
video_5_4.addEventListener("mouseout" , function(){
    this.pause()
}) 
// 
video_5_5.addEventListener("mouseenter" , function(){
    this.play()
})
video_5_5.addEventListener("mouseout" , function(){
    this.pause()
})
// 
video_5_6.addEventListener("mouseenter" , function(){
    this.play()
})
video_5_6.addEventListener("mouseout" , function(){
    this.pause()
})
// 
}