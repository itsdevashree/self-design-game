class Game{
 constructor(){

 }

 getState(){
  var gameStateRef = database.ref('gameState')
  gameStateRef.on("value",function(data){
      gameState = data.val()
  })
 }

 update(state){
     database.ref('/').update({
         gameState:state
     })
 }

 //score(){
  //   if(p1.isTouching())
// }
 
 async start(){
     if(gameState == 0){
        form = new Form()
        form.display()

        player = new Player()
        var playerCountRef = await database.ref('playerCount').once("value")
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount()
        }
   
     }

     p1 = createSprite(100,200);
     p1.addAnimation("p1",player1Img);
   // p1.scale = 0.5


     p2 = createSprite(500,200);
     p2.addAnimation("p2",player2Img);
     //p2.scale=0.5

     players=[p1,p2] 
 } 

 play(){

     form.hide();
     Player.getPlayerInfo();
 
     

     if(allPlayers !== undefined){
         background(198,135,103)
         //image(roadImg,-displayWidth*4,0,displayWidth*5,displayHeight)
         image(roadImg,0,-displayHeight*4,displayWidth,displayHeight*5)
     
       var x =100;
       var y
       var index = 0;
                 
        for(var plr in allPlayers){
         index = index+1;
         x = x +400
         y = displayHeight-allPlayers[plr].distance
         players[index -1].x = x;
         players[index - 1].y = y;   
         if(index === player.index){    
           fill("black");
           stroke("red")
           ellipse(players[index-1].x,players[index-1].y,60)
          // players[index-1].x = mouseX
          // players[index-1].y = mouseY
           camera.position.x = displayWidth/2
           camera.position.y = players[index-1].y
          // camera.position.x = players.x
        }
        
    }
       
     }

     textSize(25)
     fill("black")
     text("Collection:"+collection,100,50)

     if(keyIsDown(UP_ARROW)&&player.index !== null){
        player.distance  +=5
        player.update()
     }
     


     var rand = Math.round(random(1,7));
     if(frameCount%80 == 0){
       obstacles = createSprite(random(100,displayWidth-100),-4345)
       obstacles.velocityY = 10;
       switch(rand){
           case 1: obstacles.addImage(garbage1)
           obstacles.scale = 0.5
           break;
           case 2: obstacles.addImage(garbage2)
           obstacles.scale = 0.5
           break;
           case 3: obstacles.addImage(garbage3)
           obstacles.scale = 0.5
           break;
           case 4: obstacles.addImage(garbage4)
           obstacles.scale = 0.5
           break;
           case 5: obstacles.addImage(boosterImg)
           obstacles.scale = 0.5
           break;
           case 6: obstacles.addImage(obstacle1Img)
           obstacles.scale = 0.5
           break;
           case 7: obstacles.addImage(obstacle2Img)
           obstacles.scale = 0.5
           break;
           default: break;
       }
       
     }

     

   //console.log(player.distance)
     drawSprites()
     
 }

}