import { stars } from "./app";

console.log(stars + "Type alias" + stars);

type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;

console.log(stars + "type alias" + stars);

let pizzaSize: Size = "small";

const seleztSize: Callback = (x) => {
  pizzaSize = x;
};

seleztSize("small");

console.log(pizzaSize);

seleztSize("large");

console.log(pizzaSize);

console.log(stars + "Type assertions" + stars);

type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: "Blazing inferno", toppings: 5 };

const serialized = JSON.stringify(pizza);

//old way, get's confused with jsx
function getNameFromJSONOld(obj: string): string {
  return (<Pizza>JSON.parse(obj)).name;
}

function getNameFromJSONProperly(obj: string): string {
  return (JSON.parse(obj) as Pizza).name;
}

console.log("Old way: " + getNameFromJSONOld(serialized));
console.log("Proper way: " + getNameFromJSONProperly(serialized));
