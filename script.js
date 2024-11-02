//////////////////////////load Home////////////////////////////////////////////
var hbackgroundSound = new Audio("resources/home.mp3");
hbackgroundSound.loop = true;

function level1(){
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
      updateScore();
      flameMarginLeft.forEach(generateFlame);
      movebackground();
      
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
      shootWorkerNumber=0;
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
      document.getElementById("boy").style.marginTop = jumpShootMarginTop + "px";
    }
    if (jumpShootImageNumber > 7) {
      jumpShootMarginTop = jumpShootMarginTop + 50;
      document.getElementById("boy").style.marginTop = jumpShootMarginTop + "px";
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
function play(x){

   
  if(x == 1){
    document.getElementById("play1").href = "level1.html";
  }
  if(x == 2){
    document.getElementById("play2").href = "level2.html";
  }
  if(x == 3){
    document.getElementById("play3").href = "level3.html";
  }
  if(x == 4){
    
  }

}
////////////////////////update score//////////////////////////////////////////////
var score = 0;
var scoreWorker = 0;
var winSound = new Audio("resources/win.mp3");

function updateScore() {
  scoreWorker = setInterval(() => {
    score = score + 10;
    if (score == 1500) {
      //you win
      clearInterval(runWorkerNumber);
      clearInterval(backgroundWorker);
      clearInterval(flameWorkerNumber);
      clearInterval(jumpWorkerNumber);
      flameWorkerNumber=0;
      runWorkerNumber=0;
      clearInterval(scoreWorker);
      hbackgroundSound.pause();

      document.getElementById("scard").style.display = "block";
      winSound.play();

    
    
    }
   
    document.getElementById("score").innerHTML = score;
  }, 150);
}
////////////////////////flame//////////////////////////////////////////////
var flameMarginLeft = [500, 1000, 2000,2500,3200,3800,4500,4900];
var flameWorkerNumber = 0;

function generateFlame(x) {
  var i = document.createElement("img");
  i.src = "images/flame.gif";
  i.className = "flame";
  
  i.style.marginLeft = x + "px";
  document.getElementById("background").appendChild(i);

  flameWorkerNumber = setInterval(() => {

    if(flameWorkerNumber != 0){
      x = x - 10;
      i.style.marginLeft = x + "px";
    }
    if (x == 180) {
      if (jumpWorkerNumber == 0) {
        //you lose
        document.getElementById("title").innerHTML="You Lose";
        document.getElementById("gif").src = "images/gameOver.jpg";
        document.getElementById("scard").style.display = "block";


        clearInterval(runWorkerNumber);
        clearInterval(backgroundWorker);
        clearInterval(flameWorkerNumber);
        flameWorkerNumber=0;
        clearInterval(scoreWorker);
        ninjaDead();
        hbackgroundSound.pause();
        loseSound.play();
      }
    }
  }, 50);
}



////////////////////////ninja dead animation//////////////////////////////////////////////
var ninjaDeadImageNumber = 1;
var ninjaDeadWorkerNumber = 0;
var loseSound = new Audio("resources/lose.mp3");
loseSound.loop = true;

function ninjaDead(){


  ninjaDeadWorkerNumber = setInterval(() => {
    ninjaDeadImageNumber = ninjaDeadImageNumber + 1;
  
    if (ninjaDeadImageNumber == 10) {
      ninjaDeadImageNumber = 9;
      clearInterval(ninjaDeadWorkerNumber);
      ninjaDeadWorkerNumber=0;
      
    
    }
    document.getElementById("boy").src =
      "resources/dead/"+ninjaDeadImageNumber+".png";
  }, 150);
}
