class Player{
 constructor(){
 this.name = null;
 this.index = null;
 this.collection = 0;
 this.distance = 0;
 }
 
 getCount(){
  var getCountRef = database.ref('playerCount')
   getCountRef.on('value',(data)=>{
       playerCount = data.val()
   })
 }

 updateCount(count){
   database.ref('/').update({
       playerCount:count
   })
 }

 update(){
  var playerIndex = "players/player"+this.index;
  database.ref(playerIndex).set({
    name:this.name,
    collection:this.collection,
    distance:this.distance
  })
 }

 static getPlayerInfo(){
   var playerInfoRef = database.ref('players');
   playerInfoRef.on("value",(data)=>{
     allPlayers = data.val();
   })
 }

}