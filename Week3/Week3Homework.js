const { abort } = require("process");

let pizzaToppings = ["pepperoni","sausage","bacon","olives","pineapple"]; // I hate Olives lmao
z = 0

// while (z < pizzaToppings + 1) {
//   if (toppings.includes(pizzaToppings.length - z) = true) {
//   } else {
//     return console.log("We don't have all the toppings you're asking for. Try ordering again!");
//   };
//   z += 1
// }

function lastPizzaTopping() {
  let lastTop = "and " + pizzaToppings[pizzaToppings.length -1];
  return (lastTop);
}

function lastUserTopping(...toppings) {
  if (toppings.length < 1) {
    toppings = " ";
    console.log(toppings + "Test");
    return toppings;
  } else if (toppings.length == 1) {
      return toppings;
  } else {
    //console.log(toppings);
    let popped = toppings.pop();
    toppings = toppings + " and " + popped;
    //console.log(toppings);
    return toppings;
  }
}

function greetCustomer(lastTop) {
  let list = "";
  console.log(`Welcome to Myk and Sean's Grub! We currently offer ${pizzaToppings.length} toppings for our pizza:`);
  for (i = 0 ; i < 4 ; i++) {
    list += pizzaToppings[i] + " ";
  }
  lastPizzaTopping();
  console.log(list + lastTop);
  console.log("-----------------------------");
}

function getPizzaOrder(size,crust,...toppings) {
  if (toppings == " ") {
    console.log(`I've got a ${size} pizza with ${crust} crust and cheese coming for you!`)
    return([size,crust,toppings]);
  // } else if (toppings.includes["pepperoni"] = false){
  //   let abort = "yes"
  //       return abort
  // } else if (toppings.includes["sausage"] = false) {
  //   let abort = "yes"
  //       return abort
  // } else if (toppings.includes["bacon"] = false) {
  //   let abort = "yes"
  //       return abort
  // } else if (toppings.includes["olives"] = false) {
  //   let abort = "yes"
  //       return abort
  // } else if (toppings.includes["pineapple"] = false) {
  //   let abort = "yes"
  //       return abort
  } else {
        console.log(`I've got a ${size} pizza with ${crust} crust plus ${toppings} coming for you!`);
        return([size,crust,toppings]);
      };
    };

function preparePizza([size,crust,toppings],abort= "no") {
  if (abort == "yes") {
    return abort
  } else {
    console.log("We're making your awesome pizza...");
    return pizza = {"size":size,"crust":crust,"toppings":toppings};
  }
};

function servePizza(pizza,abort= "no") {
  if (abort == "yes") {
    return console.log("We don't have all the toppings you're asking for. Try ordering again!");
  } else if (pizza.toppings == " ") {
      console.log(`Thanks for waiting. Your ${pizza.size}, ${pizza.crust} crust pizza with cheese is ready. Eat up!`);
  } else {
    console.log(`Thanks for waiting. Your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings} is ready. Eat up!`);
    }
  }


// greetCustomer(lastPizzaTopping());
// lastUserTopping("sausage","peppers","banana");
// getPizzaOrder("small","thin",lastUserTopping("sausage","peppers"));
// preparePizza(getPizzaOrder("small","thin","pineapple, sausage"));
// servePizza(preparePizza(getPizzaOrder("small","thin","sausage","peppers")));
 servePizza(preparePizza(getPizzaOrder("small","thin",lastUserTopping("ham","sausage"))));
