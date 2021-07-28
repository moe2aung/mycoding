// addEventListener(type,function())

// Method1
var btn=document.querySelector("#delbtn");
	btn.addEventListener('click',function(e){
		// console.log(e);
	})

// Method2

var btn=document.getElementById("delbtn");
	// btn.addEventListener('click',myclick);

function myclick(e){
	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);
	// console.log(e.target.innerText="Deleted");

	// Find Event Type
	var val=e.type;
	// console.log(val);

	// Coordinate Event
	// Give value according window
	var x=e.clientX;
	var y=e.clientY;
	// console.log(x,y);

	// Give value according to element
	var x=e.offsetX;
	var y=e.offsetY;
	// console.log(x,y);

	e.preventDefault();

}


let heading=document.querySelector('.title1');
	// heading.addEventListener('click',runevent);

function runevent(e){
	console.log(`Event type = ${e.type}`);
	heading.innerText=`MoveX:${e.offsetX} MoveY :${e.offsetY}`;
	document.body.style.background=`rgba(${e.offsetX},${e.offsetY},0.3)`;
}


// Mouse Event

var btn=document.querySelector(".delbtn");

// click
	// btn.addEventListener("click",mouseevent);

// double click
	// btn.addEventListener('dblclick',mouseevent);

// mouse down
	// btn.addEventListener('mousedown',mouseevent);

// mouse up
	// btn.addEventListener('mouseup',mouseevent);

var card=document.querySelector(".card");

// mouseenter
	// card.addEventListener('mouseenter',mouseevent);

// mouseleave
	// card.addEventListener('mouseleave',mouseevent);

// Mousemove
 	// card.addEventListener('mousemove',mouseevent);



function mouseevent(e){
	// console.log(`Event Type = ${e.type}`);
}


// Input Event
var form=document.querySelector('form');
// console.log(form);
var text=document.querySelector(".new-tasks");
// console.log(text);

// Get value by submit
// form.addEventListener('submit',runevent);

// Get vlaue by typing

// 1 Keydown
// text.addEventListener('keydown',runevent);

// 2 keyup
// text.addEventListener("keyup",runevent);

// 3 keypress
// text.addEventListener("keypress",runevent);

// 4 focus
// text.addEventListener("focus",runevent);

// 5 blur
// text.addEventListener("blur",runevent);

// 6 input(recomended)
// text.addEventListener("input",runevent);

// 7 cut
// text.addEventListener("cut",runevent);

// 8 paste
// text.addEventListener("paste",runevent);

function runevent(e){
	// console.log("i am working");
	// console.log(e.type);
	// console.log(text.value);
	e.preventDefault();
};


