$(function  () {
	$(".xq_tabs_out li").bind("click", function(){
		var class_name=$(this)[0].className;
		if (class_name!="xq_tabs_activ") {
			var parent=$(this).parent().children();
			var div=$(this).parent().next(".xq_tabs_content");
			var content=div.children();
			var lab=$(this).attr("lab");
			for (var i = 0; i < parent.length; i++) {
				parent[i].className="";
				if ($(content[i]).attr("lab")!=lab) {
					content[i].style.display="none";
				}else{
					content[i].style.display="block";
				};
			};
			if (lab=="qiang") {
				$(".tab_btn").show();
			}else{
				$(".tab_btn").hide();
			}
			$(this).addClass("xq_tabs_activ");
		};
	});
})