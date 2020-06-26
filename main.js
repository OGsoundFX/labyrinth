const audio = new Audio('audio/background.mp3');
const footstep = new Audio('audio/footstep1.mp3');
const bumpWall = new Audio('audio/bump-wall.mp3')
function playLoop(sound) {
  sound.play();
  sound.loop = true;
}

function play(sound) {
  sound.play();
}


// const moveUp = () => {
//   const player = document.getElementById("player");
//   i = position(player);
//   const nextTile = document.getElementById("player").parentElement.previousElementSibling.children[i];
//   player.removeAttribute("id");
//   player.innerText = "";
//   nextTile.setAttribute("id", "player");
//   nextTile.innerText = "🔴";
//   play(footstep);
// }

// const moveDown = () => {
//   const player = document.getElementById("player");
//   i = position(player);
//   const nextTile = document.getElementById("player").parentElement.nextElementSibling.children[i];
//   player.removeAttribute("id");
//   player.innerText = "";
//   nextTile.setAttribute("id", "player");
//   nextTile.innerText = "🔴";
//   play(footstep);
// }

// const moveLeft = () => {
//   const player = document.getElementById("player");
//   const nextTile = document.getElementById("player").previousElementSibling;
//   player.removeAttribute("id");
//   player.innerText = "";
//   nextTile.setAttribute("id", "player");
//   nextTile.innerText = "🔴";
//   play(footstep);
// }

// const moveRight = () => {
//   let player = document.getElementById("player");
//   let nextTile = document.getElementById("player").nextElementSibling;
//   player.removeAttribute("id");
//   player.innerText = "";
//   nextTile.setAttribute("id", "player");
//   nextTile.innerText = "🔴";
//   play(footstep);
// }

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


// Hitting walls

// si c'est un mur, ne pas bouger et play sound
// determiner si c'est un mur:


const moveUpArray = ["u", "p", "r", "l", "0", "1", "3", "4"]
const moveDownArray = ["p", "m", "n", "d", "0", "1", "2", "4"]
const moveLeftArray = ["l", "n", "1", "2", "3", "4"]
const moveRightArray = ["r", "m", "0", "2", "3", "4"]



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
