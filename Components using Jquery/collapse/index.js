$(document).ready(()=>{
	$("#data1").hide();
	$("#data2").hide();
	$("#data3").hide();
	
	
	$("#item1").click(function(){
		$("#data1").toggle(80);
	
		
	});
	
	$("#item2").click(function(){
		$("#data2").toggle(80);
		
	});
	
	$("#item3").click(function(){
		$("#data3").toggle(80);
		
	});
	
	$("#item1").hover(function(){
		$(this).addClass("hoverItem");
	} ,function(){
		$(this).removeClass("hoverItem");
})	
	$("#item2").hover(function(){
		$(this).addClass("hoverItem");
	} ,function(){
		$(this).removeClass("hoverItem");
})	
	$("#item3").hover(function(){
		$(this).addClass("hoverItem");
	} ,function(){
		$(this).removeClass("hoverItem");
		})	
		
	
	


	
	
})