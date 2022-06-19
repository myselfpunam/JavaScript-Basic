console.log(1);
console.log('Good morning');

var busTicket = 10;
var mobile= 12;
console.log(busTicket,mobile);
console.log(typeof mobile); /* typeof referce to variable type */

var name="Punam Bhuyan"; /* when you are declare something alphabatic,then you need to use "" or '' this. */
console.log(name);
console.log(typeof name); /* typeof referce to variable type */

var ishot=true;  /* No need to use "" this bcz true or false is a JS keyword. */
console.log(ishot);
console.log(typeof ishot);

var name= 'Punam Bhuiyan'
console.log(name.toLowerCase()); /* .toLowerCase use for make small latter*/

var promise="i will work hard" ;
console.log(promise.toUpperCase()); /* .toUpperCase use for make capital latter */

var aim="Want to be a Developer"
console.log(aim.indexOf('b')); /* .indexOf use for find position of the word or later . N:B: Here counting is start from 0 */

var address='Dhaka Bangladesh'
console.log(address.split('a')); /* .split use for vanish the word and make a break */

var number= -15;
var result= Math.abs(number); /* Math.abs() use for define is it positive or negative ,its only print positive value */
console.log(result);

var number2= 15.44;
var result2=Math.round(number2); /* Math.round() use for deny fraction number and print only round figure */
console.log(result2);

var number3= 15.09;
var result3=Math.ceil(number3); /* Math.ceil() use for deny fraction number and print only rounded figure and definetely do +1 */
console.log(result3);

var number4= 15.09;
var result4=Math.floor(number4); /* Math.ceil() use for deny fraction number and print only rounded figure and definetely onlu show the main figure */
console.log(result4);

var roll=Math.random() * 100; /* Math.random() * 100 use for print random number .without 100 its only show 0.1-0.9 so for big number need to use * 100 */
var lotari= Math.round(roll); /* here Math.round() use for deny fraction number */
console.log(lotari);

var date=new Date(); /* for watch today date and time */
console.log(date);