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

	$(".portfolioButton").click(function(){
		type = $(this).data("type");
		$(".portfolioButton").removeClass("selected");
		$(this).addClass("selected");
		$(".check-type-area").css({"display" : "block"});
		if(type !== "tudo"){
			$(".check-type-area").each(function(){
				if($(this).data("tecnology") !== type){
					$(this).css({"display" : "none"});
				}
			});
		}else{
			$(".check-type-area").css({"display" : "block"});
		}
	});
});