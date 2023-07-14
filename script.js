let gameOverrr = false;
let score = 0;
let cross = true;
let musicAudio = new Audio("music.mp3")
let gameOverAudio = new Audio("gameover.mp3")
let jumpAudio = new Audio("jump.mp3")

// setTimeout(() => {
//     musicAudio.play()
// }, 1000);

document.onkeydown = function (e) {
    // console.log("Key code is " + e.key);
    if (e.key == "ArrowUp") {
        jumpAudio.play()
        const player = document.querySelector(".player");
        if (gameOverrr == false) {
            player.classList.add('animatePlayer')
        }
        setTimeout(() => {
            player.classList.remove('animatePlayer');
        }, 700);
    }
}

setInterval(() => {
    const player = document.querySelector('.player')
    const gameOver = document.querySelector('.gameOver')
    const obstacle = document.querySelector('.obstacle')

    let playerX = window.getComputedStyle(player, null).getPropertyValue('left')
    playerX = Number.parseInt(playerX)
    // console.log(playerX);
    let playerY = window.getComputedStyle(player, null).getPropertyValue('bottom')
    playerY = Number.parseInt(playerY)
    // console.log(playerY);

    let obstacleX = window.getComputedStyle(obstacle, null).getPropertyValue('left')
    obstacleX = Number.parseInt(obstacleX)
    // console.log(obstacleX);
    let obstacleY = window.getComputedStyle(obstacle, null).getPropertyValue('bottom')
    obstacleY = Number.parseInt(obstacleY)
    // console.log(obstacleY);

    let offSetX = Math.abs(playerX - obstacleX)
    // console.log(obstacleX);
    // 229
    let offSetY = Math.abs(playerY - obstacleY)
    // console.log(offSetY);
    // 80
    // console.log(offSetX, offSetY);

    if (obstacleX <= 229 && offSetY <= 50) {
        gameOverAudio.play();
        setTimeout(() => {
            gameOverAudio.pause()
            // musicAudio.pause()
        }, 1000);
        gameOver.innerHTML = "Game Over"
        obstacle.classList.remove('obstacleAnimate')
        player.classList.remove('animatePlayer')
        player.style.animation = "0"
        obstacle.style.right = "73vw"
        gameOverrr = true;
    }
    else if (offSetX < 145 && cross == true) {
        score++;
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);

        let animation_Duration = Number.parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration')) - 0.1
        obstacle.style.animationDuration = animation_Duration + 's';
    }

}, 100);

function updateScore(score) {
    document.getElementById('score').innerHTML = `Your Score is : ${score}`
}
