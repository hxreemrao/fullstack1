let units = 250;
// Determine the rate per unit
let rate;
if (units >= 1 && units <= 100) {
  rate = 10;
} else if (units > 100 && units <= 200) { // logical && : both must be true
  rate = 15;
} else if (units > 200) {
  rate = 20;
} else {
  rate = 0; // invalid input (0 or negative units)
}
// Bill = units x rate
let bill = units * rate;
document.getElementById("output").innerHTML =
  "Units Consumed: " + units + "<br>" +
  "Rate: Rs. " + rate + " per unit<br>" +
  "<b>Final Bill: Rs. " + bill + "</b>";
/* Critical Thinking: 250 units is above 200, so the rate is Rs. 20/unit.
   Bill = 250 x 20 = Rs. 5,000 */

   function additem(e) {
    e.preventDefault();
    let item = document.getElementById("searchinput").value;
    let item1 = document.createElement("li");
    item1.textContent = item;
   document.getElementById("searchlist").appendChild(item1);
  }