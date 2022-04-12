var video = document.getElementById('video');
function printScroll(){
    // console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 1450){
        video.play()
        
    }
    else {
        video.pause()
    }
}

window.addEventListener('scroll',printScroll,false)

const backToTop = document.getElementById("backToTop")
backToTop.addEventListener('click',function(){
    window.scrollTo(0,0)
})