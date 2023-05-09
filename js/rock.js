let option=0;
let compOption=0;
let result=0;
let cResult=0;
let img="";
let rand=0;
let tie=1;

function getOption(op){
	if(op==='rock'){
		option=1;
	}
	else if(op==='paper'){
		option=2;
	}
	else{
		option=3;
	}
	console.log(option);
}

function getRandomOption(){
	rand=Math.floor(Math.random() * (3 - 1 + 1) + 1);
	
	return rand;
}

function fight(){
	compOption=getRandomOption();
	console.log(compOption);
	if(option!=0)
		{
		if(option - compOption ==1){
			result++;
			checkWin(result);

		}
		if(option ==1 && compOption == 3){
			result++;
			checkWin(result);

		}
		if(option == compOption){
			tie --;
			checkWin(tigh);
		}
		if(compOption-option==1 || (compOption==1 && option==3)){
			cResult--;
			checkWin(cResult);

		}
		console.log(tie);
		console.log(result);
		console.log(cResult);
		showPciture(compOption);
	}	
	

}

function checkWin(res){
	document.getElementById("result").style.opacity=100;
	if(res==0){
		document.getElementById("note").innerHTML="TIE!";
		document.getElementById("nextRound").style.opacity=100;
		document.getElementById("note").style.left="60px";
		document.getElementById("note").style.top="3px";	
	}
	if(res==3){
		document.getElementById("note").innerHTML="YOU WON!";
		document.getElementById("note").style.left="35px";
		document.getElementById("note").style.top="3px";
		document.getElementById("tryAgain").style.opacity=100;
	}
	if(res==-3){
		document.getElementById("note").innerHTML="YOU LOST!";
		document.getElementById("note").style.left="35px";
		document.getElementById("note").style.top="3px";
		document.getElementById("tryAgain").style.opacity=100;
	}
	if(res>0 && res!=3){
		document.getElementById("note").innerHTML="YOU SCORED!";
		document.getElementById("note").style.left="25px";
		document.getElementById("note").style.top="2px";
		document.getElementById("nextRound").style.opacity=100;
	
	}
	if(res<0 && res!=-3){
		document.getElementById("note").innerHTML="COMPUTER SCORED!";
		document.getElementById("note").style.left="10px";
		document.getElementById("note").style.top="0px";		
		document.getElementById("nextRound").style.opacity=100;
	}	
	
}

function showPciture(opt){
	if(opt == 1){
		img="img/rock.png";
	}
	else if(opt == 2){
		img="img/paper.png";
	}
	else{
		img="img/scissors.jpg";
	}
	document.getElementById("img").src=img;
	document.getElementById("img").style.opacity=100;
}

function nextRound(){
	option=0;
	tigh=1;
	compOption=0;
	document.getElementById("img").style.opacity=0;
	document.getElementById("result").style.opacity=0;
	document.getElementById("nextRound").style.opacity=0;
	console.log("we ar ehere");
}
function callingNext(){
	nextRound();
}
function playAgain(){
	nextRound();
	result=0;
	cResult=0;
	console.log(result);
	console.log(cResult);
	document.getElementById("tryAgain").style.opacity=0;
}
