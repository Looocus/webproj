window.onload = function() {
	var box = document.getElementsByClassName('sliderImg')[0];
	var imgs = box.getElementsByTagName('img');
	//获取单张img宽度
	var imgWidth = imgs[0].offsetWidth;
	var exposeWidth = imgWidth * 0.6;
	//console.log(imgWidth);
	//设置box总宽度
	boxWidth = imgWidth + (imgs.length -1) * exposeWidth;
	box.style.width = boxWidth + 'px';

	function setPos () {
		for (var i = 1, len = imgs.length; i < len; i++) {
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	};
	setPos();
	//计算展开距离
	var tranForm = imgWidth * 0.4;
	//每张图片展开
	for (var i = 0, len = imgs.length; i < len; i++) {
		//console.log(i);
		(function(i) {
			imgs[i].onmouseover = function() {
				setPos();
				for (var j = 1; j <= i; j++) {
					(function frame (j) {
						var moveDistance = parseInt(imgs[j].style.left, 10) - tranForm;
						imgs[j].style.left = moveDistance + 'px';
					})(j);
				}
			};
		})(i);
	}
}