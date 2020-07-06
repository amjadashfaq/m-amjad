
/* ================ slide nav menu code =============== */

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* ==================================================== */


/* =============== Jumbotron layout for mobile settings ========================== */

			/* ================================= for mobile layout ===============================*/

function myFun1() {
  var element = document.getElementById("intro");
  var tmp = document.getElementById("intro").className;
  if(tmp == "col-6"){
  	element.classList.remove("col-6");
  }
  element.classList.add("col-12");
}

			/* ================================= for laptop layout ===============================*/

 function myFun2() {
  var element = document.getElementById("intro");
  var tmp = document.getElementById("intro").className;
  if(tmp == "col-12"){
  	element.classList.remove("col-12");
  }
  element.classList.add("col-6");
}

/* ================================================================================ */

/* ======== adding or removing classes for mobile devices of tabs ============= */ 
function myFunction(x) {
 	if (x.matches) { // If media query matches
		myFun1();
	} else {
		myFun2();
	}
}

var x = window.matchMedia("(max-width: 991px)");		// measuring media width
myFunction(x); 		// call function first
x.addListener(myFunction);		// call function on state change also
