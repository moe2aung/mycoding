// Createing Element

//create li tag
var li=document.createElement('li');

// className for li tag
// li.className="collection-item";
li.setAttribute("class","collection-item");

// id for li tag
li.id="new-item";

// text node for li tag
// li.innerHTML="innerHTML";
// li.innerText="innerText";
// li.textContent="textContent";

// create Textnode and use appendChild Method for li tag
li.appendChild(document.createTextNode("Hello"));
// console.log(li);

// creat absolute tag
var a=document.createElement('a');
a.setAttribute("href","#");
a.id="delete-item6";
a.className="delete-item";
a.innerHTML='<i class="fa far-trash-alt"></i>';
// a.appendChild(document.createTextNode("<i class='fa far-trash-alt'></i>"));
// console.log(a);

// append a to li
li.appendChild(a);
console.log(li);


// append li into ul
document.querySelector('ul.collection').appendChild(li);


