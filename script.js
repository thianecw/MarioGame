const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map((item) => {
    return document.querySelector(item)
});

const span = document.querySelector("span");
let number = 0;
let yourScore;

const jumpSound = document.getElementById('jumpSound');
const gameOverSound = document.getElementById('gameOverSound');
const checkboxInput = document.getElementById('checkboxInput');

// Função para alternar o som
function toggleSound() {
    const isMuted = checkboxInput.checked;
    
    // Lista de todos os elementos de áudio
    const audioElements = [jumpSound, gameOverSound];
    
    audioElements.forEach(audio => {
        audio.muted = isMuted;
    });
}

// Adiciona o evento de mudança ao checkbox
checkboxInput.addEventListener('change', toggleSound);

// Inicializa o estado do som
toggleSound();

const jump = () => {
    if (!checkboxInput.checked) {
        jumpSound.play();
    }
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}
    
    const loop = setInterval(() => {
    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    
    // Detectar colisão
if (pipePosition < pipe.offsetWidth && pipePosition > 0 && marioPosition < (mario.offsetHeight + 10)) {
    gameOverSound.play();
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    document.querySelector("h1").innerHTML = "Game Over";

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./assets/game-over.png";
    mario.classList.add('game-over-mario');
    mario.style.marginLeft = "23px";

    clearInterval(loop);
    clearInterval(yourScore);
}
    }, 10);
    
    yourScore = setInterval(() => {
        number++ 
        span.innerHTML = number
     
     }, 500);
     
    restart.addEventListener("click", () => {
        location.reload(true)
    })
    document.addEventListener("keydown", jump)