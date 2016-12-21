//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
	*/
// write your code here ...
// a
var student1={
	name:"abdulazeez naji",
	age:25,
	education:"computer engineering",
	nationality:"iraqi"
}
var student2={
	name:"noor atyat",
	age:24,
	education:"computer engineering",
	nationality:"jordinian"
}
var students=[student1,student2]
// b
function showFrined(student){
	return student.name + " " + student.age + " " + student.education;
}
// c
function averageStudents(s){
	var res=0;
	each(s,function(element){ 
		res+=element.age
	})
	return res/students.length;
}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
	*/
// write your code here ...

function square(x){
	return x*x;
}



function rangeSquared(start, end) {
	var acc = [];
	if(end === undefined && start%2===0){
		acc.push(square(start))
	}
	for (var i = start; i <= end; i++) {
		if(i%2===0){
			acc.push(square(i))
		}
	}
	return acc;
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
	*/

// write your code here ....
function leader(array){
	var newArr=[];
	large=array[array.length-1]
	newArr.push(large)
	for (var i =0 ; i<array.length ; i++) {
		if(array[i] > large){
			newArr.push(array[i])
		}
	}
	return newArr.sort(function(a,b){return b-a});
}




function each(coll,func){
	if(Array.isArray(coll)){
		for (var i = 0; i < coll.length; i++) {
			func(coll[i],i)
		}
	}else{
		for(var key in coll){
			func(coll[key],key)
		}
	}
}