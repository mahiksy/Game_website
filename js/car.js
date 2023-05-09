var passenger1= document.getElementById("person");
var passenger2=document.getElementById("person2");
var carr1=document.getElementById("car1");
var carr2=document.getElementById("car2");
var min=180;
var max=900;
var dis=dis;
var distance1=0;
var distance2=0;
var random=0;
var check=60;
var winner1=false;
var winner2=false;
function setUpPassenger(){
	random=parseInt(Math.random()*(max-min)+min);
	random=random | 0;
	passenger1.style.left=random+"px";
	passenger2.style.left=random+"px";
}
function setUpCar() {
	var dist1=carr1.style.left.value;
	var dist2=carr2.style.left.value;
	carr1.style.left=distance1+"px";
	carr2.style.left=distance2+"px";
	CheckWin(distance1,distance2);
	note();
}
function getDistance()
{
	distance1=parseInt(document.getElementById("dis1").value);
	distance2=parseInt(document.getElementById("dis2").value);
	passenger1.style.left=random+"px";
	passenger2.style.left=random+"px";
}
function CheckWin(dist1,dist2){
	var lastPoint1=dist1+60;
	var firstPoint1=dist1+30;
	var lastPoint2=dist2+60;
	var firstPoint2=dist2+30;
	if(random<=lastPoint1 && firstPoint1<=random)
	{
		winner1=true;
	}
	if(random<=lastPoint2 && firstPoint2<=random)
	{
		winner2=true;
	}

}
function note()
{
	if (winner1==true && winner2==true)
	{
		document.getElementById("note").innerHTML="Player1 and Player2 are both WINNERS!";
	}
	else
	{
		if (winner1==true)
		{
			document.getElementById("note").innerHTML="PLayer 1 is the WINNER!";
		}
		else if (winner2==true)
		{
			document.getElementById("note").innerHTML="PLayer 2 is the WINNER!";
		}
		else
		{
			document.getElementById("note").innerHTML="Opps! both Player did not reach to the passenger!";
		}
	}
}

function refresh()
{
	document.getElementById("dis1").value=0;
	document.getElementById("dis2").value=0;
	carr1.style.left=0+"px";
	carr2.style.left=0+"px";
	passenger1.style.left=0+"px";
	passenger2.style.left=0+"px";
	document.getElementById("note").innerHTML="LET'S SEE WHO IS THE WINNER!";

}
