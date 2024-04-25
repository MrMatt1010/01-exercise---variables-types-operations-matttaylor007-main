// Initialise firstName to a string Bill
// NOTE: This won't be displayed on the web page yet
const firstName = "Bill";
// Initialise lastName to a string Murray
// NOTE: This won't be displayed on the web page yet
const lastName = "Murray";
// Initialise fullName to firstName and lastName combined, with a space in the middle
// NOTE: DO NOT just write "Bill Murray", read from the two variables above
const fullName = firstName + " " + lastName;
// Initialise email to a string billmurray@gmail.com
const email = "billmurray@gmail.com";
// Initialise age to a number 70
const age = 70;
// Initialise hasSeniorDiscount:
// - If age is 65 or above, it should be true
// - If age is below 65, it should be false
// NOTE: DO NOT write a JavaScript 'if' statement
const hasSeniorDiscount = age >= 65;
// Initialise vegetarian to false
const vegetarian = false;
// Initialise glutenFree to true
const glutenFree = true;
// Initialise hasDietaryRequirement:
// - If vegetarian or gluten free is true, it should be true
// - If both vegetarian or gluten free are false, it should be false
// NOTE: DO NOT write a JavaScript 'if' statement
const hasDietaryRequirement = vegetarian === true || glutenFree === true;
// Initialise bookingReference to a string ABC12345
const bookingReference = "ABC12345";
// Initialise departureDate to a string 21/12/20
const departureDate = "21/12/20";
// Initialise departureTime to a string 07:25
const departureTime = "07:25";
// Initialise departureAirport to a string AKL
const departureAirport = "AKL";
// Initialise seniorDiscountPercentage to a number 0.05
const seniorDiscountPercentage = 0.05;
// Initialise flightCost to a number 1999
const flightCost = 1999;
// Initialise airportTax to a number 23
const airportTax = 23;
// Initialise totalCost to flightCost plus airportTax
const totalCost = flightCost + airportTax;
// Initialise totalDiscount to the percentage of seniorDiscountPercentage from totalCost
const totalDiscount = seniorDiscountPercentage * totalCost;
// Initialise totalWithDiscount to totalCost minus totalDiscount
const totalWithDiscount = totalCost - totalDiscount; 
