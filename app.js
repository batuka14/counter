var h1=document.getElementsByTagName('h1')[1];
var CountPlus=0;
var CountMinus=0;
console.log(h1);
function countPlus(){
	CountPlus++;
	h1.innerText=CountPlus+CountMinus;
}
function countMinus(){
	CountMinus--;
	h1.innerText=CountMinus+CountPlus;
}
function restart(){
	h1.innerText=CountPlus+CountMinus;
	CountPlus=0;
	CountMinus=0;
}