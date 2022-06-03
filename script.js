function daysBetween (day1, day2) { //function takes in 2 dates
    let match1 = day1.match(/\d+/); //regexp metacharacter searches for the first pair of digits
    let match2 = day2.match(/\d+/);
    return Math.abs(match1 - match2); //returns absolute value.
}

console.log(daysBetween("March 5, 1996", "March 20, 1996"));