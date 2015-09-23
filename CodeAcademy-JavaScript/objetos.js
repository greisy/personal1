var friends = new Object();
friends.bill = new Object();
friends.steve = {};
//CONSTRUCTOR NOTATION with NOTATION .
friends.bill.firstName = 'Bill';
friends.bill.lastName = 'Gates';
friends.bill.number = '0212-9418855';
friends.bill.address = ['Baruta','primera avenida','casa', '2'];
friends.steve = {};
friends.steve['firstName'] = 'steve';
friends.steve.lastName = 'Andrade';
friends.steve['number'] = '555-66-990';
friends.steve['address']=['Santa Ines', 'calle 2', ['casa',1235]];
console.log("hola mundo por la consola");
console.log(friends['bill']['number']);
/*
for(var key in friends){
	console.log(typeof friends[key]);
	for(var key2 in friends[key]){
		console.log(key2);
	}
}*/
console.log('--------------');
for(var key in friends){
	//console.log(typeof friends[key]);
	console.log('friend '+key);
	for(var key2 in friends[key]){
			console.log(key2);
		if(key2 === 'address'){
			//console.log(friends[key][key2].length);
			for(var i=0;i<friends[key][key2].length; i++){
				console.log(friends[key][key2][i]);
			}
			
		}else{
			console.log(friends[key][key2]);
		}
		
	}
}