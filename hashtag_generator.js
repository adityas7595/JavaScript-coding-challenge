const hash = (arr) => {
  if (arr == "") {
    return false;
  }
  arr = arr.split(" ");
  let result = arr.map((CustomElement) => {
    return CustomElement.replace(
      CustomElement[0],
      CustomElement[0].toUpperCase()
    );
  });
  result = result.join("");
  return "#" + result;
};

let array = "my name is aditya";
console.log(hash(array));
