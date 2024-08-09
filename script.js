const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map((item) => {
    return document.querySelector(item)
    })
    
    const span = document.querySelector("span")
    let number = 0
    let yourScore 
    
    const jumpSound = document.getElementById('jumpSound');
    const gameOverSound = document.getElementById('gameOverSound');
    
    const jump = () => {
        jumpSound.play();
        mario.classList.add("jump")
        setTimeout(() => {
            mario.classList.remove("jump")
        }, 500)
    }
    
    const loop = setInterval(() => {
    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    
        if (pipePosition <100 && pipePosition > 0 && marioPosition < 80) {
            gameOverSound.play();
            pipe.style.animation = "none"
            pipe.style.left = `${pipePosition}px`
            document.querySelector("h1").innerHTML="Game Over"
            
            mario.style.animation = "none"
            mario.style.bottom = `${pipePosition}px`
    
            mario.src = "./assets/game-over.png"
            mario.style.width = "100px"
            mario.style.marginLeft = "23px"
    
            clearInterval(loop)
            clearInterval(yourScore)
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