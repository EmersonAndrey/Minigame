const person = document.querySelector('.person');
const obstacle = document.querySelector('.obstacle');
const menu = document.querySelector('.menu');
const score = document.querySelector('.score');
const button = document.querySelector('.start');

var scoremask = 0
var scoring = 0;

score.innerHTML = `Score: ${scoremask}`;

function start(){
    button.style.display= 'none';

    scoring = 0;
    scoremask = false;

    person.src = '/images/running.gif';
    person.style.width = '110px';

    obstacle.style.right = '100%';
    obstacle.style.left = 'auto';
    obstacle.classList.add('on');

    menu.innerHTML = '';
}


const jump = () =>{
    person.classList.add('jump');

    setTimeout(()=>{
        person.classList.remove('jump');
    },1500)
}



const loop = setInterval(() =>{
    if (scoremask === false){
        scoring += 1;
        score.innerHTML = `Score: ${scoring}`;
    }

    const obstaclePosition = obstacle.offsetLeft;
    const personPosition = Number(window.getComputedStyle(person).bottom.replace('px',' '));
    
    if (obstaclePosition <= 90 && personPosition < 50){

        obstacle.classList.remove('on');
        obstacle.style.left = `${obstaclePosition}px`;
        
        person.style.left = `${Number(personPosition)}px`;
        person.src = '/images/game-over.png';
        person.style.width = '100px';
        person.classList.remove('jump');
        
        menu.innerHTML = 'Reloading...';
        
        clearInterval(loop);
        
        setTimeout(() =>{
            location.reload();
        }, 1000*3);


    }

},100);


document.addEventListener('keydown', jump);