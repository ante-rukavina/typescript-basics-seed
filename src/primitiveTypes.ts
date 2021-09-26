import { stars } from "./app";

console.log(stars + "Intro: primitive types numbers" + stars);
let pizzaCost: number = 10;
//must be initialized :)
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);

console.log("Pizza cost:" + cost);

console.log(stars + "Intro: primitive types strings" + stars);

const coupon: string = "Pizza25";

function normalizeCoupon(couponCode: string): string {
  return couponCode.toUpperCase();
}

// const couponMessage: string = "Final coupon is " + normalizeCoupon(coupon);
const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
console.log(couponMessage);

console.log(stars + "Intro: primitive types boolean" + stars);
const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount `);
} else {
  console.log(`Order more than 3 pizzas for a discount`);
}
