$(document).ready(()=>{
	$("#para1").hover(()=>{
		$("#para1").addClass("underline")
		$("#para2").removeClass("underline")
		$("#para3").removeClass("underline")
	});
	$("#para2").hover(()=>{
		$("#para2").addClass("underline")
		$("#para3").removeClass("underline")
		$("#para1").removeClass("underline")
	});
	$("#para3").hover(()=>{
		$("#para3").addClass("underline")
		$("#para2").removeClass("underline")
		$("#para1").removeClass("underline")
	});

	$("#para1").click(() =>{
		$("p1").show()
		$("p2").hide()
		$("p3").hide()
	});

	$("#para2").click(() =>{
		$("p1").hide()
		$("p3").hide()
		$("p2").show()
	});
	$("#para3").click(() =>{
		$("p1").hide()
		$("p2").hide()
		$("p3").show()
	});
})