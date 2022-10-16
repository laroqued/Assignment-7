//STEP 1
function halfNumber(num) {
  const result = num / 2;
  return `Half of ${num} is ${result}`;
}

//STEP 2
function squareNumber(num) {
  const result = num * num;
  return `The result of squaring the number ${num} is ${result}.`;
}

//STEP 3
function percentOf(num1, num2) {
  const result = (num1 / num2) * 100;
  return `${num1} is ${result}% of ${num2}.`;
}

//STEP 4
function findModulus(num1, num2) {
  const result = num2 % num1;
  return `${result} is the modulus of ${num1} and ${num2}.`;
}

//STEP 5
numbers = [];

function sumNumbers(numbers) {
  let numberList = window.prompt(
    "Enter set of numbers separated by commas (ex. 1,2,3,4)."
  );
  numberList = numberList.split(",").map(Number);
  numbers = numberList;

  var sum = function (previousValue, value) {
    return previousValue + value;
  };

  var total = numbers.reduce(sum);

  return `${numberList} will have a combined total of ${total}`;
}

// ========================================================================

const step1 = halfNumber(5);
console.log(step1);

const step2 = squareNumber(3);
console.log(step2);

const step3 = percentOf(2, 4);
console.log(step3);

const step4 = findModulus(4, 10);
console.log(step4);

const step5 = sumNumbers(numbers);
console.log(step5);
