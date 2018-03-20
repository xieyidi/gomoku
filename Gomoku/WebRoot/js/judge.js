var judge=function(){
	this.wins=[];
	this.count=0;
	//--------2 wei------------
	//-------true/false-----------
	this.local=[];
	this.compute=[];
	this.chess=[];
	//-------true/false-----------
	this.score=[];
	this.cscore=[];
	//-------2 wei--------------
	this.mwin=[];
	this.cwin=[];
	
}
judge.prototype={
		winsinit:function(){
			for(var i=0;i<16;i++){
				this.wins[i]=[];
				for(var j=0;j<16;j++){
					this.wins[i][j]=[];
				}
			}//空三维
			this.count=0;
			for(var p=0;p<16;p++){
				for(var q=0;q<12;q++){
					for(var k=0;k<5;k++){
						this.wins[p][q+k][this.count]=true;					
					}
					this.count++;
				}
			}//shu
			for(var p=0;p<16;p++){
				for(var q=0;q<12;q++){
					for(var k=0;k<5;k++){
						this.wins[q+k][p][this.count]=true;					
					}
					this.count++;
				}
			}//heng
			for(var p=0;p<12;p++){
				for(var q=0;q<12;q++){
					for(var k=0;k<5;k++){
						this.wins[p+k][q+k][this.count]=true;					
					}
					this.count++;
				}
			}//xie
			for(var p=4;p<16;p++){
				for(var q=0;q<12;q++){
					for(var k=0;k<5;k++){
						this.wins[p-k][q+k][this.count]=true;	
						//console.log((p-k)+':'+(q+k));
					}
					this.count++;
				}
			}//fan xie
			for(var w=0;w<this.count;w++){
				this.mwin[w]=0;
				this.cwin[w]=0;
			}
			//console.log(this.count);
			for(var i=0;i<16;i++){
				this.local[i]=[];
				this.compute[i]=[];
				this.chess[i]=[];
				this.score[i]=[];
				this.cscore[i]=[];
				for(var j=0;j<16;j++){
					this.local[i][j]=false;
					this.compute[i][j]=false;
					this.chess[i][j]=false;
					this.score[i][j]=0;
					this.cscore[i][j]=0;
				}
				console.log('local'+this.local[i]);
			}
		},
		add:function(x,y,bool){
			if(bool){
				this.local[x][y]=true;
				this.chess[x][y]=true;
				for(var h=0;h<this.count;h++){
					var _single=0;
					for(var i=0;i<16;i++){
						for(var j=0;j<16;j++){
							if(this.local[i][j]==this.wins[i][j][h]){
								_single++;
							}
						}
					}
					this.mwin[h]=_single;
				}
			}else{
				this.compute[x][y]=true;
				this.chess[x][y]=true;
				for(var h=0;h<this.count;h++){
					var _single=0;
					for(var i=0;i<16;i++){
						for(var j=0;j<16;j++){
							if(this.local[i][j]==this.wins[i][j][h]){
								_single++;
							}
						}
					}
					this.cwin[h]=_single;
				}
			}
			//console.log('mwin::'+this.mwin);
		},//add
		foll:function(){
		    var max=0;
		    var pack={
		    		x:0,
		    		y:0	
		    }
		    var self=this;
			this.res();
			  for(var i=0;i<16;i++){
				  for(var j=0;j<16;j++){
					  if(!this.chess[i][j]){
					 for(var c=0;c<this.count;c++){
					  if(this.wins[i][j][c]){
						  switch(this.mwin[c]){//给玩家加分
						  case 1:this.score[i][j]+=100;
						         break;
						  case 2:this.score[i][j]+=500;
						         break;
						  case 3:this.score[i][j]+=1000;
						         break;
						  case 4:this.score[i][j]+=6000;
						         break;
						  case 5:self.over(true);
						         console.log('winner');
						         break;
						  default:break;}
						  switch(this.cwin[c]){//给计算机加分
						  case 1:this.cscore[i][j]+=80;
						         break;
						  case 2:this.cscore[i][j]+=100;
						         break;
						  case 3:this.cscore[i][j]+=200;
						         break;
						  case 4:this.cscore[i][j]+=1000;
						         break;
						  case 5:self.over(false);
						         console.log('lose');
						         break;
						  default:break;}
					 }}
					 if((this.score[i][j]>max)||(this.score[i][j]==max&&this.cscore[i][j]>this.cscore[pack.x][pack.y]))
					{    max=this.score[i][j];
						 pack.x=i;
						 pack.y=j;}
//					 if(this.cscore[i][j]>max)
//					{    max=this.cscore[i][j];
//						 pack.x=i;
//						 pack.y=j;}
				  }
				  }
			  }//local加分循环数组
			  for(var i=0;i<16;i++){
				  for(var j=0;j<16;j++){
					  
				  }
			  }//加分循环数组
			  console.log('score:'+this.score);
			  console.log('return:'+pack.x+':'+pack.y);
			  return pack;
		},//foll
		res:function(){
			for(var i=0;i<16;i++){
				this.score[i]=[];
				for(var j=0;j<16;j++){
					this.score[i][j]=0;
				}
			}
		},
		over:function(w){
			if(w)
			{
				alert('win!');}
			else{
				alert('fail!');
			}
		}//over
		
}