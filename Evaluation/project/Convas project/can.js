
var canobj=document.querySelector("canvas");
canobj.width=window.innerWidth;
canobj.height=window.innerHeight;
var ctxt=canobj.getContext('2d');

for(i=0;i<=10;i++)
{
	ctxt.beginPath();	
	ctxt.arc(400,300,i*20,0,360,false);
	ctxt.stroke();
}

ctxt.beginPath();
ctxt.arc(650,400,250,0,360,false);
ctxt.strokeStyle="green";
ctxt.stroke();
ctxt.beginPath();
ctxt.arc(500,300,50,0,360,false);
ctxt.strokeStyle="red";
ctxt.stroke();
ctxt.beginPath();	
ctxt.arc(800,300,50,0,360,false);
ctxt.stroke();
ctxt.beginPath();
ctxt.fillStyle="red";
ctxt.arc(500,300,20,0,360,false);
ctxt.fill();
ctxt.beginPath();	
ctxt.fillStyle="red";
ctxt.arc(800,300,20,0,360,false);
ctxt.fill();
ctxt.beginPath();
ctxt.fillRect(630,400,40,100);
ctxt.fill();
ctxt.beginPath();
ctxt.ellipse(650,550,20,60,Math.PI/2,0,2*Math.PI);
ctxt.fill();