function printNumber1(n, dec = 1) {
  if (n === 0) return;
  console.log("1 ==== ", n);
  printNumber1(n - 1);
}

function printNumber2(n, dec = 2) {
  if (n === 0) return;
  console.log("2===n", n);
  printNumber2(n - dec);
}
printNumber1(10);
printNumber2(20);
