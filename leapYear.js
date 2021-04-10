let even = 0;
let odd = 0;

function isEven(num) {
  if (num % 2 == 0) return true;
  else return false;
}

for (i = 2000; i < 2100; i++) {
  if (isEven(i)) even = even + 1;
  else odd = odd + 1;
}

console.log("Total number of even is : ", even);
console.log("Total number of odd is : ", odd);
