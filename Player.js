class Player
{
    constructor()
    {
        this.x=400;
        this.y=716;
        this.radius=50;
        this.color='dodgerblue';
    }
    moveLeft()
    {
        this.x-=10;
        if(this.x<=48) this.x+=10;
        console.log(this.x+'_'+this.y);
    }
    moveRight()
    {
        this.x+=10;
        if(this.x>=752) this.x-=10;
        console.log(this.x+'_'+this.y);
    }
    moveUp()
    {
        this.y-=10;
        if(this.y<=48) this.y+=10;
        console.log(this.x+'_'+this.y);
    }
    moveDown()
    {
        this.y+=10;
        if(this.y>=724) this.y-=10;
        console.log(this.x+'_'+this.y);
    }
}