// KEYS 
const circle =document.querySelector('.circle')

function control(e){ 
     if(e.key === 'ArrowLeft'){
         console.log('pressed left')
     } else if (e.key === 'ArrowRight'){
         console.log('pressed right')
     } else if (e.key === 'ArrowUp'){
         console.log('pressed up')
     } else if( e.key === ' ArrowDown'){
         console.log('arrow passed down')
     }
}

document.addEventListener('keydown', control);
