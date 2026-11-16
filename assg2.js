// units used this month
let units = 180;
 
// find the rate per unit
let rate;
if (units >= 1 && units <= 100) {
  rate = 10;
} else if (units > 100 && units <= 200) {
  rate = 15;
} else if (units > 200) {
  rate = 20;
} else {
  rate = 0; // wrong input (0 or negative units)
}
 
// bill = units x rate
let bill = units * rate;
 
document.getElementById("output").innerHTML =
  "Units Consumed: " + units + "<br>" +
  "Rate: Rs. " + rate + " per unit<br>" +
  "<b>Final Bill: Rs. " + bill + "</b>";