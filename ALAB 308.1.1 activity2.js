// this is my try to the part 2:

// How many gallons of fuel will you need for the entire trip?
const mybudjet = 175; // i have 175$ for fuelling
const fuelaveragecost = 3;
const myfuelvolume = mybudjet / fuelaveragecost;
console.log(
  "the driver can buy  " +
    myfuelvolume +
    " galloans of fuel for this trip with his fuel budjet"
);

// the answer it depends of the vilocity of
// the driver

// first case: the vlocity of the driver is 55miles/gallon
// i have 175$ for fuelling

// sdfghjk
console.log("first case");

const velocity1 = 55;
const fuelconsumption1 = 30;
const triplength1 = myfuelvolume * fuelconsumption1; // triplength1 is how many miles can the driver run with vilocity1
const triptime1 = 1500 / 55;
console.log(" with a vilocity 55 miles/hour");
console.log(
  " the driver can run " + triplength1 + " miles before the fuel runs out "
);
let torun1500miles = (1500 * myfuelvolume) / triplength1;
console.log(
  "the driver will consume " +
    torun1500miles +
    " gallons during the trip, (the fuel-budjet can cover this trip)   "
);
console.log(
  " in this case the driver will take  " +
    triptime1 +
    "  hours to arrive at his final destination"
);
console.log("   ---------------------------------  ");

// second case: the vlocity of the driver is 60miles/gallon
// he have 175$ for fuelling

console.log("second case");

const velocity2 = 60;
const fuelconsumption2 = 28;
const triplength2 = myfuelvolume * fuelconsumption2; // triplength1 is how many miles can the driver run with vilocity1
const triptime2 = 1500 / 60;
console.log(" with a vilocity 60 miles/hour");
console.log(
  " the driver can run " +
    triplength2 +
    " miles miles before the fuel runs out "
);
let run1500miles = (1500 * myfuelvolume) / triplength2;
console.log(
  "the driver will consume " +
    run1500miles +
    " gallons during the trip (the fuel-budjet can cover this trip)"
);
console.log(
  " in this case the driver will take  " +
    triptime2 +
    " hours to arrive at his final destination"
);
console.log("   ---------------------------------  ");

// last case: the vlocity of the driver is 75miles/gallon
// he have 175$ for fuelling

console.log("last case");

const velocity3 = 75;
const fuelconsumption3 = 23;
const triplength3 = myfuelvolume * fuelconsumption3; // triplength1 is how many miles can the driver run with vilocity1
const triptime3 = 1500 / 75;
console.log(" with a vilocity 75 miles/hour");
console.log(
  " the driver can run " +
    triplength3 +
    " miles miles before the fuel runs out "
);
let gorun1500miles = (1500 * myfuelvolume) / triplength3;
console.log(
  "the driver will need " +
    gorun1500miles +
    " gallons to finish the trip (the fuel-budjet can not cover this trip) "
);
console.log(
  " in this case the driver will take  " +
    triptime3 +
    " hours to arrive at his final destination if he refuel his car and continue with the same speed "
);
console.log("   ---------------------------------  ");

console.log(
  "the best choice is to drive with a speed 60m/h  to reduce the fuel consumption and arrive in time "
);


