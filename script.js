
function boxColission(a, b) {
  return (
    a.minX <= b.maxX &&
    a.maxX >= b.minX &&
    a.minY <= b.maxY &&
    a.maxY >= b.minY 
  );
}

const gameObject = 
{
  element: undefined,
  x:1,
  y:1,
  dirX:0,
  dirY:0,
  vel:10,
  
}

const player =  {...gameObject}
player.element = document.getElementsByClassName('player')[0];
player.x = 240;
player.y = 430;
player.dirY = 0;
player.box= {
  minX:0,
  maxX:0,
  minY:0,
  maxY:0,
  boxHeight:50,
  boxWidth:100
}

const bola = {...gameObject}
bola.element = document.getElementsByClassName('bola')[0];
bola.x = 240;
bola.y = 300;
bola.box= {
  minX:0,
  maxX:0,
  minY:0,
  maxY:0,
  boxHeight:50,
  boxWidth:50
}

const keyPool = {
  arrowLeft:0,
  arrowRight:0,
  space:0,
}

window.addEventListener('keydown', ({key})=>{
  if(key === 'ArrowLeft'){
   keyPool.arrowLeft = 1;
  }
  if(key === 'ArrowRight' ){
    keyPool.arrowRight = 1;
  }
  if(key === ' ' ){
    keyPool.space = 1;
  }
});

window.addEventListener('keyup', ({key})=>{
  if(key === 'ArrowLeft'){
    keyPool.arrowLeft = 0;
   }
   if(key === 'ArrowRight' ){
     keyPool.arrowRight = 0;
   }
   if(key === ' ' ){
    keyPool.space = 0;
  }
   console.log(key);
});

const update = () => {
    
  if((player.x > 400)){
    keyPool.arrowRight  = 0;
  }
  if(player.x < 5){
    keyPool.arrowLeft = 0;
  }

  if(keyPool.space){
    bola.dirY = 1;
    bola.dirX = 1;// - Math.round(Math.random()*2);
    bola.x = 240;
    bola.y = 300;
  }

  player.dirX = keyPool.arrowRight - keyPool.arrowLeft ;
  
  // update da logica acontece aqui 
  if(bola.x < 0 ){
    bola.dirX = 1;
  }
  if(bola.x > 450 ){
    bola.dirX = -1;
  }

  if(bola.y < 0 ){
    bola.dirY = 1;
  }
  if(bola.y > 450 ){
    bola.dirY = -1;
  }

  bola.x += bola.dirX * bola.vel;
  bola.y += bola.dirY * bola.vel;
  bola.box.maxX = bola.x + bola.box.boxWidth;
  bola.box.minX = bola.x;
  bola.box.maxY = bola.y + bola.box.boxHeight ;
  bola.box.minY = bola.y ;

  player.x += player.dirX * player.vel;
  player.y += player.dirY * player.vel;
  player.box.maxX = player.x + player.box.boxWidth ;
  player.box.minX = player.x;
  player.box.maxY = player.y + player.box.boxHeight;
  player.box.minY = player.y ;


  bola.element.style.marginLeft = `${bola.x}px`;
  bola.element.style.marginTop = `${bola.y}px`;
  player.element.style.marginLeft = `${player.x}px`;
  player.element.style.marginTop = `${player.y}px`;

  if(boxColission(player.box,bola.box))
  {
    player.element.style.backgroundColor = "red";
    bola.dirY = -1;
  }else{
    player.element.style.backgroundColor = "blue";
  }
  
}

setInterval(update,15);
//console.log(player)