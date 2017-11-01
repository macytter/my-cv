/*
FILE NAME: index.js
WRITTEN BY: Maren Collier Ytterbø
WHEN: October 2017
PURPOSE: Read more and show less for projects in Education-section
*/

//JavaScript for "Read More"-buttons
addEventListener("load", function() {
  setup();
  document.getElementById("project1btn").addEventListener("click", project1ShowMore);
  document.getElementById("project2btn").addEventListener("click", project2ShowMore);
  document.getElementById("project3btn").addEventListener("click", project3ShowMore);
  document.getElementById("project4btn").addEventListener("click", project4ShowMore);
  document.getElementById("project5btn").addEventListener("click", project5ShowMore);
});

//Sets preview-text for the projects
var pro1base =
"For our bachelor's project, each group was assigned to a real customer to create \
a solution based on demands and wishes from the customer. Our customer wanted us \
to make a quiz-application where two people in the company could play against each \
other in subjects related to their work."
var pro2base =
"How about revolutionizing the car industry? That was the assignment \
presented to us in the class Product Development."
var pro3base =
"The goal of this project was to create a company website, either for \
a real or a made-up company. The page had to contain at least two \
javascript elements, and we also had to perform a user test with several \
users."
var pro4base =
"In the first full-semester project of of the Informatics-degree, a group \
of eight had to develop a new ordering system for the cottages belonging \
to NTNU, complete with database storage and interface."
var pro5base =
"In my Master Thesis, I examined four short stories, written by four different \
authors in different parts of history. I wanted to see how, and if the \
gothic genre had changed from Edgar Allan Poe's time to the present."

function setup() {
  var pro1base = document.getElementById("project1").innerHTML;
  var pro2base = document.getElementById("project2").innerHTML;
  var pro3base = document.getElementById("project3").innerHTML;
  var pro4base = document.getElementById("project4").innerHTML;
  var pro5base = document.getElementById("project5").innerHTML;
}

function project1ShowMore() {
  document.getElementById("project1btnspot").innerHTML = "<button id='project1btn'>Show less</button>";
  document.getElementById("project1").innerHTML += "<br /> Our project was buildt with React, Meteor and node.js";
  document.getElementById("project1btn").addEventListener("click", reset1);
}

function project2ShowMore() {
  document.getElementById("project2btnspot").innerHTML = "<button id='project2btn'>Show less</button>";
  document.getElementById("project2").innerHTML += "<br /> <br /> More description to come";
  document.getElementById("project2btn").addEventListener("click", reset2);
}

function project3ShowMore() {
  document.getElementById("project3btnspot").innerHTML = "<button id='project3btn'>Show less</button>";
  document.getElementById("project3").innerHTML += "<br /> <br /> More description to come";
  document.getElementById("project3btn").addEventListener("click", reset3);
}

function project4ShowMore() {
  document.getElementById("project4btnspot").innerHTML = "<button id='project4btn'>Show less</button>";
  document.getElementById("project4").innerHTML += "<br /> <br /> More description to come";
  document.getElementById("project4btn").addEventListener("click", reset4);
}

function project5ShowMore() {
  document.getElementById("project5btnspot").innerHTML = "<button id='project5btn'>Show less</button>";
  document.getElementById("project5").innerHTML += "<br /> <br /> More description to come";
  document.getElementById("project5btn").addEventListener("click", reset5);
}

function reset1() {
	if(pro1base != undefined) {
		document.getElementById("project1").innerHTML = pro1base;
	} else {
		document.getElementById("project1").innerHTML = "";
	}
	document.getElementById("project1btnspot").innerHTML = "<button id='project1btn'>Read more</button>";
	document.getElementById("project1btn").addEventListener("click", project1ShowMore);
}

function reset2() {
	if(pro2base != undefined) {
		document.getElementById("project2").innerHTML = pro2base;
	} else {
		document.getElementById("project2").innerHTML = "";
	}
	document.getElementById("project2btnspot").innerHTML = "<button id='project2btn'>Read more</button>";
	document.getElementById("project2btn").addEventListener("click", project2ShowMore);
}

function reset3() {
	if(pro3base != undefined) {
		document.getElementById("project3").innerHTML = pro3base;
	} else {
		document.getElementById("project3").innerHTML = "";
	}
	document.getElementById("project3btnspot").innerHTML = "<button id='project3btn'>Read more</button>";
	document.getElementById("project3btn").addEventListener("click", project3ShowMore);
}

function reset4() {
	if(pro4base != undefined) {
		document.getElementById("project4").innerHTML = pro4base;
	} else {
		document.getElementById("project4").innerHTML = "";
	}
	document.getElementById("project4btnspot").innerHTML = "<button id='project4btn'>Read more</button>";
	document.getElementById("project4btn").addEventListener("click", project4ShowMore);
}

function reset5() {
	if(pro5base != undefined) {
		document.getElementById("project5").innerHTML = pro5base;
	} else {
		document.getElementById("project5").innerHTML = "";
	}
	document.getElementById("project5btnspot").innerHTML = "<button id='project5btn'>Read more</button>";
	document.getElementById("project5btn").addEventListener("click", project5ShowMore);
}



/*
var mn = $(".nav-bar");

$(window).scroll(function () {
  if( $(this).scrollTop() > 400) {
    mn.addClass("nav-bar-scrolled");
  } else {
    mn.removeClass("nav-bar-scrolled");
  }
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    console.log("Going down!");
  } else {
    console.log("WEEEEE!");
  }
}
*/
