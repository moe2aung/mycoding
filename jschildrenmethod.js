
// Getting the child of li m1
var getli=document.getElementsByTagName('li');
	getli=document.getElementsByClassName("collection-item");
	getli=document.querySelector('li');
	getli=document.querySelectorAll('li');
	getli=document.querySelectorAll(".collection-item");
	getli=document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(getli);

// Getting the child of ul m2
// parent(ul)
var getul=document.querySelector('ul');
// children(li)
var child=getul.children;
// children of children
//  a 
child=getul.children[0].children;
// i
child=getul.children[0].children[0].children;
// i's classname value
child=getul.children[0].children[0].children[0].className;
// get the first child
child=getul.firstElementChild;
// get the last child
child=getul.lastElementChild;
// count the number of child
child=getul.children.length;
child=getul.childElementCount;
// console.log(child);

// Get the parent
var parent=getli[0].parentElement;
// console.log(parent);

 // Get the next sibling Element
 var sibling=getli[0].nextElementSibling;
 	 siblign=getli[0].nextElementSibling.nextElementSibling;

 // Get the previous sibling Element
 	sibling=getli[0].nextElementSibling.nextElementSibling.previousElementSibling;
 // console.log(sibling);


