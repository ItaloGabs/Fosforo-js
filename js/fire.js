const fosforo = document.getElementById('fosforo1');
const botao = document.getElementById('automatic');

let fireindex = 0;
let intervalId = null;

const changermain = (event) => {
    stopAutomatic();
    fosfrs[event.target.id]();
}

const nextindex = () => fireindex = fireindex < 2 ? ++fireindex : 0;

function acender(){
    const fts = ['fire','apagado'];
    const ft = fts[fireindex];
    fosfrs[ft]();
    nextindex();
}

const stopAutomatic = () => clearInterval(intervalId);

const fosfrs = {
    'fire': () => fosforo.src = './img/fosforo_fire.png',
    'apagado': () => fosforo.src = './img/fosforo_apagado.png',
    'automatic': () => intervalId = setInterval(acender, 1000)
}

botao.addEventListener('click', changermain);

