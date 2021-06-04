class Form{
 constructor(){
  this.input = createInput('name')
  this.button = createButton('play')
  this.greeting = createElement('h2')
  this.title = createElement('h1')
  this.reset = createButton("reset")
 }

 hide(){
  this.input.hide()
  this.button.hide()
  this.title.hide()
  this.greeting.hide()

 }
 display(){
   this.input.position(displayWidth/2-80,displayHeight/2-100)
   this.button.position(displayWidth/2-30,displayHeight/2-50)
   this.title.html("Clean The City")
   this.title.position(displayWidth/2-100,displayHeight/2-300)
   this.reset.position(displayWidth-100,20);


   this.button.mousePressed(()=>{
     this.input.hide()
     this.button.hide()
     player.name = this.input.value()
     playerCount+=1
     player.index = playerCount;
     player.update()
     player.updateCount(playerCount);
     this.greeting.html("Hello "+ player.name)
     this.greeting.position(displayWidth/2-50,displayHeight/2-100)
   })

   this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
     var playerRef = database.ref('players')
     playerRef.remove();
  });


 }
}