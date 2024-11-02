//////////////////////////load Home////////////////////////////////////////////
var hbackgroundSound = new Audio("resources/level3.mp3");
hbackgroundSound.loop = true;

function loadlevel3() {
  hbackgroundSound.play();
}

//////////////////////////Ready state animation////////////////////////////////
var readyImageNumber = 1;
var readyWorkerNumber = 0;

readyWorkerNumber = setInterval(() => {
  readyImageNumber = readyImageNumber + 1;

  if (readyImageNumber == 10) {
    readyImageNumber = 1;
  }
  document.getElementById("boy").src =
    "resources/idle/NEWNJIDLE" + readyImageNumber + ".png";
}, 150);

/////////////////////////////keys handle///////////////////////////////////////

function controller(event) {
  if (event.key == "Enter") {
    if (runWorkerNumber == 0) {
      clearInterval(readyWorkerNumber);
      run();
      movebackground();
      flameMarginLeft.forEach(flame);
      enemyflameMarginLeft.forEach(enemy);
    }
  }

  if (event.key == " ") {
    if (jumpWorkerNumber == 0) {
      if (runWorkerNumber != 0) {
        jump();
        jumpSound.play();
        clearInterval(readyWorkerNumber);
        clearInterval(runWorkerNumber);
      }
    }
  }

  if (event.key == "ArrowRight") {
    if (attackWorkerNumber == 0) {
      if (runWorkerNumber != 0) {
        attack();
        attackSound.play();
        clearInterval(readyWorkerNumber);
        clearInterval(runWorkerNumber);
        clearInterval(jumpWorkerNumber);
        clearInterval(backgroundWorker);
      }
    }
  }

  if (event.key == "ArrowLeft") {
    if (shootWorkerNumber == 0) {
      if (runWorkerNumber != 0) {
        shoot();
        shootSound.play();
        clearInterval(readyWorkerNumber);
        clearInterval(runWorkerNumber);
        clearInterval(jumpWorkerNumber);
        clearInterval(backgroundWorker);
        clearInterval(attackWorkerNumber);
        clearInterval(scoreWorker);
      }
    }
  }
  if (event.key == "ArrowUp") {
    if (jumpShootWorkerNumber == 0) {
      if (runWorkerNumber != 0) {
        jumpShoot();
        attackSound.play();
        clearInterval(readyWorkerNumber);
        clearInterval(runWorkerNumber);
        clearInterval(jumpWorkerNumber);
        clearInterval(backgroundWorker);
        clearInterval(attackWorkerNumber);
        clearInterval(shootWorkerNumber);
      }
    }
  }
}
////////////////////////Run Animation////////////////////////////////////////////

var runImageNumber = 1;
var runWorkerNumber = 0;

function run() {
  runWorkerNumber = setInterval(() => {
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 10) {
      runImageNumber = 1;
    }
    document.getElementById("boy").src =
      "resources/NEWrun/" + runImageNumber + ".png";
  }, 150);
}
////////////////////////Jump Animation//////////////////////////////////////////

var jumpImageNumber = 1;
var jumpWorkerNumber = 0;
var jumpMarginTop = 420;
var jumpSound = new Audio("resources/jumpSound.mp3");
jumpSound.loop = true;

function jump() {
  jumpWorkerNumber = setInterval(() => {
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber < 5) {
      jumpMarginTop = jumpMarginTop - 50;
      document.getElementById("boy").style.marginTop = jumpMarginTop + "px";
    }
    if (jumpImageNumber > 7) {
      jumpMarginTop = jumpMarginTop + 50;
      document.getElementById("boy").style.marginTop = jumpMarginTop + "px";
    }

    if (jumpImageNumber == 10) {
      jumpImageNumber = 1;
      clearInterval(jumpWorkerNumber);
      jumpWorkerNumber = 0;
      run();
      jumpSound.pause();
    }
    document.getElementById("boy").src =
      "resources/jump/" + jumpImageNumber + ".png";
  }, 100);
}
//////////////////////////Move Background animation///////////////////////////
var backgroundPosition = 0;
var backgroundWorker = 0;

function movebackground() {
  backgroundWorker = setInterval(() => {
    backgroundPosition = backgroundPosition - 10;
    document.getElementById("background").style.backgroundPositionX =
      backgroundPosition + "px";
  }, 50);
}

///////////////////////////attack animation///////////////////////////////////
var attackImageNumber = 1;
var attackWorkerNumber = 0;
var attackSound = new Audio("resources/attack.mp3");

function attack() {
  attackWorkerNumber = setInterval(() => {
    attackImageNumber = attackImageNumber + 1;
    if (attackImageNumber == 10) {
      attackImageNumber = 1;
      clearInterval(attackWorkerNumber);
      attackWorkerNumber = 0;
      movebackground();
      attackSound.pause();
      run();
    }
    document.getElementById("boy").src =
      "resources/attack/" + attackImageNumber + ".png";
  }, 150);
}
//////////////////////////Shoot animation//////////////////////////////////////
var shootImageNumber = 1;
var shootWorkerNumber = 0;
var shootSound = new Audio("resources/shoot.mp3");

function shoot() {
  shootWorkerNumber = setInterval(() => {
    shootImageNumber = shootImageNumber + 1;
    if (shootImageNumber == 7) {
      shootImageNumber = 1;
      clearInterval(shootWorkerNumber);
      clearInterval(scoreWorker);
      shootWorkerNumber = 0;
      run();
      shootSound.pause();
      movebackground();
    }
    document.getElementById("boy").src =
      "resources/shoot/" + shootImageNumber + ".png";
  }, 150);
}
////////////////////////Jump attack Animation//////////////////////////////////////////

var jumpShootImageNumber = 1;
var jumpShootWorkerNumber = 0;
var jumpShootMarginTop = 420;

function jumpShoot() {
  jumpShootWorkerNumber = setInterval(() => {
    jumpShootImageNumber = jumpShootImageNumber + 1;

    if (jumpShootImageNumber < 5) {
      jumpShootMarginTop = jumpShootMarginTop - 50;
      document.getElementById("boy").style.marginTop =
        jumpShootMarginTop + "px";
    }
    if (jumpShootImageNumber > 7) {
      jumpShootMarginTop = jumpShootMarginTop + 50;
      document.getElementById("boy").style.marginTop =
        jumpShootMarginTop + "px";
    }

    if (jumpShootImageNumber == 10) {
      jumpShootImageNumber = 1;
      clearInterval(jumpShootWorkerNumber);
      jumpShootWorkerNumber = 0;
      movebackground();
      run();
      attackSound.pause();
    }
    document.getElementById("boy").src =
      "resources/JumpAttack/" + jumpShootImageNumber + ".png";
  }, 100);
}

////////////////////////Play levels//////////////////////////////////////////////
var x;
function play(x) {
  if (x == 1) {
    document.getElementById("play1").href = "level1.html";
  }
  if (x == 2) {
    document.getElementById("play2").href = "level2.html";
  }
  if (x == 3) {
  }
  if (x == 4) {
  }
}
////////////////////////coins score//////////////////////////////////////////////
var width = 0;
var marginWorker = 0;
var winSound = new Audio("resources/win.mp3");
var coinSound = new Audio("resources/coins.mp3");

function coinScore() {
  marginWorker = setInterval(() => {
    width = width + 5;

    if (width <= 300) {
      clearInterval(marginWorker);
      marginWorker = null;
    }
    if (width == 300) {
      //you win
      clearInterval(scoreWorker);
      clearInterval(backgroundWorker);
      clearInterval(runWorkerNumber);
      hbackgroundSound.pause();
      coinSound.pause();
      winSound.play();
      zombieSound.pause();
      document.getElementById("scard").style.display = "block";
    }

    document.getElementById("score2").style.width = width + "px";
  }, 150);
}
////////////////////////flame 1//////////////////////////////////////////////
var flameImageNumber = 1;
var flameWorkerNumber = 0;
var flameSound = new Audio("resources/shoot.mp3");
var coinSound = new Audio("resources/coins.mp3");

var flameMarginLeft = [
  500, 750, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500, 2700, 2900,
  3100,3200,3500,3700,3900
];

function flame(x) {
  var coin = document.createElement("img");
  coin.className = "coin";
  coin.style.marginLeft = x + "px";

  flameWorkerNumber = setInterval(() => {
    if (flameWorkerNumber != 0) {
      x = x - 10;
      coin.style.marginLeft = x + "px";

      if (x == 180) {
        coinSound.play();
        coin.style.display = "none";
        coinScore();
      }
    }

    flameImageNumber = flameImageNumber + 1;
    if (flameImageNumber == 11) {
      flameImageNumber = 1;
      //clearInterval(flameWorkerNumber);
      //flameWorkerNumber=0;
    }

    coin.src = "resources/coins/Gold_" + flameImageNumber + ".png";

    document.getElementById("background").appendChild(coin);
  }, 100);
}
////////////////////////flame 2//////////////////////////////////////////////
var flame1ImageNumber = 1;
var flame1WorkerNumber = 0;
var flame1MarginLeft = [4400, 4600, 4800];

function flame1(x) {
  var coin1 = document.createElement("img");
  coin1.className = "coin";
  coin1.style.marginLeft = x + "px";

  flame1WorkerNumber = setInterval(() => {
    if (flame1WorkerNumber != 0) {
      x = x - 10;
      coin1.style.marginLeft = x + "px";

      if (x == 180) {
        coinSound.play();
        coin1.style.display = "none";
        coinScore();
      }
    }

    flame1ImageNumber = flame1ImageNumber + 1;
    if (flame1ImageNumber == 11) {
      flame1ImageNumber = 1;

    }

    coin1.src = "resources/coins/Gold_" + flame1ImageNumber + ".png";

    document.getElementById("background").appendChild(coin1);
  }, 100);
}
// ////////////////////////enemy//////////////////////////////////////////////
var enemyImageNumber = 1;
var enemyWorkerNumber = 0;
var shootSound = new Audio("resources/shoot.mp3");
var zombieSound = new Audio("resources/zombie.mp3");

var enemyflameMarginLeft = [3200, 3500, 3700, 3900, 4000, 4300, 4500];

function enemy(x) {
  var enemy = document.createElement("img");
  enemy.className = "enemy";
  enemy.style.marginLeft = x + "px";

  enemyWorkerNumber = setInterval(() => {
    if (enemyWorkerNumber != 0) {
      x = x - 10;
      enemy.style.marginLeft = x + "px";

      if (x == 180) {
        zombieSound.play();
        if (shootWorkerNumber != 0) {
          enemy.style.display = "none";
        } else {
          ninjaScore();
        }

        flame1MarginLeft.forEach(flame1);
      } else if (x == 50) {
        clearInterval(scoreWorker);
        scoreWorker = 0;
      }
    }

    enemyImageNumber = enemyImageNumber + 1;
    if (enemyImageNumber == 11) {
      enemyImageNumber = 1;
    }

    enemy.src = "resources/enemy/Walk" + enemyImageNumber + ".png";

    document.getElementById("background").appendChild(enemy);
  }, 100);
}
////////////////////////ninja score//////////////////////////////////////////////
var nwidth = 305;
var scoreWorker = 0;
var loseSound = new Audio("resources/lose.mp3");

function ninjaScore() {
  scoreWorker = setInterval(() => {
    nwidth = nwidth - 5;
    if (nwidth < 100) {
      document.getElementById("nscore2").style.backgroundColor = "red";
    }
    if (nwidth == 5) {
      //you lose
      document.getElementById("title").innerHTML = "You Lose";
      document.getElementById("gif").src = "images/gameOver.jpg";
      document.getElementById("scard").style.display = "block";
      clearInterval(scoreWorker);
      clearInterval(runWorkerNumber);
      clearInterval(marginWorker);
      clearInterval(backgroundWorker);
      zombieSound.pause();
      hbackgroundSound.pause();
      loseSound.play();
    }

    document.getElementById("nscore2").style.width = nwidth + "px";
  }, 150);
}
