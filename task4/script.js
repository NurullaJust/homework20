function calcFactorial(n) {
  let result = 1;
  for (let i = 1; i < n; i++) {
    result *= i;
  }
  return result;
}
alert(calcFactorial(+prompt("ededi daxil et")));
