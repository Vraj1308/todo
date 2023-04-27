// let and const 
const myname = "vraj";

console.log(myname);

//arrow function

let double = (num) => {
  return num*2;
}
console.log(double(10));

//export and import(modules)

import * as bundle from './self.js';
  bundle.hello();
  console.log(bundle.data);

  import person from './customer.js';

  console.log(person);

  //class and object

  class customer{
    constructor(n){
      this.name = n;
    }
      age = 20;
    
      buy = () => {
      console.log(this.name);
    }
  }

  class Getcustomer extends customer{
    hello(){
      console.log("hello");
    }
  }
  let customer1=new Getcustomer("vraj");

  console.log(customer1);
  customer1.buy();

  //spread and rest operator(...)

let person1 = {
  name: "vraj",
  age: 28
}

let newperson = {
      ...person1,
      city:"vadodara"
      
}

console.log(newperson);

function hello(...all){
  console.log(all);
}

hello(1,2,3);

//Array destructuring

let list = ["audi","honda"];

let [car1,car2,car3] = list;

console.log(car1);

//object destructuring

const person2 = {
  name: "vraj",
  age: 20
}

let {name,age} = person;

console.log(person2.name)

//refernce(array,object) and primitive type(string,num)

let num1 = 100;

let num2 = num1;
num2 = 50;

console.log(num1);
console.log(num2);

let person3 = {
  name:"vraj",

}

let person4 = {
  ...person3
};

person4.name="shah";
  console.log(person3);
  console.log(person4);


  //map
  

  let array=[2,6,7,8,10];

  let Array = array.map(x => x*2);

  console.log(Array);

  //filter

  let array1 = [2,6,7,8,10];

  let Array1 = array1.filter(x => x%2 == 0);

  console.log(Array1);