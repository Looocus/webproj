window.onload = function(){
	var canvas = document.getElementById("bcanvas");
	var context = canvas.getContext("2d");
	var Img = new Image();
	Img.src = "./static/img/trees.jpg";
	Img.onload=function(){
		//(窗口宽度/图片宽度)向上取余 = n;
		var n = Math.ceil(window.innerWidth/Img.width);
		document.getElementById("canvasblack").style.width = Img.width*n + "px";
		//console.log(window.innerHeight,window.innerWidth);
		canvas.width = Img.width*n;
		canvas.height = Img.height;
		canvaswidth = canvas.width;
		canvasheight = canvas.height;
		var x = 0;
		var imgwidth = Img.width;
		function act(){
			context.clearRect(0,0,canvaswidth,canvasheight);
			//预渲染2n倍宽度的图片
			for (var i=0;i<=2*n;i++){
				context.drawImage(Img,Img.width*i+x,0);
			}
			x-=1;
			if(Math.abs(x)>canvaswidth){
				x=0;
			}
			window.requestAnimationFrame(act);
	    };
		act();
	};
};

