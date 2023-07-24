const array = [1, 2, 3, 1, 5, 6, 1, 1, 2, 5]; 
const result = array.filter(
  (elem, index) =>
    array.indexOf(elem) !== index && 
    array.lastIndexOf(elem) === index
);
console.log(result); // [1, 2, 5]

function getDuplicatesNums(arr) {
  return arr.filter(
    (elem, index) =>
    arr.indexOf(elem) !== index && 
    arr.lastIndexOf(elem) === index
  );
}
const arr = [1, 2, 3, 4, 4, 5, 5, 6, 6];
const arr1 = [1, 2, 3];
console.log(getDuplicatesNums(arr)); // [4, 5, 6]
console.log(getDuplicatesNums(arr1)); //[]
