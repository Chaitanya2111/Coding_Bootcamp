// setInterval()

const speechBubble = document.querySelector('.speech-bubble')
let height = 100



function moveBubble(){
    height += 50
    speechBubble.style.top = height + 'px'
    console.log(height)
    if (height >= 300){
        clearInterval(timeId)
    }
} 


let timeId = setInterval(moveBubble,1000) ; 