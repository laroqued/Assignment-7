/*eslint-env browser*/

var skuNumber;
var products;
var quantity;
var cost;
var entry;

// MENU
function display_menu() {
  "use strict";
  window.console.log("Welcome to the Product Inventory Management System");
  window.console.log("");
  window.console.log("COMMAND MENU");
  window.console.log("show - View all products");
  window.console.log("add - Add to the inventory");
  window.console.log("update - Update the inventory");
  window.console.log("exit - Exit the program");
  window.console.log("");
}

// DISPLAY
function display(inventory_list) {
  "use strict";
  inventory_list.forEach(function (item) {
    console.log(`${item[0]} ${item[1]} (${item[2]}) ${item[3]}`);
  });
  window.console.log("");
}

// ADD
function add(inventory_list) {
  "use strict";
  skuNumber = parseInt(window.prompt("Enter the SKU number."));
  products = window.prompt("Enter the name of the product.");
  quantity = parseInt(window.prompt("Enter the quantity."));
  cost = parseFloat(window.prompt("Enter the price."));
  entry = [`${skuNumber}`, `${products}`, `${quantity}`, `${cost}`];

  inventory_list.push(entry);
  window.console.log(entry + " was added.");
  window.console.log("");
}

function update(inventory_list) {
  ("use strict");
  skuNumber = parseInt(window.prompt("Enter the SKU number."));
  //quantity = parseInt(window.prompt("Enter a new stock quantity"));

  for (let i = 0; i < inventory_list.length; i++) {
    if(inventory_list[i][0] === skuNumber){
        console.log('number found');
    }

    console.log(
      `${inventory_list[i][0]} ${inventory_list[i][1]} (${inventory_list[i][2]}) ${inventory_list[i][3]}`
    );
  }

  //   inventory_list.splice(0, 0, [
  //     `${skuNumber}`,
  //     `${products}`,
  //     `${quantity}`,
  //     `${cost}`,
  //   ]);
  //   inventory_list.forEach(function (item) {
  //     console.log(`${item[0]} ${item[1]} (${item[2]}) ${item[3]}`);
  //   });
}

//MAIN
function main() {
  "use strict";
  var inventory_list, command;

  display_menu();

  inventory_list = [
    ["4824", " Shirt", "10", "$15.99"],
    ["6343", "Jeans", "22", "$39.99"],
    ["3223", "Socks", "36", "$9.99"],
    ["2233", "Hat", "12", "$14.99"],
    ["9382", "Jacket", "5", "$49.99"],
  ];

  while (true) {
    command = window.prompt("Enter command");
    if (command !== null) {
      if (command === "show") {
        display(inventory_list);
      } else if (command === "add") {
        add(inventory_list);
      } else if (command === "update") {
        update(inventory_list);
      } else if (command === "exit") {
        break;
      } else {
        window.alert("That is not a valid command.");
      }
    } else {
      break;
    }
  }
  window.console.log("Program terminated.");
}
main();
