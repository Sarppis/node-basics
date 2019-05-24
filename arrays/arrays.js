let arr  = ['cat', 'dog', 'ferret'];

//1. outputs the elements of the array given

function logArray(arr){
for(let i=0; i< arr.length; i++)
console.log (arr[i]);
}
/*logArray(['cat', 'dog', 'ferret']);*/

//2.returns a clone of the array given
function cloneArray (arr) {
  let clone = arr.slice();
  return arr.slice;
};
console.log(arr.slice)

//3 returns the first element of the array given
function firstElement(arr) {
  console.log(arr[0]);
};

//4.returns the last element of the array given
function lastElement (arr) {
  console.log(arr.pop());
}

function lastElement (arr) {
  let last = arr[arr.length - 1];
  console.log(lastElement(last));
}

//5.returns the n first elements of the array. If n is negative, zero or undefined, it returns an empty array
function nFirstElements() {

}

//6. returns the n first elements of the array given. If n is beyond array limits, zero or undefined, it returns an empty array
function nLastElements() {

}

//7.returns the elements of the array given in a string separated with the separator given as argument
function toStringWithSeparator() {
  console.log(arr.toString());
}

//8.returns the sum of squares of the elements of a numeric vector.
function sumSquaresOfVector() {
  let sum = 0,
      i = array.length;
  while (i--) {
    sum += Math.pow(array[i], 2);
  }return sum;
}
console.log(sum_sq([0, 1, 2, 3, 4]));

//9.returns the average of the elements of a numeric vector
function averageOfVector() {
  let i = 0;
  let total = 0;
  let  grades = 0;
  let average = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var average = total / grades.length;

}
