// Add the necessary code to wait for the DOM to load to make sure 
// that anything you manipulate in the DOM has loaded. You can do 
// this either using window.onload or adding an event listener
// for DOMContentLoaded.

// Replace the text "Change me" with "Hello World!"

document.addEventListener("DOMContentLoaded", function(){
    var header = document.getElementById("change_heading");
    header.innerText = "Hello world";
            
	// When a user hovers over one of the colored boxes 
	// change the text to display the color that is being hovered over.
	var selected = document.getElementsByTagName("span");

	var colors = document.getElementById("colors");
	colors.addEventListener("mouseover", function(event){
	    selected[0].innerText = event.target.className;
	})

	// Create a new div element

	var newDiv = document.createElement("div");
	colors.appendChild(newDiv);

	// Give your new div a class of purple and style it so that it has a background color of purple.

	newDiv.className = "purple";
	newDiv.style.backgroundColor = "purple"



	// var newDiv = document.createElement("div");
 //    newDiv.className = "purple";
 //    section.appendChild(newDiv);


 });


// var section = document.querySelector("section");
//     section.addEventListener("mouseover", function(event){
//         var selectedColor = document.querySelector('.selected');
//         selectedColor.innerText = event.target.className;
//     })