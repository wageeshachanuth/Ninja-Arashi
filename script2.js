//////////////////////////load Home////////////////////////////////////////////
var hbackgroundSound = new Audio("resources/forest.mp3");
hbackgroundSound.loop = true;

function loadlevel2(){
  hbackgroundSound.play();
}
//////////////////////////Ready state animation////////////////////////////////
var readyImageNumber = 1;
var readyWorkerNumber = 0;
var backgroundSound = new Audio("resources/MainTheme.mp3");
backgroundSound.loop = true;

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



  if (event.key == "ArrowRight") {
    if (attackWorkerNumber == 0) {
   
        attack();
        enemyScore();
        attackSound.play();
        clearInterval(readyWorkerNumber);
        clearInterval(backgroundWorker);
        clearInterval(enemyWorkerNumber);
        clearInterval(scoreWorker);
       
        
       
      }
    
  }


}


//////////////////////////Move Background animation///////////////////////////
var backgroundPosition = 0;
var backgroundWorker = 0;

function movebackground() {
  backgroundWorker = setInterval(() => {
    backgroundPosition = backgroundPosition + 10;
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
      clearInterval(marginWorker);
      attackWorkerNumber = 0;
      walk();
      ninjaScore();
      attackSound.pause();
   
      
     
    }
    document.getElementById("boy").src ="resources/attack/" + attackImageNumber + ".png";
  }, 150);

}

////////////////////////enemy animation//////////////////////////////////////////////
var enemyImageNumber = 1;
var enemyWorkerNumber = 0;


function walk(){


  enemyWorkerNumber = setInterval(() => {
  enemyImageNumber = enemyImageNumber + 1;
  
    if (enemyImageNumber == 11) {
      enemyImageNumber = 1;
      clearInterval(enemyWorkerNumber);
      enemyWorkerNumber = 0;
      clearInterval(scoreWorker);
      if(enemyWorkerNumber==0){
        walk();
        attackSound.play();
        ninjaScore();

      }
    
    }
    document.getElementById("enemy").src =
      "resources/enemy/Attack"+enemyImageNumber+".png";
  }, 150);
}
////////////////////////enemy dead animation//////////////////////////////////////////////
var enemyDeadImageNumber = 1;
var enemyDeadWorkerNumber = 0;


function enemyDead(){


  enemyDeadWorkerNumber = setInterval(() => {
    enemyDeadImageNumber = enemyDeadImageNumber + 1;
  
    if (enemyDeadImageNumber == 11) {
      enemyDeadImageNumber = 10;
      clearInterval(enemyDeadWorkerNumber);
      enemyDeadWorkerNumber=0;
      
    
    }
    document.getElementById("enemy").src =
      "resources/enemy/Dead"+enemyDeadImageNumber+".png";
  }, 150);
}
////////////////////////ninja dead animation//////////////////////////////////////////////
var ninjaDeadImageNumber = 1;
var ninjaDeadWorkerNumber = 0;


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
////////////////////////enemy score//////////////////////////////////////////////
var width = 305;
var marginWorker = 0;
var winSound = new Audio("resources/win.mp3");


function enemyScore(){
  marginWorker = setInterval(()=>{
    width = width - 1;
    if(width < 100){
      document.getElementById("score2").style.backgroundColor = "red";
    }
    if(width == 5){
      //you win
       document.getElementById("scard").style.display = "block";
       clearInterval(scoreWorker);
       clearInterval(marginWorker);
       clearInterval(attackWorkerNumber);
       clearInterval(enemyWorkerNumber);
       hbackgroundSound.pause();
       winSound.play();
       if(enemyDeadWorkerNumber == 0){
        enemyDead();
       }
       
    }
   
   document.getElementById("score2").style.width = width+"px";
  },150);
}
////////////////////////ninja score//////////////////////////////////////////////
var nwidth = 305;
var scoreWorker = 0;
var loseSound = new Audio("resources/lose.mp3");

function ninjaScore(){
  scoreWorker = setInterval(()=>{
    nwidth = nwidth - 1;
    if(nwidth < 100){
      document.getElementById("nscore2").style.backgroundColor = "red";
    }
    if(nwidth == 5){
           //you lose
           document.getElementById("title").innerHTML="You Lose";
           document.getElementById("gif").src = "images/gameOver.jpg";
           document.getElementById("scard").style.display = "block";
           clearInterval(scoreWorker);
           clearInterval(marginWorker);
           clearInterval(attackWorkerNumber);
           clearInterval(enemyWorkerNumber);
           hbackgroundSound.pause();
           loseSound.play();
           if(ninjaDeadWorkerNumber == 0){
            ninjaDead();
           }
   }
    
   document.getElementById("nscore2").style.width = nwidth+"px";
  },150);
}
////////////////////////try again//////////////////////////////////////////////
