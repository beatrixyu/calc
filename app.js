let billAmount = document.getElementById("bill-amount");
let percentTip = document.getElementById("percentage-tip");
let tipAmount = document.getElementById("tip-amount");
let total = document.getElementById("total-amount");
let calculate = document.getElementById("calculate");

// //Method 1: addEventListener method
// console.log(billAmount, percentTip);
// calculate.addEventListener("click", function(e) {
//   //jQuery disable button on click to prevent multiple form submits
//   e.preventDefault();
//   //make a class for number
//   billAmount = Number(billAmount.value);
//   percentTip = Number(percentTip.value);
//   console.log(billAmount, percentTip);

//   if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
//     alert("Please enter a valid Bill Amount");
//   } else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null) {
//     alert("Please enter a valid Tip Percentage");
//   } else {
//     let calculatedTip = (percentTip / 100) * billAmount;
//     tipAmount.value = "€" + calculatedTip;

//     let calculatedTotal = billAmount + calculatedTip;
//     total.value = "€" + calculatedTotal;
//   }
// });

// //Method 2: onclick function
// calculate.onclick = calFunction;

// function calFunction() {
//   billAmount = Number(billAmount.value);
//   percentTip = Number(percentTip.value);
//   console.log(billAmount, percentTip);

//   if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
//     alert("Please enter a valid Bill Amount");
//   } else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null) {
//     alert("Please enter a valid Tip Percentage");
//   } else {
//     let calculatedTip = (percentTip / 100) * billAmount;
//     tipAmount.value = "€" + calculatedTip;

//     let calculatedTotal = billAmount + calculatedTip;
//     total.value = "€" + calculatedTotal;
//   }
// }

// //Method 3: onclick function in the html button tag
// function calculateFunc() {
//   billAmount = billAmount.value;
//   percentTip = percentTip.value;
//   console.log(billAmount, percentTip);

//   if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
//     alert("Please enter a valid Bill Amount");
//   } else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null) {
//     alert("Please enter a valid Tip Percentage");
//   } else {
//     let calculatedTip = (percentTip / 100) * billAmount;
//     tipAmount.value = "€" + calculatedTip;

//     let calculatedTotal = billAmount + calculatedTip;
//     total.value = "€" + calculatedTotal;
//   }
// }

//Method 4

function calculateFunc() {
  //   let tipAmount = parseFloat(billAmount.value * (percentTip.value / 100));
  //   let total = parseFloat(billAmount.value) + tipAmount;
  let tipAmount = Number(billAmount.value * (percentTip.value / 100));
  let total = Number(billAmount.value + tipAmount);
  document.getElementById("tip-amount").value = "€ " + tipAmount;
  document.getElementById("total-amount").value = "€ " + total;
}
