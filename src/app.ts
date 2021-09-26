const stars =
  "   ***********************************************************************   ";
console.log(stars + "Intro: TypeSCript basic" + stars);
console.log("Hello, it seems it works :)");

const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map(function (pizza) {
  return pizza.name.toUpperCase();
});

//arrow functions
console.log(stars + "arrow functions" + stars);
const mappedPizzas2 = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);
console.log(mappedPizzas2);

const pizza = {
  name: "blazing inferno",
  getName: () => pizza.name,
};

console.log(pizza.getName());

//default function parameters
console.log(stars + "defaultfunction parameters" + stars);
function multiply(first: any, second = 25) {
  return first * second;
}

console.log(multiply(5));
console.log(multiply(5, 35));

//Object literal improvements
console.log(stars + "Object literal improvements" + stars);
const pizzaTwo = {
  name: "Pepperoni",
  price: 15,
  getName() {
    return this.name;
  },
};

const toppings = ["Pepperoni"];

// const order = {
//     pizza: pizza,
//     toppings: toppings
// }

const order = { pizzaTwo: pizzaTwo, toppings };

console.log(order);

function createOrder(pizzaTwo: any, toppings: any) {
  return { pizzaTwo, toppings };
}

console.log(createOrder(pizzaTwo, toppings));

console.log(pizzaTwo.getName());

//Rest parameters
console.log(stars + "Rest parameters" + stars);
// function sumAll(arr: any) {
//   return arr.reduce((prev: any, next: any) => prev + next);
// }

// const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log(sum);

// function sumAll(...arr: number[]) {
//   return arr.reduce((prev: any, next: any) => prev + next);
// }

// const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(sum);

function sumAll(messsage: string, ...arr: number[]) {
  console.log(messsage);
  console.log(arguments);
  return arr.reduce((prev: any, next: any) => prev + next);
}

const sum = sumAll("Hello !", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);

//Array spread operator
console.log(stars + "Array spread operator" + stars);

const toppingsOld = ["bacon", "chilli"];

const toppingsNew = ["pepperoni"];

//creates a copy and puts it into new object(array)
const allToppings = [...toppingsOld, ...toppingsNew];
const allToppingsDifferentOrder = [...toppingsNew, ...toppingsOld];

console.log(allToppings);
console.log(allToppingsDifferentOrder);

//object spread operator
console.log(stars + "object spread operator" + stars);
const pizzaNew = {
  name: "Pepperoni",
};

const toppingsForNewPizza = ["pepperoni"];

//does not
const orderNew = {
  //copy of pizza object into a new object!
  ...pizzaNew,
  toppingsForNewPizza,
};

console.log(orderNew);
const finalOrder = { ...orderNew };
console.log(finalOrder);

const orderOldJS = Object.assign({}, pizzaNew, { toppingsForNewPizza });

const spreadOrder = { ...pizzaNew, toppingsForNewPizza };

console.log(orderOldJS);

console.log(spreadOrder);

//Destructuring arrays and objects
console.log(stars + "Destructuring arrays and objects" + stars);
const pizzaDes = {
  nameDes: "Pepperoni",
  toppingsDes: ["pepperoni"],
};

function orderDestructured({ nameDes: pizzaName, toppingsDes: pizzaToppings }) {
  //returns only pizzaName and pizzaToppings
  return { pizzaName, pizzaToppings };
}

function orderDestructuredNameOnly({ nameDes: pizzaName }) {
  //returns only pizzaName and pizzaToppings
  return { pizzaName };
}

console.log(orderDestructured(pizzaDes));

console.log(orderDestructuredNameOnly(pizzaDes));

//import {someting} from 'somewhere'
//basically means give me a property from object, same syntax as give me a property from module
const { pizzaToppings } = orderDestructured(pizzaDes);

console.log(pizzaToppings);

const toppingsDestructured = ["pepperoni", "bacon", "chilli"];

const [first, second, third] = toppingsDestructured;

console.log(first);
console.log(second);
console.log(third);

function logTopppings([first, second, third]: any) {
  console.log("Logging destructured toppings array!");
  console.log(first);
  console.log(second);
  console.log(third);
}

logTopppings(toppingsDestructured);
