var canobj=document.querySelector("canvas");
canobj.width=window.innerWidth;
canobj.height=window.innerHeight;
var mouse={x:undefined,y:undefined};
var ctxt=canobj.getContext('2d');
var max_radius=30;
document.addEventListener("mousemove",function(event)
{
	mouse.x=event.x;
	mouse.y=event.y;
});
var max_radius=30;
function Circle(x,y,xs,ys,r,c)
{
	this.x=x;
	this.y=y;
	this.xs=xs;
	this.ys=ys;
	this.r=r;
	this.min_r=r;
	this.c=c;
	this.draw=function()
	{
		ctxt.beginPath();
		ctxt.fillStyle=c;
		ctxt.arc(this.x,this.y,this.r,0,360,false);
		ctxt.fill();
	}
	this.update=function()
	{
		if((this.x+this.r)>window.innerWidth||(this.x-this.r<0))
		{
			this.xs=-this.xs;
		}
		if((this.y+this.r)>window.innerHeight||(this.y-this.r<0))
		{
			this.ys=-this.ys;
		}
		if(this.xp==this.x&&this.yp==this.y)
		{
			alert("kavi");
		}
		this.x+=this.xs;
		this.y+=this.ys;
		if(this.x>(mouse.x-40)&& this.x<(mouse.x+40)&& this.y>(mouse.y-40)&& this.y<(mouse.y+40))
		{
			if(this.r<max_radius)
			{
				this.r+=this.r;
			}
		}
		else
		{
			if(this.r>this.min_r)
			{
				this.r=this.min_r;
			}
		}
		this.draw();
	}
}
var carr=[];
for(i=0;i<1000;i++)
{
	var x=Math.floor(Math.random()*window.innerWidth);
	var y=Math.floor(Math.random()*window.innerHeight);
	var x1=Math.floor(Math.random()*255);
	var y1=Math.floor(Math.random()*255);
	var z1=Math.floor(Math.random()*255);
	var c="rgba("+x1+","+y1+","+z1+")"
	var xs=Math.floor(Math.random()*10);
	var ys=Math.floor(Math.random()*10);
	var r=Math.floor(Math.random()*10);
	carr.push(new Circle(x,y,xs,ys,r,c));
}
function canani()
{
		requestAnimationFrame(canani);
		ctxt.clearRect(0,0,innerWidth,innerHeight);
		for(i=0;i<carr.length;i++)
		{
			carr[i].update();
		}
}
canani();