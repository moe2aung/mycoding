// Event Bubbling vs Event Delegation

// Event Bubbling
document.querySelector('.title1').addEventListener('click',function(){
	// console.log('i am card-title');
});

document.querySelector('.card-content').addEventListener('click',function(){
	// console.log('i am card-content');
});

document.querySelector('.card').addEventListener('click',function(){
	// console.log('i am card');
});



// Event Delegation
const delitem = document.querySelector('.delete-item');
console.log(delitem);

document.body.addEventListener('click',deleteitem);

function deleteitem(e){
	// console.log("hay");

	// console.log(e.target);
	// console.log(e.target.className);

	if(e.target.className === "far fa-trash-alt"){
		console.log('hay');
	}

	if(e.target.parentElement.className === "delete-item"){
		// console.log('delete item');
		console.log(e.target.parentElement);
	}

	if(e.target.parentElement.className === "delete-item active"){
		// console.log('delete item');
		console.log(e.target.parentElement);
	}

	if(e.target.parentElement.classList.contains('active')){
		// console.log('delete item');
		console.log(e.target.parentElement);

			// i    a           remove
		// e.target.parentElement.remove();

		    // i        a            li            remove
		// e.target.parentElement.parentElement.remove();
	}

}