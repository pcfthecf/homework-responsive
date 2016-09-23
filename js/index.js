$(document).ready(function(){
	//everything in here, will only run once the elements have loaded 
	console.log("jQuery is up and running");

	//HIDE ALL DETAILS SECTIONS
	$(".details").hide();

//USE event.preventDefault()
$(".prj-sheet").click(openProject);

function openProject(){
	event.preventDefault();
	alert("Not ready yet :)");
}

//CLICK READ MORE, PROJECT #001
$("#read-001").click(showDetails1);

//REVEAL DETAILS FOR PROJECT #001
function showDetails1(){
	
	$("#details-001").slideDown();
	$("#read-001").hide();
}

//CLICK READ LESS, PROJECT #001
$("#less-001").click(hideDetails1);

//HIDE DETAILS FOR PROJECT #001
function hideDetails1(){
	$("#details-001").hide();
	$("#read-001").show();
}

//CLICK READ MORE, PROJECT #002
$("#read-002").click(showDetails2);

//REVEAL DETAILS FOR PROJECT #002
function showDetails2(){
	$("#details-002").slideDown();
	$("#read-002").hide();
}

//CLICK READ LESS, PROJECT #002
$("#less-002").click(hideDetails2);

//HIDE DETAILS FOR PROJECT #002
function hideDetails2(){
	$("#details-002").hide();
	$("#read-002").show();
}

//CLICK READ MORE, PROJECT #003
$("#read-003").click(showDetails3);

//REVEAL DETAILS FOR PROJECT #003
function showDetails3(){
	$("#details-003").slideDown();
	$("#read-003").hide();
}

//CLICK READ LESS, PROJECT #003
$("#less-003").click(hideDetails3);

//HIDE DETAILS FOR PROJECT #003
function hideDetails3(){
	$("#details-003").hide();
	$("#read-003").show();
}
})