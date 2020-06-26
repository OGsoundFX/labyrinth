const audio = new Audio('audio/background.mp3');
const footstep = new Audio('audio/footstep1.mp3');
function playLoop(sound) {
  sound.play();
  sound.loop = true;
}

function play(sound) {
  sound.play();
}


const moveUp = () => {
  const player = document.getElementById("player");
  // const tilePosition = document.getElementById("player");
  i = position(player);
  console.log(position(player));
  // console.log(tilePosition);
  const nextTile = document.getElementById("player").parentElement.previousElementSibling.children[i];
  player.removeAttribute("id");
  player.innerText = "";
  nextTile.setAttribute("id", "player");
  nextTile.innerText = "🔴";
  play(footstep);
}

const moveLeft = () => {
  const player = document.getElementById("player");
  const nextTile = document.getElementById("player").previousElementSibling;
  player.removeAttribute("id");
  player.innerText = "";
  nextTile.setAttribute("id", "player");
  nextTile.innerText = "🔴";
  play(footstep);
}

const moveRight = () => {
  let player = document.getElementById("player");
  let nextTile = document.getElementById("player").nextElementSibling;
  player.removeAttribute("id");
  player.innerText = "";
  nextTile.setAttribute("id", "player");
  nextTile.innerText = "🔴";
  play(footstep);
}

const movePlayer = (event) => {
  if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 39) {
    moveRight();
  } else if (event.keyCode === 40) {
    moveDown();
  }
};

document.addEventListener("keydown", movePlayer);


const position = (child) => {
    const parent = child.parentNode;
    const children = parent.children;
    let i = children.length - 1;
    for (i; i >= 0; i--){
        if (child == children[i]){
            break;
        }
    }
    return i;
};
