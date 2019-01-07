var squareOfSum = 0; // 1 + 2 + 3 + 4.....   square at end
var sumOfSquare = 0; // 1^2  + 2^2  ....

for (var i = 1; i < 101; i++) {
  squareOfSum += i;
  sumOfSquare += i * i;
}

squareOfSum *= squareOfSum;

console.log(squareOfSum - sumOfSquare);
