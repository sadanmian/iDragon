document.onkeydown = function (e) {
    // console.log("Key code is " + e.key);
    if (e.key == "ArrowUp") {
        const player = document.querySelector(".player");
        player.classList.add('animatePlayer')
        setTimeout(() => {
            player.classList.remove('animatePlayer');
        }, 700);
    }
}
