export function add(numbers) {
  // Empty string returns 0
  if (numbers === "") {
    return 0;
  }

  // Default delimiter is comma and newline
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(`[${parts[0].slice(2)}]`);
    numbers = parts[1];
 
}

  // Split the numbers by the delimiter
  const numArray = numbers.split(delimiter);

  // Check for negative numbers
  const negatives = numArray.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw `Negative numbers not allowed: ${negatives.join(",")}`;
  }
  


 
}

// console.log(add("//;\n1;2"));
console.log(add("1,-2,3"));
