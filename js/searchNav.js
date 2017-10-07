$(document).ready(function(){
	$("#searchSection").hide();
	$("#searchNavClose").hide();

	$("#searchNav").click(function(){
	    $("#searchSection").show();
	    $("#navigationMenu").hide();
	    $("#searchNav").hide();
	    $("#searchNavClose").show();
	});

	$("#searchNavClose").click(function(){
	    $("#searchSection").hide();
	    $("#navigationMenu").show();
	    $("#searchNavClose").hide();
	    $("#searchNav").show();
	});

});
