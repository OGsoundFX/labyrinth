const audio = new Audio('audio/background.mp3');
function play() {
  audio.play();
  audio.loop = true;
}

const moveUp = () => {
  let player = document.getElementById("player");
  let nextTile = document.getElementById("player").previousElementSibling;
  player.removeAttribute("id");
  player.innerText = "";
  nextTile.setAttribute("id", "player");
  nextTile.innerText = "🔴";
  // console.log(player);
  // console.log(nextTile);
}

const movePlayer = (event) => {
  if (event.key === "a") {
    moveUp();
  } else if (event.key === "p") {
    moveLeft();
  } else if (event.key === "p") {
    moveRight();
  } else if (event.key === "p") {
    moveDown();
  }
};

document.addEventListener("keydown", movePlayer);
