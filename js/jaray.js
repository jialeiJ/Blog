/*实现页面滚动监听*/
$(function(){
	$(window).scroll(function(){
		/*滚动距离顶部的距离大于等于212px时*/
		if($(window).scrollTop() >= 225){
			$("#post-directory-module").css({"top": 80+"px"});
		}else{
			$("#post-directory-module").css({"top": 325-$(window).scrollTop()+"px"});
		}
	});
});
/*实现页面header滚动监听*/
$(function(){
	$(window).scroll(function(){
		/*滚动距离顶部的距离大于等于212px时*/
		if($(window).scrollTop() >=48){
			$("#header").css({"top":"0px"}).addClass("navbar-fixed-top");
		}else{
			$("#header").css({"top": 48-$(window).scrollTop()+"px"});
		}
	});
});
/*设置锚点平滑过渡定位*/
function location_point(id){
	/*根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减80px(根据需要自由设置)*/
	$("HTML,body").animate({scrollTop:($($(this).attr("href")).offset().top-80)},500);
	/*$("HTML,body").animate({scrollTop:$("#"+id).offset().top-80},500);*/
}

$(function(){
	$("dl a").click(function(){
		/*根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减80px(根据需要自由设置)*/
		$("HTML,body").animate({scrollTop:($($(this).attr("hre")).offset().top-90)},150);
	})
});