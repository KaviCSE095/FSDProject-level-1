var canobj=document.querySelector("canvas");
canobj.width=window.innerWidth-20;
canobj.height=window.innerHeight-20;
var ctxt=canobj.getContext('2d');
var x=400;
var xs=2;
var ys=1;
var y=300;
var k=0;
function egg()
{
	ctxt.beginPath();
	ctxt.fillStyle="blue";
	var e1=Math.floor(Math.random()*canobj.width)+1;
	var e2=Math.floor(Math.random()*canobj.height)+1;
	ctxt.arc(e1,e2,8,0,360,false);
	ctxt.fill();
}
egg();
function snkdraw()
{
	if(k==0)
	{
		ctxt.beginPath();
		ctxt.fillStyle="red";
		ctxt.arc(x,y,12,0,360,false);
		ctxt.arc(x-15,y,10,0,360,false);
		ctxt.arc(x-30,y,10,0,360,false);
		ctxt.arc(x-45,y,10,0,360,false);
		ctxt.fill();
	}
	if(k==1)
	{
		ctxt.beginPath();
		ctxt.fillStyle="red";
		ctxt.arc(x1,y,12,0,360,false);
		ctxt.arc(x1,y-15,10,0,360,false);
		ctxt.arc(x1,y-30,10,0,360,false);
		ctxt.arc(x1,y-45,10,0,360,false);
		ctxt.fill();	
	}
}
snkdraw();
function update()
{
	if(x+6>canobj.width||x<0)
	{	
		alert("Game Over.Try again!!!press F5");
	}
	document.addEventListener('keypress',function(event){
		if(k==0)
			x-=xs;
		if(event.keyCode=="38")
			y-=ys;
		if(event.keyCode=="37")
			x-=ys;
		if(event.keyCode=="39")
			x+=xs;
		if(event.keyCode=="40")
			y+=ys;
	});
}
function snkani()
{
	requestAnimationFrame(snkani);
	if(k=0)
		ctxt.clearRect(x-60,285,60,40);
	if(k=1)
		ctxt.clearRect(x-15,y-30,40,60);
	snkdraw();
	update();
}
snkani();