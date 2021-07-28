// Replacing element need to create new element and then find the parent of the element you wanna Replaced

// 1 create new element
var newheading=document.createElement('h3');
	newheading.id="title2";
	newheading.className="title2";
	newheading.appendChild(document.createTextNode("Replacing h4 with h3"));
console.log(newheading);

// 2 Finding parent
var oldheading=document.querySelector('h4');
var parent=oldheading.parentElement;
console.log(parent);

// 3 replceChild(new,old);
parent.replaceChild(newheading,oldheading);


// Removing ELement
var li=document.querySelectorAll('li');
// console.log(li);
// console.log(li.length);
// console.log(li[5]);
li[5].remove();

var ul=document.querySelector('ul');
console.log(ul);
console.log(ul.children);
// ul.children[3].remove();
ul.removeChild(ul.children[3]);

// Changing className
var li=document.querySelector('li');
// console.log(li);
var a=li.children[0];
// console.log(a);
var cname=a.className;
// console.log(cname);Return String value can't change
var clist=a.classList;
	clist.className="delete-item disabel";
// console.log(clist);Return DOMTokenList and changable

