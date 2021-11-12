//Core Homework
let pizzaPlace = "Myk & Sean 's Grub";
let numberOfToppings = 17;

console.log(pizzaPlace, numberOfToppings);
console.log(typeof pizzaPlace, typeof numberOfToppings);

let sentence = `${pizzaPlace} is a fantastic pizza joint that offers ${numberOfToppings} different toppings.`

console.log(sentence)


if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus Challenge
for (i = 0 ; i < numberOfToppings ; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}
