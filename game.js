let player = document.getElementById('player');
let newspaper = document.getElementById('newspaper');
let gameArea = document.getElementById('gameArea');

let playerPosition = 50;
let newspaperThrown = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && playerPosition < gameArea.offsetWidth - 50) {
        playerPosition += 10;
        player.style.left = playerPosition + 'px';
    }
    if (event.key === 'ArrowLeft' && playerPosition > 0) {
        playerPosition -= 10;
        player.style.left = playerPosition + 'px';
    }
    if (event.key === ' ' && !newspaperThrown) {
        throwNewspaper();
    }
});

function throwNewspaper() {
    newspaperThrown = true;
    newspaper.style.display = 'block';
    newspaper.style.left = playerPosition + 25 + 'px';
    newspaper.style.top = gameArea.offsetHeight - 100 + 'px';

    let interval = setInterval(() => {
        let newspaperTop = parseInt(newspaper.style.top);
        if (newspaperTop <= 0) {
            clearInterval(interval);
            newspaper.style.display = 'none';
            newspaperThrown = false;
        } else {
            newspaper.style.top = newspaperTop - 5 + 'px';
        }
    }, 30);
}
