var database 
var playerCount
var form,player,game
var gameState = 0
var allPlayers
var players
var p1,p2
var obstacles
var roadImg,dustbin1,dustbin2,garbage1,garbage2,garbage3,garbage4
var player1Img,player2Img,obstacle1Img,obstacle2Img,boosterImg
var collection=0

function preload(){

  roadImg = loadImage("images/road.png")
  dustbin1 = loadImage("images/dustbin1.png")
  dustbin2 = loadImage("images/dustbin2.png")
  garbage1 = loadImage("images/garbage1.png")
 
  garbage2 = loadImage("images/garbage2.png")
  
  garbage3 = loadImage("images/garbage3.png")
  
  garbage4 = loadImage("images/garbage4.png")
 
  player1Img = loadAnimation("images/p1.png","images/p2.png")
  player2Img = loadAnimation("images/p3.png","images/p4.png")
  obstacle1Img = loadImage("images/obstacle1.png")
  
  obstacle2Img = loadImage("images/obstacle2.png")
  
  boosterImg = loadImage("images/booster.png")

}

function setup(){
  database = firebase.database()
  createCanvas(displayWidth-20,displayHeight-20)


  game = new Game()
  game.getState();
  game.start()
}

function draw(){
  

  if(playerCount == 2){
    game.update(1);
  }
  if(gameState == 1){
   game.play();
  }



}