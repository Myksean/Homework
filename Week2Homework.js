//Core Homework
let pizzaPlace = "Myk & Sean 's Grub";
let numberOfToppings = 17;

console.log(pizzaPlace, numberOfToppings);
console.log(typeof pizzaPlace, typeof numberOfToppings);

console.log(pizzaPlace + " is a fantastic pizza joint that offers " +
numberOfToppings + " different toppings.")

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus Challenge
let i = 1
while (i < numberOfToppings) {
  i = i + 2
  console.log(i - 1)
}
