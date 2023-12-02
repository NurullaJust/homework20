function calcSalary() {
  let salary = Number(document.querySelector("#salary").value);
  let tax = Number(document.querySelector("#tax").value);
  let conclusion = salary - salary * (tax / 100);
  document.getElementById("result").innerText = conclusion.toFixed(2);
  console.log(conclusion);
}
calcSalary();
