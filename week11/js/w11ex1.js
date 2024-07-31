console.log("Hello");

// Create objects - using literal notation
// this have properties. the seperator of the property and the value is the semi-colen.
// the property should always be a string. the value of the property can be anything.
let person1 = {
    // firstname is the property. Lithasha is the value.
    firstName : "Lithasha",
    // if the property is multi word you have to use double quotes for this.
    "last name" : "Dayarathna",
    age : 18,
    // this is an object.
    lastAccess : new Date(),
    address : {streetNumber: 18, streetName : "Taylorwood" , city : "Oshawa"},
    print: function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)}
};

console.log(person1.firstName) // the output is Lithasha.
// this is the array notation.  this is similar to python dictionary.
console.log(person1["firstName"]);

//console.log(person1."last name"); // this will give an errror
// if there are more than one word for property you have to use the arrays notation.
console.log(person1["last name"]);

 console.log(person1); // 18
 person1.age = 49;
 console.log(person1.age); // 49

 console.log(person1.lastAccess);

 console.log(person1.address.city); // Oshawa
 person1.print()

 person1.height = "176 cm";
 console.log(person1.height);



 // Create objects - using fucntion constructor.
 //we separate the elements with semi colen.
 function PersonV2(first = "XXX",last = "YYY",age = 18) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.lastAccess = new Date ();
    this.height = "166 cm"
    this.print = function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age})`)};
}

 
 let p1 = new PersonV2('Sam','Tom', 34);
 let p2 = new PersonV2('Mia','Ron', 10);
 let p3 = new PersonV2(); 

 console.log(p1.firstName); // Sam 
 p1.print();
 p2.print();
 p3.print();

// inorder to add a new property we use the prototype.
 PersonV2.prototype.height = "166 cm "
 console.log(p1.height) //166 cm
 console.log(p2.height) //166 cm
 console.log(p3.height) //166 cm

 p2.height = "222 cm"
 console.log(p1.height); // 166 cm
 console.log(p2.height); // 166 cm
 console.log(p3.height); // 166 cm


// class is a blue print to create an object.


// Create object using classes.
class PersonV3 {
    firstName;
    lastName;
    age;
    constructor(first,last,age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print() {
        console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age})`)
    }
}
let p4 = new PersonV3("Lithasha", "Dayarathna", 18);
p4.print();
//console.log(p4.#firstName);\

// inheritence
class Student extends PersonV3{
    grade;
    constructor(first,last,age, g) {
        super(first,last,age);
        this.grade = g;
        
    }
}

let s1 = new Student("DD","MM",23,88);
s1.print();
console.log(s1.grade)


