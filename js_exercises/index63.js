// Exercise 63
// Create a new index63.js file
// Define year variable and assign a number between 2006 and 2017
// Define champion variable and assing a value between 2006 and 2017
// Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
// If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
// Use a switch statement to check for the selected year value `` 2017 - Pittsburgh Penguins 2016 - Pittsburgh Penguins 2015 - Chicago Blackhawks 2014 - Los Angeles Kings 2013 - Chicago Blackhawks 2012 - Los Angeles Kings 2011 - Boston Bruins 2010 - Chicago Blackhawks 2009 - Pittsburgh Penguinas 2008 - Detroit Red Wings 2007 - Anaheim Ducks 2006 - Carolina Hurricanes
// * Try all the posible cases/scenarios (even the error message) by changing the year value

// 2006 -2017
let year = 2008;
let champion = null;

switch (year) {
    case 2006:
        year = 2006;
        champion = 'Carolina Hurricanes';
        message = year + ' - ' + champion;
        break;
    case 2007:
        year = 2007;
        champion = 'Anaheim Ducks';
        message = year + ' - ' + champion;
        break;
    case 2008:
        year = 2008;
        champion = 'Detroit Red Wings';
        message = year + ' - ' + champion;
        break;
    case 2009:
        year = 2009;
        champion = 'Pittsburgh Penguinas';
        message = year + ' - ' + champion;
        break;
    case 2010:
        year = 2010;
        champion = 'Chicago Blackhawks';
        message = year + ' - ' + champion;
        break;
    case 2011:
        year = 2011;
        champion = 'Boston Bruins';
        message = year + ' - ' + champion;
        break;
    case 2011:
        year = 2011;
        champion = 'Boston Bruins';
        message = year + ' - ' + champion;
        break;
    case 2012:
        year = 2012;
        champion = 'Boston Bruins';
        message = year + ' - ' + champion;
        break;
    case 2013:
        year = 2013;
        champion = 'Boston Bruins';
        message = year + ' -' + champion;
        break;
    case 2015:
        year = 2015;
        champion = 'Boston Bruins';
        message = year + ' - ' + champion;
        break;
    case 2016:
        year = 2016;
        champion = 'Boston Bruins';
        message = year + ' - ' + champion;
        break;
    case 2017:
        year = 2017;
        champion = 'Boston Bruins';
        message = year + ' - ' + champion;
        break;
    default:
        message = 'sorry, please try a different year'
}
console.log(message);