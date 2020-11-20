class Thread
{
    constructor()
    {
        this.w=Math.random()*770+30;
        this.h=-50;
        this.radius=Math.random()*40+10;
        this.color='rgb('+Math.floor(Math.random()*254+1)+','+Math.floor(Math.random()*254+1)+','+Math.floor(Math.random()*254+1)+')';
    }
    moveDownAndResetColor()
    {
        this.h+=10;
        if(this.h>800+50)
        {
            this.h=-50;
            this.radius=Math.random()*40+10;
            this.color='rgb('+Math.floor(Math.random()*254+1)+','+Math.floor(Math.random()*254+1)+','+Math.floor(Math.random()*254+1)+')';
        }
        /*check end*/
        if(this.checkEnd())
        {
            alert('End Game !');
        }
    }
    setHeight(height)
    {
        this.h=height;
    }
    checkEnd()
    {
        let distance=Math.sqrt((this.w-player.x)*(this.w-player.x) + (this.h-player.y)*(this.h-player.y));
        if(distance+5<player.radius+this.radius) return true;
        else return false;
    }
}