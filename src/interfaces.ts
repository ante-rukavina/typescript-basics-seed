import { stars } from "./app";

console.log(stars + "Creating interfaces" + stars);

// type Pizza = {
//   name: string;
//   sizes: string[];
// };

// let pizza: Pizza;

// //actually does not return tuype, but object literal!

// function createPizza(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//   };
// }

// pizza = createPizza("Pepperni", ["small", "medium"]);

//a contract!
interface Pizza {
  name: string;
  sizes: string[];
}

let pizza: Pizza;

//actually does not return tuype, but object literal!

function createPizza(name: string, sizes: string[]) {
  return {
    name,
    sizes,
  };
}

pizza = createPizza("Pepperni", ["small", "medium"]);

console.log(pizza);

console.log(stars + "Interfaces with function types" + stars);

interface PizzaWFunctionType {
  name: string;
  sizes: string[];
  getAvailableSizes(): string[];
}

let pizzaWFuncType: PizzaWFunctionType;

//actually does not return tuype, but object literal!

function createPizzaWFuncType(
  name: string,
  sizes: string[]
): PizzaWFunctionType {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizzaWFuncType = createPizzaWFuncType("Pepperni", ["small", "medium"]);

console.log(pizzaWFuncType);

console.log(stars + "Extending interfaces" + stars);

interface Sizes {
  sizes: string[];
}

interface PizzaWFunctionTypeExtended extends Sizes {
  name: string;
  getAvailableSizes(): string[];
}

let pizzaWFunctionTypeExtended: PizzaWFunctionTypeExtended;

//actually does not return tuype, but object literal!

function createPizzaWFuncTypeExtended(
  name: string,
  sizes: string[]
): PizzaWFunctionType {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizzaWFunctionTypeExtended = createPizzaWFuncTypeExtended("Pepperni", [
  "small",
  "medium",
]);

console.log(pizzaWFunctionTypeExtended);
console.log(pizzaWFunctionTypeExtended.getAvailableSizes());

console.log(stars + "interfaces and optional properties" + stars);

interface PizzaWFunctionTypeExtendedOptional extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
}

let pizzaWFunctionTypeExtendedOptional: PizzaWFunctionTypeExtendedOptional;

//actually does not return tuype, but object literal!

function createPizzaWFuncTypeExtendedOptional(
  name: string,
  sizes: string[]
): PizzaWFunctionType {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizzaWFunctionTypeExtendedOptional = createPizzaWFuncTypeExtendedOptional(
  "Pepperni",
  ["small", "medium"]
);

pizzaWFunctionTypeExtendedOptional.toppings = 1;

console.log(pizzaWFunctionTypeExtendedOptional);
console.log(pizzaWFunctionTypeExtendedOptional.getAvailableSizes());
console.log(pizzaWFunctionTypeExtendedOptional.toppings);

console.log(stars + "interfaces and index signatures" + stars);

interface PizzaIndexSignature extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
  [key: number]: string;
}

let pizzaIndexSignature: PizzaIndexSignature;

//actually does not return tuype, but object literal!

function createPizzaIndexSignature(
  name: string,
  sizes: string[]
): PizzaIndexSignature {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizzaIndexSignature = createPizzaIndexSignature("Pepperni", [
  "small",
  "medium",
]);
pizzaIndexSignature[1] = "index1";
pizzaIndexSignature.toppings = 1;

console.log(pizzaIndexSignature);
console.log(pizzaIndexSignature.getAvailableSizes());
console.log(pizzaIndexSignature.toppings);
console.log("Index signature of [1] is: " + pizzaIndexSignature[1]);
