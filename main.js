/*threads move*/
let threadAmount=10;
let speed=40;
let threadList=[];
for(let i=0;i<threadAmount;i++)
{
    let thr=new Thread();
    thr.setHeight(-i*150);
    threadList.push(thr);
}
function threadDisplay(thr)
{
    let ctx=document.getElementById('container').getContext('2d');
    ctx.beginPath();
    ctx.arc(thr.w,thr.h,thr.radius,0,2*Math.PI);
    ctx.fillStyle=thr.color;
    ctx.fill();
    console.log('Thread displayed !');
}
function threadRemove(thr)
{
    let ctx=document.getElementById('container').getContext('2d');
    ctx.beginPath();
    ctx.arc(thr.w,thr.h,thr.radius+2,0,2*Math.PI);
    ctx.fillStyle='white';
    ctx.fill();
    console.log('Thread removed !');
}
function threadMove()
{
    for(let i=0;i<threadAmount;i++)
    {
        threadRemove(threadList[i]);
        threadList[i].moveDownAndResetColor();
        threadDisplay(threadList[i]);
    }
}
function threadStart()
{
    setInterval(threadMove,speed);
}

/*player move*/
let player=new Player();
function displayPlayer()
{
    let ctx=document.getElementById('container').getContext('2d');
    ctx.beginPath();
    ctx.arc(player.x,player.y,player.radius,0,2*Math.PI);
    ctx.fillStyle=player.color;
    ctx.fill();
    console.log('displayed !');
}
function removePlayer()
{
    let ctx=document.getElementById('container').getContext('2d');
    ctx.beginPath();
    ctx.arc(player.x,player.y,player.radius+2,0,2*Math.PI);
    ctx.fillStyle='white';
    ctx.fill();
    console.log('removed !');
}
function moveSelection(event)
{
    if(event.keyCode==37)
    {
        removePlayer();
        player.moveLeft();
        displayPlayer();
    }
    else if(event.keyCode==39)
    {
        removePlayer();
        player.moveRight();
        displayPlayer();
    }
    else if(event.keyCode==38)
    {
        removePlayer();
        player.moveUp();
        displayPlayer();
    }
    else if(event.keyCode==40)
    {
        removePlayer();
        player.moveDown();
        displayPlayer();
    }
}
function startGame()
{
    window.addEventListener('keydown',moveSelection);
    displayPlayer();
    threadStart();
}
