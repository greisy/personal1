//OBJECT LITERAL NOTATION

var object1 = {
    "color" : [255,210,180],
    "mobiliario" : ['silla','mesa','cocina']
    };
var object2 = {
    'nroArboles' : 20,
    'arboles' : 'araguaney'
    };

//OBJECT CONSTRUCTOR NOTATION
var object3 = new Object();
object3.color = [225,180,55]; //NOTATION .
object3['mobiliario'] = 'silla';//NOTATION []


//AGREGAR UN OBJETO A UN ARREGLO
var myObj = new Object();
var myArray = [1,true,'jose',myObj];

//OR
var myObj = {

	type : 'fancy',
	disposition : 'sunny'
}
var myArray = [1,true,'jose',myObj];

//OR
var myArray = [1, true, 'cielo', new Object()];

// Jagged Array. Los elementos del array pueden contener otros arrays y pueden tener diferentes tama;os
var myObj = {
    'languages' : 'Python',
    'nroLanguges' : 10
    }
var newArray = [[new Object(), myObj],[true,false,'burro','fiona']] //Agregar un array de objetos


//CONSTRUCTOR NOTATION
var friends = new Object();
friends.bill = new Object();
friends.steve = {};

//Literal NOTATION
var friends = {
    bill: {},
    steve: {}
};
//LITERAL NOTATION
friends[bill] = {};
friends.steve = {};


var friends = new Object();
friends.bill = new Object();
friends.steve = {};
//CONSTRUCTOR NOTATION with NOTATION .
friends.bill.firstName = 'Bill';
friends.bill.lastName = 'Gates';
friends.bill.number = '0212-9418855';
friends.bill.address = ['Baruta','primera avenida','casa', '2'];
//LITERAL NOTATION
friends.steve.firstName = 'Bill';
friends.steve = {
    firstName : 'Steve',
    lastName : 'Carrero',
    number : '8855662',
    address : ['El Silencio','quinta viejita', 1235]
    };

//funcion para imprimir los elementos de un objeto, el objeto friends tiene 2 objetos dentro bill y steve
var list = function(friends){
    for(var key in friends){
        console.log(key);
        
        }
    }

var search = function(name){
    for(var key in friends){
        if(key.firstName === name){
            console.log();
            return key;
            }
        
        }
    };

var search = function(name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
            }
        
        }
    };


//Crear una funcion para que sea reutilizada como metodo para cualquier objeto declarado
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge; //Estamos asignando una funcion a un metodo de un objeto
susan.setAge(35);

// una funcion que solo trabajara con el objeto rectangle
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight; //en este caso THIS solo puede referenciar a rectangle porque se definio un metodo setHeight para ser parte de rectangle
};
// help by finishing this method
rectangle.setWidth = function(newWidth){
    this.width = newWidth;
    }
rectangle.setHeight(6);
rectangle.setWidth(8);

// here change the width to 8 and height to 6 using our new methods
//CREATE A NEW OBJECT WITH THE CONSTRUCTOR Person
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington",275);
/////////////////////////////////////////////
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens"; //Cuando se crea un objeto de tipo Person puede que no se asignen name y age pero siempre tendra la propiedad species
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield",16);
console.log("sally's species is " + sally.species + " and she is " + sally.age );
console.log("holden's species is " + holden.species + " and he is " + holden.age );

///////
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
      return 2*this.height + 2*this.width;
      }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();


//////ARRAY OF OBJECTS
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy",6);
// add the last family member, "timmy", who is 6 years old


/////RECORRER UN ARREGLO DE OBJETOS
// Our Person constructor
function Person(name, age){
    this.name = name;
    this.age = age;
    }

// Now we can make an array of people
var family = [];
family = [new Person("alice",40), new Person("bob",42), new Person("michelle",8), new Person("timmy",6)];

// loop through our new array
for(var key in family){
    console.log(family[key].name);
    }

////PASANDO OBJETOS A LOS PARAMETROS DE UNA FUNCTION GENERICA
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy);

///function who is older that the other person// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2){
    if(person1.age >= person2.age){
        return person1.age;
        }else{
            return person2.age;
            }
    }

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));


/////////////// 
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function(){
        return 2*Math.PI * this.radius;
        }
};
//RECORDAR QUE LAS PROPIEDADES DE UN OBJETO SON VARIABLES PERO DEL OBJETO Y LOS METODOS SON FUNCIONES ASOCIADAS A UN OBJETO
//TAMBIEN LA PALABRA THIS ME AYUDA A SUSTITUIR EL OBJETO QUE ESTA LLAMANDO A LAS PROPIEDADES Y METODOS. CUANDO HAGO THIS.nameProperty
//LO QUE HAGO ES COMO CREAR UN OBJETO DE TIPO OBJECT() Y CREAR UNA PROPIEDAD

//pensar en como se hace un objeto de tipo object() que se debe crear las propiedades y metodos a mano o hacer un constructor con las propiedades y metodos

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = new Object();
mary.firstName = "Mary";
mary.lastName = "Johnson";
mary.phoneNumber = "(650) 888 - 8888";
mary.email = "mary.johnson@example.com";

var contacts = [];
contacts[0] = bob;
contacts[1]= mary;
console.log(contacts[1].phoneNumber);

/////OTHER example
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
var printPerson = function(person){
    console.log(person.firstName + ' '+ person.lastName);
    
    }
printPerson(contacts[0]);
printPerson(contacts[1]);

//////////////
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function(){
    var contactsLength = contacts.length;
    for(var i=0;i<contactsLength; i++){
        printPerson(contacts[i]);
        }
    };
list();



//////////////////
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName){
    var contactsLength = contacts.length;
    for(var i=0;i<contactsLength;i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
            }
        }
    }
search("Jones");
function add(firstName,lastName,email,phoneNumber){
    contacts[contacts.length] = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        phoneNumber : phoneNumber
        }
    }
add("Tati","Carrillo","tati@example.com","222-5556878");
list();


///HACER REFERENCIA A UNA PROPIEDAD DENTRO DE UNA NOTACION LITERALvar james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a [job]");
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james['job']= "super programmer";

// james' second job
james.sayJob();


/////]]]]]]]]]]]]] DIFERENTES COMPORTAMIENTOS PARA DOS MISMOS OBJECTOS
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function(){
    console.log("Wuaauu");
    
    };
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();


/////////////////////////////////USANDO PROTOTYPE
// create your Animal class here
function Animal(name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
    }
Animal.prototype.sayName = function(){
    console.log("Hi my name is " + this.name);
    }

// create the sayName method for Animal





// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();


///////////////////////////////////HEREDAR PROPIEDADES Y METODOS
// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name = name;
    this.numLegs = 2;
    }
Penguin.prototype = new Animal();
// set its prototype to be a new instance of Animal
var penguin = new Penguin();
penguin.sayName();


///OTRO EJEMPLO DE HERENCIA
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name){
    this.name = name;
    }
Emperor.prototype = new Penguin();
// create an "emperor" object and print the number of legs it has
var emperor = new Emperor("Luis");
console.log(emperor.numLegs);


////////////////////DEVOLVIENDO UNA VARIABLE PRIVADA DE UNA CLASE MEDIANTE UN METODO DE LA CLASE
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);

////////////////////////////////////////TIPOS DE VARIABLES DENTRO DE UN OBJETO
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var property in languages){
    if(typeof languages[property] === 'string'){
        console.log(languages[property]);
        }
    }
/////////////////////////////////////// metodo hasOwnProperty el objeto evaluar si tiene una propiedad
// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty');
console.log(hasOwn);


///////////////////////////////////////// PRIVATE PROPERTIES
function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3; //notar que aqui para acceder a una variable privada solo coloco el nombre de la variable
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());



//////////////////////////////// USANDO NOTACION LITERAL IGUAL PUEDO CAMBIAR EL VALOR DE UNA VARIABLE PUBLICA DE UN OBJETO
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);



///////////////////////////////////// Building a cash Register
var cashRegister = {
    total: 0,
//insert the add method here    
    add: function(itemCost){
        return this.total+=itemCost;
        },
        
    scan: function (item) {
        switch (item) { 
        case "eggs": 
            this.add(0.98); 
            break;
        
        case "milk": 
            this.add(1.23); 
            break;
        
        //Add other 2 items here
        case "magazine":
            this.add(4.99);
            break;
        case "chocolate":
            this.add(0.45);
            break;
        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
//Show the total bill
console.log('Your bill is '+cashRegister.total);

///////////////////////////// AGREGAR CANTIDAD DE PRODUCTOR AL METODO Scan
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, quantity) {
        switch (item) {
        case "eggs": this.add(0.98*quantity); break;
        case "milk": this.add(1.23*quantity); break;
        case "magazine": this.add(4.99*quantity); break;
        case "chocolate": this.add(0.45*quantity); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate",4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);

/////////////////////////////////////////////////////// COLOCAR EL METODO DE DESCUENTO POR PERSONA
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Grey", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total-= this.total*(employee.discountPercent/100);
        }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));