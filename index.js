const array = [1, 2, 3, 1, 5, 6, 1, 1, 2, 5];
const result = array.filter(
  (elem, index) =>
    array.indexOf(elem) !== index && 
    array.lastIndexOf(elem) === index
);
console.log(result);

function getDuplicatesNums(arr) {
  return arr.filter(
    (elem, index) =>
    arr.indexOf(elem) !== index && 
    arr.lastIndexOf(elem) === index
  );
}
const arr = [1, 2, 3, 1, 5, 6, 1, 2, 5];
console.log(getDuplicatesNums(array));
