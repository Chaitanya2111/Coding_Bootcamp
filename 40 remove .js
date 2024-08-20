// remove EventListener

// const circle = document.querySelector('.circle')
// let count = 0 ;
// function toggleColor(){
//     circle.classList.toggle('red-circle')
//     count++
//     console.log(count)
//     if (count > 10){
//         circle.removeEventListener('click',toggleColor)
//     }
// }

// circle.addEventListener('click', toggleColor)




const circle = document.querySelector('.circle')
let height = 0 ;

function moveCircle(){
    height += 100
    circle.style.top = height + 'px'
    if(height > 300){
circle.removeEventListener('click',moveCircle); 

    }
}


circle.addEventListener('click',moveCircle); 