// Document
var val;
val=document;
val=document.doctype;
val=document.head;
val=document.body;
// console.log(val);

// Form
var val;
val=document.forms;
val=document.forms[0].id;
val=document.forms[0].action;
val=document.forms[0].method;
// console.log(val);

// link(absolute link)
var val;
val=document.links;
val=document.links[0].id;
val=document.links[4].href;
val=document.links[4].className;// String
val=document.links[4].classList;// DOMTokenList
// console.log(val);

// Image
// var val;
// val=document.images;
// val=document.images[0];
// val=document.images[0].src;
// val=document.images[0].className;
// val=document.images[0].classList;
// // val=document.images[0].getAttribute("src");
// val=document.images[0].getAttribute("abc");
// console.log(val);

// Recommended Mostly used

// id
var val=document.getElementById('title1');
// val.innerText="New";
// val.style.background="red";
// console.log(val);

// getElementsByClassName()(it is a method)
// .className  and .classList(it is a property used to get and set value)
var val=document.getElementsByClassName('title1');
// val[2].innerText="new";
// val[1].style.background="red";
// val=val[0].className;

//it works on document
// val[0].classList.add("title2"); 
// val[0].classList.remove("title2");

// console.log(val);

// querySelector()
var val=document.querySelector('li');
	val=document.querySelector("#title1");
	val=document.querySelector(".collection");
	val=document.querySelector(".collection .collection-item");
// console.log(val);

// querySelectorAll();
var val=document.querySelectorAll('li');
	val=document.querySelectorAll("#title1");
	val=document.querySelectorAll(".collection");
	val=document.querySelector(".collection .collection-item");
// console.log(val);


// get the first li tag of the ul
var listitems=document.querySelector('ul .collection-item');
// console.log(listitems);


// get the all li tags of the ul
var listitems=document.querySelector('ul').getElementsByClassName('collection-item');
for(let x=0;x<listitems.length;x++){
	// console.log(listitems);
}


// looping

// HTMLCollection needs to covert to pure array(Array.from())
const items=document.getElementsByClassName("collection-item");
// console.log(items);

arritems=Array.from(items);
arritems.forEach(function(arritem){
	// console.log(arritem);
})

// NodeList is a pure array
const liodds=document.querySelectorAll('li:nth-of-type(odd)');
// console.log(liodds);

const lievens=document.querySelectorAll('li:nth-of-type(even)');
// console.log(lievens);

	liodds.forEach(function(liodd){
		liodd.style.background="gold";
	});

	for(let i=0;i<lievens.length;i++){
		lievens[i].style.background="orange";

	}




