const background = new Audio('audio/background.mp3');
background.volume = 0.5;
const footstep = new Audio('audio/footstep1.mp3');
const trapFall = new Audio('audio/pitSpiked1.mp3');
// const bumpWall1 = new Audio(`audio/bump-wall1.mp3`);
// const bumpWall2 = new Audio(`audio/bump-wall2.mp3`);
// const bumpWall3 = new Audio(`audio/bump-wall3.mp3`);
// const bumpWall4 = new Audio(`audio/bump-wall4.mp3`);
// const bumpWallArray = [bumpWall1, bumpWall2, bumpWall3, bumpWall4];

// function playMove(sound, dir) {
//   let audioContext = new AudioContext();
//   let pre = document.querySelector('pre');
//   let myScript = document.querySelector('script');

//   let source = audioContext.createMediaElementSource(sound);

//   let panNode = audioContext.createStereoPanner();
//   source.connect(panNode);
//   panNode.connect(audioContext.destination);
//   if (dir === "left") {
//     panNode.pan.value = -0.8
//   } else if (dir === "right") {
//     panNode.pan.value = 0.8;
//   } else {
//     panNode.pan.value = 0;
//   }
//   sound.play();
// }


// let audio;
let bumpWall1;
let bumpWall2;
let bumpWall3;
let bumpWall4;


const audioContext = new AudioContext();
fetch( 'audio/bump-wall1.mp3' ).then( resp => resp.arrayBuffer() )
.then( buf => audioContext.decodeAudioData( buf ) )
.then( audioBuffer => bumpWall1 = audioBuffer )
.then( () => sel.disabled = false )
.catch( console.error );

fetch( 'audio/bump-wall2.mp3' ).then( resp => resp.arrayBuffer() )
.then( buf => audioContext.decodeAudioData( buf ) )
.then( audioBuffer => bumpWall2 = audioBuffer )
.then( () => sel.disabled = false )
.catch( console.error );

fetch( 'audio/bump-wall3.mp3' ).then( resp => resp.arrayBuffer() )
.then( buf => audioContext.decodeAudioData( buf ) )
.then( audioBuffer => bumpWall3 = audioBuffer )
.then( () => sel.disabled = false )
.catch( console.error );

fetch( 'audio/bump-wall4.mp3' ).then( resp => resp.arrayBuffer() )
.then( buf => audioContext.decodeAudioData( buf ) )
.then( audioBuffer => bumpWall4 = audioBuffer )
.then( () => sel.disabled = false )
.catch( console.error );

// const bumpWallArray = [bumpWall1, bumpWall2, bumpWall3, bumpWall4];

// console.log (bumpWallArray);


function playMove(sound, dir) {

  let source = audioContext.createBufferSource();
  source.buffer = sound;

  let panNode = audioContext.createStereoPanner();
  source.connect( panNode );
  panNode.connect( audioContext.destination );
  if (dir === "left") {
    panNode.pan.value = -0.8
  } else if (dir === "right") {
    panNode.pan.value = 0.8;
  } else {
    panNode.pan.value = 0;
  }
  source.start( 0 );

}


function playLoop(sound) {
  sound.play();
  sound.loop = true;
}

function play(sound) {
  sound.play();
}

// Mouvement functions

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

    const trap = player.className.substr(5, 4);

    console.log(trap);

    if (trap === "trap") {
      play(trapFall);
      setTimeout(function(){
          alert(`You fell into a pit and died! Play again?`);
          window.location.reload();
      }, 50);
    }

  } else {
    playMove([bumpWall1, bumpWall2, bumpWall3, bumpWall4][Math.floor(Math.random()*4)], "up");
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
      playMove([bumpWall1, bumpWall2, bumpWall3, bumpWall4][Math.floor(Math.random()*4)], "down");
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
    playMove([bumpWall1, bumpWall2, bumpWall3, bumpWall4][Math.floor(Math.random()*4)], "left");
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
    const finish = player.className.substr(5, 6);

    setTimeout(function(){
      if (finish === "finish") {
        alert(`You win! Play again?`);
        window.location.reload();
      }
    }, 50);

  } else {
    playMove([bumpWall1, bumpWall2, bumpWall3, bumpWall4][Math.floor(Math.random()*4)], "right");
  };
}

// console.log(player.className.substr(5, 6));
// const finish = player.className.substr(5, 6);
// if (finish === "finish") {
//   alert(`Player ${player} wins! Play again?`);
//   window.location.reload();
// }
