var index;
function publish () {
	index=layer.open({
		type:1,
		title:['发布','background:#fff;border-bottom:0px;text-align:center;'],
		area:["480px","210px"],
		content:'<div class="publish textcen"><div class="imgbag fl"><div class="arc macen imgbg"><div id="localimg"></div></div><p>本地相册</p><p>选择商品照片</p></div><div class="imgbag fl"><div class="arc macen imgbg"><div id="goodm"></div></div><p>商品管理</p><p>待上传商品</p></div><div class="imgbag fl"><div class="arc macen imgbg"><div id="mobm"></div></div><p>从模板创建</p></div><div class="imgbag fl"><div class="arc macen imgbg"><div id="gfpz"></div></div><p>官方专场</p><p>拍品征集</p></div></div>'
	});
}
function setmsg () {
	layer.open({
		type:1,
		title:['提醒设置','text-align:center;background:rgba(0,0,0,0)'],
		area:['505px','255px'],
		content:'<div class="setmsg macen"><div class="outmsg">竞价出局提醒<span class="xqcheck fr"></span></div><div class="timemsg">距拍卖结束前<input type="number">分钟提醒<span class="xqcheck fr"></span></div></div>',
		btn:['取消','确定'],
		yes: function(index, layero){
			layer.close(index);//关闭当前窗口
		    console.log(index+"按钮取消");
		},
		btn2: function(index, layero){
		    console.log(index+"按钮确定"+layero);
		    return false;//屏蔽按钮关闭
		}
	});
	$(".xqcheck").on('click',function(){
		var flag=$(this).hasClass("true");
		if (!flag) {
			$(this).css({border:'0px',width:'26px',height:'26px',background:'url("../icon/icon_check.png") no-repeat #fff'}).addClass('true');
		}else{
			$(this).css({border:'1px solid #e3e3e3',width:'24px',height:'24px',background:'#fff'}).removeClass("true");
		}
	});
}