$("document").ready(function(){
	$(".nav-item").click(function(){
		$(".nav-item").removeClass("border-red");
		$(this).addClass("border-red");
	});
});