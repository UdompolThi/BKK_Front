function searchCenter () {
	var input, filter, ul, li, a, i;
    input = document.getElementById('searchkeyupInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchkeyupUl");
    li = ul.getElementsByTagName('li');

    if (document.getElementById('searchkeyupInput').value.length > 0) {
    	document.getElementById('searchkeyupBox').style.display = 'block';
    } else {
    	document.getElementById('searchkeyupBox').style.display = 'none';
    }

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}