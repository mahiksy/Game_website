const easyList=['🚀✨🙎‍♀🌎','🔪🙎‍♀️🚿','👧⁉️✈️','👡👰⏰🌙','🐁🥘🍲🫕','⚡👨🔨','🚢🧊','👽📞📡👨🚲🟡','🐷💬🐏','📱🍎'];
const easyName=['gravity','psycho','airplane','cinderella','ratatouille','thor','titanic','et','babe','jobs']
const medList=['👨‍🦰👨‍🦰❤️🌄','🇯🇵💣🇺🇸⚓️','👦🏡👨👨','✏️📔👩‍❤️‍💋‍👨','🐳➡️🌊','💉💎','🎥👣👻',
'💇‍♀🇫🇷👸🎶🎶','🤓⚡️🏰✨','🇺🇸🥧','🔎🐠','💍📺','👦🎁👮‍♂❄️🚂☃️🎅','👸📝📖','👨🏻✂️🙌','🐼👊'];
const medName=['brokeback mountain','pearl harbour','home alone','the notebook','free willy','blood diamond','scary movie',
	'les miserables','harry potter','american pie','finding nemo','the ring','polar express','princess diaries','edward scissorhands','kungfu panda'];
const hardList=['👸🐸💋','5⃣0⃣0⃣🌞❤️','👼⛪️👹','👥','👨🏻➡️🎅','🌎🙈🙊🐒🐵','👑💬🎤','🐢🐢🐢🐢🐁','😈👗👠','👦🏻🍫🏭','🌃🏯👨🏻🔦🐒🗿','🐕🍜🐩'];
const hardName=['princess and the frog','500 days of summer','angles and demons','the social network','the santa clause','planet of the apes','the kings speech','teenage mutant ninja turtle',
	'the devil wears prada','charlie and the choclate factory','night at the Museum','lady and the tramp'];
let questionList=[];
let answerList=[];
const checkList=[];
let index=0;
let score=0;
const string="Abdfdadas asdasdA";
console.log(string.toLowerCase());

const question=document.querySelector('#movie');

function makeRandom(length){
	let x=length;
	random= Math.floor (Math.random()*(length-1-0+1))+0;
	if(checkList.length	!=0 && checkList.includes(random)==true)
	{
		makeRandom(x);
		console.log(random);
	}
	return	random;
}

function pickRandom(movieList,nameList)
{
	let random=-1;
	const len=movieList.length;
	for (let i=0;i<5;i++){
		let random=makeRandom(len);
		console.log(random);
		checkList[i]=random;
		questionList[i]=movieList[random];
		answerList[i]=nameList[random];
	}
	console.log(questionList);
	console.log(answerList);
}
function getLvl(level){
	if(level=='easy'){
		pickRandom(easyList,easyName);
	}
	if(level=='medium'){
		pickRandom(medList,medName);
	}
	
	if(level=='hard'){
		pickRandom(hardList,hardName);
	}
}
function start() {
	let x=document.querySelectorAll('.menuB');
	for(let i=0;i<x.length;i++){
		x[i].style.display='none';	
	}
	document.querySelector('.game').style.display='block';
	document.querySelector('#movie').innerText=questionList[0];

}
function backMenu(){
		let x=document.querySelectorAll('.menuB');
	for(let i=0;i<x.length;i++){
		x[i].style.display='block';	
	}
	document.querySelector('.game').style.display='none';
	document.querySelector('#score').innerText=`Score: 0`;
	document.querySelector('#resultMsg').style.display="none";

}

function clearTxt(){
	document.querySelector('#answer').value='';
}
function nextButtAddScore(sco){
	document.querySelector('#next').style.display='block';
	document.querySelector('#score').innerText='Score:'+sco.toString();

}
function checkAnswer() {
	let name=document.querySelector('#answer').value;
	let lowerCase=name.toLowerCase();
	console.log(lowerCase);
	if(lowerCase===answerList[index]){
		score++;
		index++;
		if(score<5){
			nextButtAddScore(score);
		}
		clearTxt();
		message(score);
	}
	else{
		score=0;
		index=0;
		message(score);
	}
}

function message(s){
	let note=document.querySelector('#resultMsg');
	note.style.display='inline';
	if(s>0){
		note.innerText="You Scored!Great Job!";
	}
	else if(s==5){
		note.innerText="Congradulations! you won!";
	}
	else{
		note.innerText="Wrong answer! You Lost!";
	}

}

function nextMovie(){
	document.querySelector('#movie').innerText=questionList[index];
	document.querySelector('#next').style.display='none';
	document.querySelector('#resultMsg').style.display='none';	
}