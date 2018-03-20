var board=document.getElementsByClassName('bg1')[0];
var bg=document.getElementsByClassName('bg2')[0];
var btn=document.getElementById('replay');
var bac=document.getElementById('restep');
board.width=450;
board.height=450;//要直接设置画布 否则坐标拉伸
bg.width=450;
bg.height=450;//要直接设置画布 否则坐标拉伸
var txt=board.getContext('2d');
var txtbg=bg.getContext('2d');
var im=new Image();
var pac={
		x:0,
		y:0,
		b:true
}
im.src='img/bg.png';

var cur=[];
var bool=true;//玩家开始下棋
var ju=null;

var curx,cury,follx,folly;

im.onload=function(){
	initcan();	
}
window.onload=function(){
	ju=new judge();
	ju.winsinit();
	board.onclick=oncli;
	btn.onclick=function(){
		txt.clearRect(0,0,450,450);
		initcan();
		ju.winsinit();
	}
	bac.onclick=function(){
		txt.clearRect(curx*30-15,cury*30-15,30,30);
		txt.clearRect(follx*30-15,folly*30-15,30,30);
		console.log('back');
	}
	

}

var lines=function(){
	for(var i=0;i<16;i++){
			txtbg.strokeStyle='#777';
			txtbg.beginPath();
			txtbg.moveTo(i*30, 0);
			txtbg.lineTo(i*30, 450);
			txtbg.closePath();
			txtbg.stroke();
	}
	for(var j=0;j<16;j++){
			txtbg.strokeStyle='#777';
			txtbg.beginPath();
			txtbg.moveTo(0,j*30);
			txtbg.lineTo(450,j*30);
			txtbg.closePath();
			txtbg.stroke();
    }
}//lines
var circle=function(x,y,bool){
	x*=30;
	y*=30;
	var gra=txt.createRadialGradient(x+1,y,2,x,y,8);
	if(bool){
		gra.addColorStop(0,'#d1d1d1');
		gra.addColorStop(1,'#000');
	}else{
		gra.addColorStop(0,'#e1e1e1');
		gra.addColorStop(1,'#fff');
	}
	
	txt.fillStyle=gra;
	txt.beginPath();
	txt.arc(x, y, 12, 0, 2*Math.PI);
	txt.closePath();
	txt.fill();
}//circle
var oncli=function(e){
	console.log('点击');
	var e=e||window.event;
	console.log(e);
	curx=e.offsetX;
	cury=e.offsetY;
	console.log(curx+':'+cury);
	curx=Math.floor(curx/30);
	cury=Math.floor(cury/30);
	console.log(curx+':'+cury);
	if(bool){
		circle(curx,cury,bool);
		ju.add(curx, cury, bool);
	}
//	pac.b=bool;
//	pac.x=curx;
//	pac.y=cury;
	bool=!bool;
	follx=0;
	folly=0;
	follx=ju.foll().x;
	folly=ju.foll().y;
	    circle(follx,folly,bool);
	    ju.add(follx, folly, bool);
	    bool=!bool;	
}
var initcan=function(){
	txtbg.drawImage(im,0,0,450,450);
	console.log(im);
	lines();
}