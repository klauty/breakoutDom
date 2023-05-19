
const VEL = 10;
const player = 
{
  element: document.getElementsByClassName('player')[0],
  x:1,
  y:1,
  dirX:0,
  dirY:0,
  vel:10
}
const keyPool = {
  arrowLeft:0,
  arrowRight:0,
}
window.addEventListener('keydown', ({key})=>{
  if(key === 'ArrowLeft'){
   keyPool.arrowLeft = 1;
  }
  if(key === 'ArrowRight' ){
    keyPool.arrowRight = 1;
  }
});

window.addEventListener('keyup', ({key})=>{
  if(key === 'ArrowLeft'){
    keyPool.arrowLeft = 0;
   }
   if(key === 'ArrowRight' ){
     keyPool.arrowRight = 0;
   }

});

const update = () => {
   
  //perder a preguiça de escrever mais 2 ifs ... 
  player.dirX = (keyPool.arrowRight - (player.x > 400)) - (keyPool.arrowLeft - (player.x < 0));
  // update da logica acontece aqui 
  player.x += player.dirX * player.vel;
  
  //proto bounce( eixo x)
  //player.dirX = (player.x > 400 && player.dirX > 0 ) || (player.x < 20 && player.dirX < 0) ? -player.dirX : player.dirX; 
  player.element.style.marginLeft = `${player.x}px`
  
}

setInterval(update,15);
//console.log(player)