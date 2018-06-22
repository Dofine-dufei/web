$(function(){
//	获取屏幕的宽高
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
//	不是jquery原生自带的,是引入的插件
//	手指触屏滑动事件

	var nowpage=0;
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
//			滑动功能
//			console.log(direction);
			if(direction=="up"){
				nowpage++;
				if(nowpage==4){
					nowpage=0;
				}				
			}
			else if(direction=="down"){
				nowpage--;
				if(nowpage==-1){
					nowpage=3;
				}
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){


//				当滑动到第二页时的淡入效果
				if(nowpage==1){
				$(".page2-Bg").fadeIn(400,function(){
				$(".page2-Farm").fadeIn(1500,function(){
				$(".page2-IT").fadeIn(1500)
				})
	});
				}
				
				
//				当滑动到第三页时的效果
				if(nowpage==2){
//				$(".page3-earlyTitle").fadeIn(2000);
//				$(".page3-BusTitle").fadeIn(2000);
				$(".page3-bus").animate({left:"-100%"},{duration:2000})
				$(".page3-BusAvatar").animate({right:"30%"},{duration:2500,complete:function(){
					$(".page3-BusStation").fadeOut(400);
					$(".page3-bus").fadeOut(400);
					$(".page3-BusAvatar").fadeOut(400);
					$(".page3-BusTitle").fadeOut(400);
					$(".page3-earlyTitle").fadeOut(400);
					$(".page3-earlyBuilding").fadeOut(400,function(){
						$(".page3-Avatar").fadeIn(500);
						$(".page3-wall").fadeIn(500,function(){
							$(".page3-Space").animate({width:"25%"},{duration:400,complete:function(){
								$(".page3-where").animate({width:"50%"},{duration:400})
							}})
						});
					});
				}})
				}
				
				
				
			}})
		}
	});
//	animate({要做的动画效果},{duartion:动画时长,complete:动画执行完了要做的事})
	$(".page1-Building").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"70%"},{duration:1000})
	});
	
	
	$(".page4-light").click(function(){
		$(this).attr("src","img/lightOn.png")
		$(".page4-bg").fadeOut("slow")
		$(".page4-title").fadeOut("slow")
		$(".page4-guide").fadeOut("slow",function(){
			$(".page4-bg2").fadeIn("slow");
			$(".page4-txt").fadeIn("slow")
		})
		
	})
	
	$(".musicBtn").click(function(){
		var music=$("#music")[0];
		//document.getElementById("#music")
		if(music.paused){
			music.play();
			$(this).attr("src","img/musicBtn.png")
		}else{
			music.pause();
			$(this).attr("src","img/musicBtnOff.png")
		}
	})
	
})

//$(document).ready(function(){
//	
//})
//等文当完成之后再执行js代码