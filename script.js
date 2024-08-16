function reverseArray(arr) {
  const copyArr = [...arr];
  return copyArr.reverse();
} //przykładowy input:

const result = reverseArray([1, 2, 3, 4, null]);
console.log(result);
