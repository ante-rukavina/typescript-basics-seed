import { stars } from "./app";

console.log(stars + "Understanding classes and constructors" + stars);

//old way :)
function Pizza(name: string) {
  this.name = name;
  this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
  this.toppings.push(topping);
};

const pizza = new Pizza("Pepperoni");

pizza.addTopping("pepperoni topping");

console.log(pizza);

console.log(stars + "Getters and setters" + stars);
class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

const sizes = new Sizes(["small", "medium"]);
//invoke getter
console.log(sizes.availableSizes);

//invoke setter
sizes.availableSizes = ["small", "medium", "jumbo"];

//invoke getter
console.log(sizes.availableSizes);

//public by default, not available in JS
console.log(
  stars + "classes and constructors, private, public , readonly" + stars
);

abstract class SizesAbstract implements SizesInterface {
  constructor(protected sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

class PizzaNew extends SizesAbstract {
  public toppings: string[] = [];

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public addTopping(topping: string) {
    this.toppings.push(topping);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }
}

const pizzaNew = new PizzaNew("Pepperoni", ["small", "medium"]);
pizzaNew.addTopping("New pepperoni topping");
console.log(pizzaNew);
console.log(pizzaNew.name);

//public by default, not available in JS
console.log(stars + "classes and constructors, extended" + stars);

console.log(pizzaNew.name + " : " + pizzaNew.availableSizes);

//public by default, not available in JS
console.log(stars + "protected and abstract" + stars);

console.log(pizzaNew.availableSizes);
pizzaNew.updateSizes(["large", "jumbo"]);
console.log(pizzaNew.availableSizes);

console.log(stars + "interface contract" + stars);
//sizes contract, abstract class should implement it
interface SizesInterface {
  availableSizes: string[];
}

//pizza contract, extending sizes contract
interface PizzaInterface extends SizesInterface {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

console.log(
  "pizzaNew is instance of PizzaNew: " + (pizzaNew instanceof PizzaNew)
);
console.log(
  "pizzaNew is instance of Sizes as well: " +
    (pizzaNew instanceof SizesAbstract)
);

console.log(stars + "static" + stars);

//instance
const dateInstance: Date = new Date();

console.log(dateInstance.getMilliseconds);

//also instance
const dateTimestamp: number = +new Date();
console.log(dateTimestamp);

//static
const dateStatic: number = Date.now();
console.log(dateStatic);

class Coupon {
  static allowed = ["Pepperoni", "Blazing Inferno"];
  static create(percentage: number) {
    return "PIZZA_RESTAURTANT_" + percentage;
  }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));
