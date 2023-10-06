
const gameObject = 
{
  element: undefined,
  x:1,
  y:1,
  dirX:0,
  dirY:0,
  vel:10
}

const player =  {...gameObject}
player.element = document.getElementsByClassName('player')[0];

const bola = {...gameObject}
bola.element = document.getElementsByClassName('bola')[0];
bola.x = 240;
bola.y = 300;

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
  player.x += player.dirX * player.vel;

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

  

  //proto bounce( eixo x)
  //player.dirX = (player.x > 400 && player.dirX > 0 ) || (player.x < 20 && player.dirX < 0) ? -player.dirX : player.dirX; 
  bola.element.style.marginLeft = `${bola.x}px`;
  bola.element.style.marginTop = `${bola.y}px`;
  player.element.style.marginLeft = `${player.x}px`;
  
}

setInterval(update,15);
//console.log(player)