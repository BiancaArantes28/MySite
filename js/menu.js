$("document").ready(function(){
	$(".nav-item").click(function(){
		$(".nav-item").removeClass("border-red");
		$(this).addClass("border-red");
	});
	$(".skillButton").click(function(){
		type = $(this).data("type");
		$(".skillButton").removeClass("selected");
		$(this).addClass("selected");
		$(".check-type").css({"display" : "block"});
		if(type !== "tudo"){
			$(".check-type").each(function(){
				if($(this).data("tecnology") !== type){
					$(this).css({"display" : "none"});
				}
			});
		}else{
			$(".check-type").css({"display" : "block"});
		}
	});
});