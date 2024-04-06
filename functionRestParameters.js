function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }
  return `Result = ${result}`;
}

console.log(calc(1, 2, 3));