const longest = (arr) => {
  if (arr == "") {
    return false;
  }
  const result = arr.sort((a, b) => {
    return b.length - a.length;
  });
  return result;
};

const longest1 = (arr) => {
    if (arr == "") {
        return false;
    }
    
    let largestElement = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > largestElement.length){
            largestElement = arr[i];
        }
    }
    return largestElement;
}

let array = ["Aditya", "Singh", "Laptop", "Data structure"];
console.log(longest(array));
