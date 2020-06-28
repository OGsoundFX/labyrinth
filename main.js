const audio = new Audio('audio/background.mp3');
const footstep = new Audio('audio/footstep1.mp3');
const bumpWall = new Audio(`audio/bump-wall${Math.random() * (4 - 1) + 1}.mp3`);
function playLoop(sound) {
  sound.play();
  sound.loop = true;
}

function play(sound) {
  sound.play();
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


const moveUpArray = ["u", "p", "r", "l", "0", "1", "3", "4"]
const moveDownArray = ["p", "m", "n", "d", "0", "1", "2", "4"]
const moveLeftArray = ["l", "n", "1", "2", "3", "4", "h", "y"]
const moveRightArray = ["r", "m", "0", "2", "3", "4", "h", "x"]

const moveUp = () => {
  let tileType = document.getElementById("player").className[player.className.length - 1];
  if (moveUpArray.includes(tileType)) {
    const player = document.getElementById("player");
    i = position(player);
    const nextTile = document.getElementById("player").parentElement.previousElementSibling.children[i];
    player.removeAttribute("id");
    player.innerText = "";
    nextTile.setAttribute("id", "player");
    nextTile.innerText = "🔴";
    play(footstep);
  } else {
    play(bumpWall);
  };
}

const moveDown = () => {
  let tileType = document.getElementById("player").className[player.className.length - 1];
  if (moveDownArray.includes(tileType)) {
    const player = document.getElementById("player");
    i = position(player);
    const nextTile = document.getElementById("player").parentElement.nextElementSibling.children[i];
    player.removeAttribute("id");
    player.innerText = "";
    nextTile.setAttribute("id", "player");
    nextTile.innerText = "🔴";
    play(footstep);
    } else {
      play(bumpWall);
    };
  }

const moveLeft = () => {
  let tileType = document.getElementById("player").className[player.className.length - 1];
  if (moveLeftArray.includes(tileType)) {
    const player = document.getElementById("player");
    const nextTile = document.getElementById("player").previousElementSibling;
    player.removeAttribute("id");
    player.innerText = "";
    nextTile.setAttribute("id", "player");
    nextTile.innerText = "🔴";
    play(footstep);
  } else {
    play(bumpWall);
  };
}

const moveRight = () => {
  let tileType = document.getElementById("player").className[player.className.length - 1];
  if (moveRightArray.includes(tileType)) {
    let player = document.getElementById("player");
    let nextTile = document.getElementById("player").nextElementSibling;
    player.removeAttribute("id");
    player.innerText = "";
    nextTile.setAttribute("id", "player");
    nextTile.innerText = "🔴";
    play(footstep);
  } else {
    play(bumpWall);
  };
}

// console.log(player.className.substr(5, 6));
const finish = player.className.substr(5, 6);
if (finish === "finish") {
  alert(`Player ${player} wins! Play again?`);
  window.location.reload();
}
