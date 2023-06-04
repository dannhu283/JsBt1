function totalSalary() {
  let input1 = document.getElementById("ip-fee").value;
  let input2 = document.getElementById("ip-day").value;
  let total = 0;
  total = input1 * input2;
  document.getElementById("totalSlr").innerHTML = total.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "VND",
    }
  );
}
function average() {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let num3 = +document.getElementById("number3").value;
  let num4 = +document.getElementById("number4").value;
  let num5 = +document.getElementById("number5").value;
  let average = 0;
  let n = 0;
  if (num1 > 0) {
    n++;
  }
  if (num2 > 0) {
    n++;
  }
  if (num3 > 0) {
    n++;
  }
  if (num4 > 0) {
    n++;
  }
  if (num5 > 0) {
    n++;
  }
  average = (num1 + num2 + num3 + num4 + num5) / n;
  document.getElementById("average").innerHTML = average;
}
function changeDollar() {
  let exchangeRate = 23500;
  exchangeRate.toFixed(3);
  let money = document.getElementById("exMoney").value;
  let exchangeDollar = 0;
  exchangeDollar = exchangeRate * money;
  document.getElementById("totalMoney").innerHTML =
    exchangeDollar.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
}
function size() {
  let length = +document.getElementById("length").value;
  let width = +document.getElementById("width").value;
  let acreage = (length + width) * 2;
  let perimeter = length * width;
  document.getElementById(
    "titleCal"
  ).innerHTML = ` <p>Chu Vi:${acreage} ---- Diện tích:${perimeter} </p>
  `;
}
function sum() {
  let m = +document.getElementById("number").value;
  let m1 = Math.floor(m / 10);
  let m2 = m % 10;
  let result = m1 + m2;
  document.getElementById("result").innerHTML = result;
}
//conf icon
