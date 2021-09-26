import { stars } from "./app";

console.log(stars + "Intro: typescript types(any)" + stars);

//never use this, as a last resort
let coupon: any;

coupon = 25;
console.log(coupon);
coupon = "Pizza25";
console.log(coupon);
coupon = true;
console.log(coupon);

console.log(stars + "Intro: implicit vs explicit" + stars);

let implicitCoupon = "Pizza25";
let explicitCoupon: string;
explicitCoupon = "Pizza25";

console.log(`
implicit: 
${implicitCoupon}
explicit:
${explicitCoupon}
`);

console.log(stars + "void type" + stars);
//oposite to any (does not exist in js)

let selectedTopping: string = "pepperoni";

//impure function(mutates outside of it's scope)
function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping("bacon");

console.log(selectedTopping);

//the most infrequent, value will never occur
console.log(stars + "never type" + stars);

//when a function actually never returns anything or there is no code execution (ie; after throwing a new error)
function orderError(error: string): never {
  throw new Error(error);
  //never going to return value!
}

// orderError("Something went wrong");

console.log(stars + "null, undefined and strict null checks" + stars);

//we definitely want to reset it to null
let couponNew: string | null = "pizza25";

function removeCoupon(): void {
  //stricnt null check is true
  couponNew = null;
  //   couponNew = undefined;
}

console.log(couponNew);

removeCoupon();

console.log(couponNew);

console.log(stars + "Union and literal types" + stars);

let pizzaSize: string = "small";

function selectSize(size: "small" | "medium" | "large"): void {
  pizzaSize = size;
}

selectSize("large");

console.log("pizza size is: " + pizzaSize);

console.log(stars + "function types" + stars);

function sumOrder(price: number, quantity: number): number {
  return price * quantity;
}

let sum = sumOrder(25, 2);

console.log(sum);

let sumOrderFunction: (price: number, quantity: number) => number;

sumOrderFunction = (x, y) => x * y;

sum = sumOrderFunction(25, 2);

console.log(sum);

console.log(stars + "functions and optional arguments" + stars);

let sumOrderFunctionDefault: (price: number, quantity?: number) => number;
sumOrderFunctionDefault = (x, y) => {
  if (y) {
    return x * y;
  } else {
    return x;
  }
};

sum = sumOrderFunctionDefault(25, 2);
console.log(sum);
sum = sumOrderFunctionDefault(25);
console.log(sum);

console.log(stars + "Typed functions and default parameters" + stars);

let sumOrderFunctionDefaultSet: (price: number, quantity?: number) => number;
sumOrderFunctionDefaultSet = (x, y = 1) => x * y;

sum = sumOrderFunctionDefaultSet(25, 2);
console.log(sum);
sum = sumOrderFunctionDefaultSet(25);
console.log(sum);

console.log(stars + "Object types" + stars);

let pizza: { name: string; price: number; getName(): string };

pizza = {
  name: "Plain old pepperoni",
  price: 20,
  getName() {
    return pizza.name;
  },
};

console.log(pizza.getName());

console.log(stars + "Array types" + stars);

let sizes: string[];

sizes = ["small", "medium", "large"];

console.log(sizes);

//generic type

let toppings: Array<string>;

toppings = ["pepperoni", "tomato", "bacon"];

console.log(stars + "Tuple types" + stars);

let pizzaTuple: [string, number, boolean];

pizzaTuple = ["Pepperoni", 20, true];
