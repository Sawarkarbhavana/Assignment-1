var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
]
// print all ID'S in an array exapmle:[10,15,20,25,20,35,40]
const id=employees.map(employees=>employees.id);
console.log(id);

//print total no of years of experience they all have
var exp = employees.reduce((acc,current)=>){
    return acc + current.experience;
}0);
console.log(exp);

//print all employees whose experince is greater than 5 years
var y=employees.filter(employee=>employee.experience>5);
console.log(y);

let cat = {
  catName: 'Kitty',
  sayName () {
   console.log(this.catName);
}
}

let sayName = cat.sayName;
//print out "kitty"
let cat = {
    catName: 'Kitty',
    sayName () {
     console.log(this.catName);
  }
  }
  
  let sayName = cat.sayName();

  class user {
    displayName() {
        return this.name + "is in" + this.location;
    }
}

var user1 = new user("Marlabs", "New Jersey");

console.log(user1.displayName());

// print "Marlabs in New Jersey" (do not create variables outside the user class)
class user {
    constructor(name, location){
    this.name = name;
    this.location = location; }
    displayName() {
    return this.name + " is in " + this.location;
    } }
    var user1 = new user("Marlabs", "New Jersey");
    console.log(user1.displayName());
    

function myName(fName, lName) {
    console.log(`my name is ${fName} ${lName}`);

    function fullDetails(companyName) {
        const value = `my name is ${fName} ${lName} and I work for ${companyName}`
        return value;
    }

    return fullDetails;
}
//Print: ‘My name is Althaf Pattan and I work for Marlabs’
var y = myName("Althaf","Pattan").call(this,"Marlabs"); 
console.log(y);

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};
}
console.log(data);
resolve();
} 
else {
var res = new Error('failed......');
reject(res);
}
});
//Print: ‘Pika Chu loves sushi and algorithms’
var pokemon = {
    firstname: 'Pika', lastname: 'Chu ', getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname; }
    };
    var pokemonName = function(snack, hobby) { console.log(this.getPokeName() + 'I choose you!'); console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
    }.bind(pokemon); pokemonName("sushi","algorithm");

var promise2 = function(address) {
var msg = address.state + ' ' + address.zip;
return Promise.resolve(msg);
}

