$(document).on('ready', function() {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  });
});

$(document).on('ready', function() {

	$("#healthExpertCon").hide();

	$("#healthExpert").click(function(){
		$("#switchMenu1").last().addClass("active");
		$("#healthExpert").last().removeClass("text-blue");
		$("#healthExpert").last().addClass("text-red");
		$("#CentersOfExcellence").last().removeClass("text-red");
		$("#CentersOfExcellence").last().addClass("text-blue");
		$("#healthExpertCon").show();
		$("#CentersOfExcellenceCon").hide();
	});

	$("#CentersOfExcellence").click(function(){
		$("#switchMenu1").last().removeClass("active");
		$("#healthExpert").last().addClass("text-blue");
		$("#healthExpert").last().removeClass("text-red");
		$("#CentersOfExcellence").last().addClass("text-red");
		$("#CentersOfExcellence").last().removeClass("text-blue");
		$("#healthExpertCon").hide();
		$("#CentersOfExcellenceCon").show();
	});

});