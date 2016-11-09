$(function() {
	//启动头部搜索选项卡标签
	$(".search ul li").bind('click',function(){
		$(this).parent().find("li").removeClass("active");
		$(this).addClass("active");
	});
	//开启导航条li标签单击跳转
	$(".nav .flp .wai").on('click',function () {
		var href=$(this).find("a").attr('href');
		if (href) {
			window.location.href=href;
		};
	});
	//开启个人中心左侧导航栏动画和切换效果
	$(".pnav li.pore").on('click',function () {
		$(".pnav li.pore").removeClass("navactive");
		var forname=$(this).addClass("navactive").attr("for");
		$(".pnav li[name="+forname+"]").slideToggle(200);
	});
	//开启选择按钮功能
	$(".xqcheck").on('click',function(){
		var flag=$(this).hasClass("true");
		if (!flag) {
			$(this).addClass('true').siblings(".xqcheck").removeClass("true");
		}else{
			$(this).removeClass("true").siblings(".xqcheck").addClass("true");
		}
	});
});