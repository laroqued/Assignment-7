/*eslint-env browser*/

var skuNumber;
var products;
var quantity;
var cost;


// MENU
function display_menu() {
  "use strict";
  window.console.log("Welcome to the Product Inventory Management System");
  window.console.log("");
  window.console.log("COMMAND MENU");
  window.console.log("show - Show all of the inventory");
  window.console.log("add - Add to the inventory");
  window.console.log("del - Delete the inventory");
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
  var inventory = window.prompt("Enter the inventory's name");
  inventory_list.push(inventory);
  window.console.log(inventory + " was added.");
  window.console.log("");
}

// DELETE
function del(inventory_list) {
  "use strict";
  var num, inventory;
  num = parseInt(window.prompt("inventory number to delete"), 10);
  if (num < 1 || num > inventory_list.length) {
    window.alert("Invalid inventory number.");
  } else {
    inventory = inventory_list.splice(num - 1, 1);
    window.console.log(inventory + " was deleted.");
 
  }
}


//MAIN
function main() {
  "use strict";
  var inventory_list, command;

  display_menu();

  inventory_list = [
    ["4824"," Shirt", "10", "$15.99"],
    ["6343", "Jeans" ,"22" ,"$39.99"],
    ["3223","Socks","36"  , "$9.99"],
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
      } else if (command === "del") {
        del(inventory_list);
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