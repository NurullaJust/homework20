let arr = [1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3];
function AverageDigit() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let conclusion = sum / arr.length;
  alert(conclusion);
}
AverageDigit();
