var btnRun = document.getElementById('btn-run');
const TAM = window.innerWidth;
var marg = 0;
function run(){
	btnRun.style = "margin-left:"+ marg +"px";
	
	if(marg < TAM - 200)
		marg += 100;
	else marg = 0;
}