/* ARRAY CALL AND DECLEAR */
var classroll= [1175,1187,1166,1158,1199];
console.log(classroll)
console.log(classroll[3]); /* [3] refer to index number and print the index value.Here no.3 index value is 1158 */

/* CALL INDEX NUMBER */
var punamRoll=classroll[0]; /* define roll number for a specific human by call of  index number */  
console.log(punamRoll);

/*REWRITE INDEX */
classroll[1]= 1188 ; /* rewrite index value */
console.log(classroll);

/* CALL INDEX POSITION */
var position= classroll.indexOf(1166); /* .indexOf() use to know  index number */
console.log(position);

/* ADD AND REMOVE INDEX */
classroll.push(1215); /*push() use for add element into the array */
console.log(classroll);
classroll.unshift(1211,1212); /* .unshift() use for add element from the beginning */
console.log(classroll)
classroll.pop();/* pop() use for remove element into the array */
console.log(classroll);
classroll.shift();  /* .shift() use for remove element from the beginning */
console.log(classroll)

/*ARRAY LENGTH */
console.log(classroll.length); /* .length use for print array size or how many elments are there */

/*SLICE INDEX VALUE */
var newClass= classroll.slice(2); /* .slice() use for slice array ,here 2 refers to slice start from no 2 index*/
console.log(newClass);
var newCls=classroll.slice(2,5); /* .slice (start,end) use for slice array but start and end point define start point and end point of array */
console.log(newCls);
