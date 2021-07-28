// // // localStorage
// // Set Item
// localStorage.setItem("name","Moe Aung");
// localStorage.setItem("age",20);
// var name="Moe Moe Aung";
// localStorage.setItem('name',name);

// // Get Item
// var getitem=localStorage.getItem("name");
// console.log(getitem);
// var getage=localStorage.getItem("age");
// console.log(getage);
// console.log(typeof(getage));


// // Destroy Item(single)
// localStorage.removeItem("name");

// // Destroy Item(All)
// localStorage.clear();

// // //sessionStorage 
//  // Set Item
//  sessionStorage.setItem("name","Moe");

// // Get Item
// var getname=sessionStorage.getItem("name");
// console.log(getname);

// // Destroy Item(single)
// sessionStorage.removeItem('name');

// // Destroy Item(All)
// sessionStorage.clear();

// STORAGE
document.querySelector('.form').addEventListener('submit',function(e){
	// console.log('hay');

	e.preventDefault();

	const gettask = document.getElementById('new-tasks');
	console.log(gettask);
	const newtask = gettask.value;
	console.log(newtask);
	// localStorage.setItem('newtask',newtask);


	// const newtask = document.getElementById('new-tasks').value;
	// console.log(newtask);
	// localStorage.setItem('task',newtask);

	var tasks;
	// console.log(tasks);

	if(localStorage.getItem('tasks') === null){
		tasks = [];
		// console.log(typeof tasks);
	}
	else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
		
	}

	// console.log( typeof tasks);
	
	tasks.push(newtask);	
						   // key    value
	localStorage.setItem('tasks',JSON.stringify(tasks));

	// window.alert("New Task Saved");


let mytasks = JSON.parse(localStorage.getItem('tasks'));
// console.log(mytasks);
// console.log(typeof mytasks);
// console.log(mytasks.length);
// console.log(mytasks[1]);


	mytasks.forEach(function(mytask){
 		// console.log(mytask);
});

});