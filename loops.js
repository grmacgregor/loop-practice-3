var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// 1. 25 27 32 24 18

for(var i=0; i<students.length; i++) {
	console.log(students[i].age);
}

// 2. Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver

for(var i=0; i<students.length; i++) {
	console.log(students[i].name + ", " + students[i].city);
}

// 3. Liz is from Boulder Trent is from Boulder Chelsea is from Boulder

for(var i=0; i<students.length; i++) {
	if(students[i].city === 'Boulder') {
 		console.log(students[i].name + " is from " + students[i].city);
	}
}

// 4. Meghan is older than 25 Trent is older than 25

for(var i=0; i<students.length; i++) {
	if(students[i].age > 25) {
 		console.log(students[i].name + " is older than 25");
	}
}