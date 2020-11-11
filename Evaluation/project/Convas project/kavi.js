var canobj=document.querySelector("canvas");
canobj.width=window.innerWidth-20;
canobj.height=window.innerHeight-20;
var ctxt=canobj.getContext('2d');
var x=200;
var y=200;
var k=0;
var e1=Math.floor(Math.random()*canobj.width)+1;
var e2=Math.floor(Math.random()*canobj.height)+1;
document.addEventListener("keyup",function()
{
	if(event.keyCode=="38")
		k=1;
	if(event.keyCode=="37")
		k=2;
	if(event.keyCode=="39")
		k=3;
	if(event.keyCode=="40")
		k=4;
});
function egg()
{
	ctxt.beginPath();
	ctxt.fillStyle="blue";
	ctxt.arc(e1,e2,8,0,360,false);
	ctxt.fill();
}
egg();
function draw()
{
	ctxt.beginPath();
	ctxt.fillStyle="white";
	ctxt.arc(x,y,12,0,360,false);
	ctxt.arc(x-15,y,10,0,360,false);
	ctxt.arc(x-30,y,10,0,360,false);
	ctxt.arc(x-45,y,10,0,360,false);
	ctxt.fill();
	ctxt.beginPath();
	ctxt.fillStyle="black";
	ctxt.arc(x,y-3,3,0,360,false);
	ctxt.fill();
}
function update()
{
	if(k==0)
		x+=3;
	if(k==1)
		y-=3;
	if(k!=3&&k==2)
		x-=3;
	if(k==3)
		x+=3;
	if(k==4)
		y+=3;
	if(x+25>innerWidth||x-50<0||y<0||y+25>innerHeight)
		alert("Game Over.F5 to Retry!!")
}
function kavi()
{
	requestAnimationFrame(kavi);
	ctxt.clearRect(x-60,y-18,78,35);
	draw();
	update();
	if(x==e1&&y==e2)
		egg();
}
kavi();