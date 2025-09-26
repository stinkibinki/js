const obstacle = document.getElementById("obstacle");
obstacle.style.color = "red";

const player = document.getElementById("character");

let x = 0;
let y = 0;

let oHitbox = obstacle.getBoundingClientRect(); // obstacle hitbox

document.addEventListener("keydown", (event) => {
    const keyPressed = event.key.toLowerCase(); // how const
    switch (keyPressed) {
        case "w":
            y = y - 10;
            break;
        case "a":
            x = x - 10;
            break;
        case "s":
            y = y + 10;
            break;
        case "d":
            x = x + 10;
            break;
    }
    player.style.top = `${y}px`;
    player.style.left = `${x}px`;
    console.log(player.getBoundingClientRect());
    let pHitbox = player.getBoundingClientRect(); // player hitbox
    collision(pHitbox, oHitbox);
})

function collision(pHitbox, oHitbox) {
    if ((pHitbox.top < oHitbox.bottom) &&
        ((pHitbox.right > oHitbox.left && pHitbox.left < oHitbox.right) ||
        (pHitbox.left < oHitbox.right && pHitbox.right > oHitbox.right))) {
        alert("Game over");
        //player.style.top = `0px`;
        //player.style.left = `0px`;
        //pHitbox = player.getBoundingClientRect();
    }
}