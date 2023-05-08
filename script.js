//1
function largestofFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
       let largest = arr[i][0];
       for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
             largest = arr[i][j];
            }
        }
        results[i] = largest;
    }
    return results;
}
document.write(largestofFour([[4,9,3,1], [13, 35, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//2
function bouncer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != true) {
        arr.splice(i, 1);
    }
    if (isNaN(arr[i])) {
        arr.splice(i, 1);
    }
   
  }
  return arr;
} 
document.write("<p>" + bouncer([1, null, 2, NaN, undefined]));

//3
function franklenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}
document.write("<p>" + franklenSplice([1,2,3,4], [], 0));

//4
 function getIndextoIns(arr, num) {
    arr.sort();
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            index++
        }
    }
    return index;
 }
 document.write("<p>" + getIndextoIns([3, 20, 5, 3], 5));

