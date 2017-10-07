var megamenu = [
	{
		name: 'This is Style 1',
		style: '1',
		status: 'hide',
		content: [
			'Male Wellness',
			'Female Wellness',
			'Child Wellness',
			'Good Health',
			'Aesthetic & Anti-Aging',
			'International Medical Services',
			'Dental Care',
			'Internal Medicines',
			'Recovery & Rehabilitation',
			'Surgery',
			'Mother & Child',
			'Bone & Joint',
			'GI & Liver',
			'EYE & ENT',
			'Chest & Respiratory system',
			'Emergency & Referral',
			'Geriatric & Rehabilitation'
		]
	},
	{
		name: 'This is Style 2',
		style: '2',
		status: 'show',
		content: [
			{
				title: 'Duis eu consequat justo, ac imperdiet lacus.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl orci, venenatis id tempus qui.'
			},
			{
				title: 'Duis eu consequat justo, ac imperdiet lacus.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl orci, venenatis id tempus qui.'
			},
			{
				title: 'Duis eu consequat justo, ac imperdiet lacus.',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisl orci, venenatis id tempus qui.'
			}
		]
	}
]

$(document).ready(function(){
	$("#megamenu").hide();
	// $("#megamenu").mouseleave(function(){
	// 	$("#megamenu").hide();
	// });
    $("#navMenuBox").click(function(){
        $("#megamenu").fadeIn();
    });
    $("#closeMegamenu").click(function(){
        $("#megamenu").fadeOut();
    });

    $.each(megamenu, function( index, value ) {
		$(".selectorMegamenu" + index).hide();
		$(".Megamenu" + index).hover(function(){
    		$(".selectorMegamenu" + index).show();
		});
		$(".Megamenu" + index).mouseleave(function(){
    		$(".selectorMegamenu" + index).hide();
		});
		$(".selectorMegamenu" + index).hover(function(){
    		$(".selectorMegamenu" + index).show();
		});
		$(".selectorMegamenu" + index).mouseleave(function(){
    		$(".selectorMegamenu" + index).hide();
		});
	});
});

for (var i=0; i < megamenu.length; i++)
{
	var menuLv1Box = document.createElement('div');
	var menuLV1 = 'Megamenu'+i;
	menuLv1Box.className = 'box uppercase TitSB '+menuLV1;
	menuLv1Box.innerHTML = "<div class='filter t2'></div>"
				+ "<img src='../../assets/icon/arrow-right-blue.svg' class='arrowRight t2'>"
				+ megamenu[i].name;
	document.getElementById("menuLV1").appendChild(menuLv1Box);

	if (megamenu[i].style === '1') {
		var menuLv2Box = document.createElement('div');
		var selector = 'selectorMegamenu'+i;
		menuLv2Box.className = 'style1 '+selector;
		var menuLv2BoxData = '<div class="flex1">';
		for (var j=0; j<megamenu[i].content.length; j++) {
			menuLv2BoxData += "<a href='#'>"
							+ "<div class='box TitSB t1'>"
								+ megamenu[i].content[j]
							+"</div>"
							+"</a>";
			if (j===9) { menuLv2BoxData += '</div><div class="flex2">' }
		}
		menuLv2BoxData += '</div>';
		menuLv2Box.innerHTML = menuLv2BoxData;
		document.getElementById("menuLV2").appendChild(menuLv2Box);
		menuLv2BoxData = ''

	} else if (megamenu[i].style === '2') {
		var menuLv2Box = document.createElement('div');
		var selector = 'selectorMegamenu'+i;
		menuLv2Box.className = 'style2 '+selector;
		for (var j=0; j<megamenu[i].content.length; j++) {
			if (megamenu[i].content.length - j !== 0) {
				menuLv2BoxData += "<div class='box borderRightDash'>"
			} else {
				menuLv2BoxData += "<div class='box'>"
			}
			menuLv2BoxData += "<h2 class='TitB'>"
								+ megamenu[i].content[j]['title']
							+"</h2>"
							+"<div class='description TitL'>"
								+ megamenu[i].content[j]['description']
							+"</div>"
							+"<a href='#'>"
								+"<div class='button TitB t2'>"
									+"Read more "
									+"<i class='fa fa-arrow-circle-right' aria-hidden='true'></i>"
								+"</div>"
							+"</a>";
			menuLv2BoxData += "</div>"
		}
		menuLv2Box.innerHTML = menuLv2BoxData;
		document.getElementById("menuLV2").appendChild(menuLv2Box);
		menuLv2BoxData = ''
	}
}


$(document).ready(function(){
	$("#resMegamenu").hide();
	$("#hideResMegamenu").hide();

	$("#showResMegamenu").click(function(){
	    $("#resMegamenu").fadeIn();
	    $("#showResMegamenu").hide();
	    $("#hideResMegamenu").show();
	});

	$("#hideResMegamenu").click(function(){
	    $("#resMegamenu").fadeOut();
	    $("#showResMegamenu").show();
	    $("#hideResMegamenu").hide();
	});

	$("#closeBottomResNav").click(function(){
	    $("#resMegamenu").fadeOut();
	    $("#showResMegamenu").show();
	    $("#hideResMegamenu").hide();
	});

});

var resMegamenu = [
	{
		name: 'Centers & Clinics'
	},
	{
		name: 'Patient Services'
	},
	{
		name: 'Health Expert'
	}
]

$(document).ready(function(){
	$.each(resMegamenu, function( index, value ) {
		$("#mobileNavExpand" + (index+1)).hide();

		$("#mobileNavDropdown" + (index+1)).click(function(){
		    $("#mobileNavExpand" + (index+1)).show();
		    $("#mobileNavDropdown" + (index+1)).hide();
		});

		$("#mobileNavExpand" + (index+1)).click(function(){
		    $("#mobileNavExpand" + (index+1)).hide();
		    $("#mobileNavDropdown" + (index+1)).show();
		});
	});
});
