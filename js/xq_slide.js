var curindex=0;
var curleft=0;
var liwidth=$(".xq_imgbag li").width();
var length=$(".xq_imgbag li").length;
$(function(){
	$(".xq_content_right").append('<ul class="xq_smimg"></ul>');
	$(".xq_imgbag").css({'width':length*liwidth+'px'});
	$(".xq_smimg").html($(".xq_imgbag").html());
	$(".xq_smimg li").on('click',function(){
		curindex=$(".xq_smimg li").index(this);
		curleft=-(curindex*liwidth);
		$(".xq_smimg li").css({'border':'0px','width':'75px',height:'75px'});
		$(".xq_smimg li").eq(curindex).css({'border':'1px solid #f00','width':'73px',height:'73px'});
		$(".xq_imgbag").css({'left':curleft+'px'});
	});
	$(".xq_prev").on('click',function(){
		if (curleft<0 && curindex>0) {
			--curindex;
			curleft=-(liwidth*curindex);
			$(".xq_smimg li").css({'border':'0px','width':'75px',height:'75px'});
			$(".xq_smimg li").eq(curindex).css({'border':'1px solid #f00','width':'73px',height:'73px'});
		};
		$(".xq_imgbag").css({'left':curleft+'px'});
	});
	$(".xq_slide_close").on('click',function(){
		$(".xq_slide_out").fadeOut(function(){
			curindex=0;
			curleft=0;
			$(".xq_imgbag").css({'left':'0px'});
			$(".xq_smimg li").css({'border':'0px','width':'75px',height:'75px'});
		});
	});
	$(".xq_next").on('click',function(){
		if (curleft>(length-1)*(-liwidth) && curindex<(length-1)){
			++curindex;
			curleft=-(liwidth*curindex);
			$(".xq_smimg li").css({'border':'0px','width':'75px',height:'75px'});
			$(".xq_smimg li").eq(curindex).css({'border':'1px solid #f00','width':'73px',height:'73px'});
		};
		$(".xq_imgbag").css({'left':curleft+'px'});
	});
});
function  xq_slide(curindexs) {
	curindex=curindexs;
	curleft=-(curindex*liwidth);
	$(".xq_slide_out").fadeIn();
	$(".xq_smimg li").eq(curindexs).css({'border':'1px solid #f00','width':'73px',height:'73px'});
	$(".xq_imgbag").css({'left':curleft+'px'});
}