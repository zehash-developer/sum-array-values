// ES6 implementation of returning sum of all values in an array.
// Unlike Java or C which have specific floating point types of size 2^32 -
// JS standard let/var can support 2^53 values
const sumArrayValues = (ar) => {
  // Sum = 0 initial value.
  let sum = 0;

  // Simple loop that goes over each value in the array and adds it to sum
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  // return sum.
  return sum;
};
