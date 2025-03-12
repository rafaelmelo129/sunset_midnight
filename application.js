const boy = document.querySelector('.boy');
const hadouken = document.querySelector('.hadouken')

const jump_up = () => {
    boy.classList.add('jump_up');

    setTimeout(() => {

        boy.classList.remove('jump_up')}, 500);
};

const loop = setInterval(() => {

    const hadoukenPosition = +hadouken.offsetLeft;
    const boyPosition = +window.getComputedStyle(boy).bottom.replace('px', ' ');
    console.log(boyPosition);

    if (hadoukenPosition <= 53 && hadoukenPosition > 0 && boyPosition < 62) {

        hadouken.style.animation = 'none';
        hadouken.style.left = '${hadoukenPosition}px';

        boy.style.animation = 'none';
        boy.style.left = '${boyPosition}px';

        boy.src = './explosão.png';
        boy.style.width = '200px';
        hadouken.src = './game_over.jpg';
        hadouken.style.left = '220px';
        hadouken.style.padding = '69px';
        hadouken.style.width = '400px';
    }
}, 10);

document.addEventListener('keydown', jump_up);