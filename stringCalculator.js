export function add(numbers) {
  // Empty string returns 0
  if (numbers === "") {
    return 0;
  }

  let delimiter = ',';
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    delimiter = parts[0].substring(2);
    numbers = parts.slice(1).join('\n');
  }
  // negative num not allowed 
  numbers = numbers.replace(/\n/g, delimiter);
  const numList = numbers.split(delimiter).map(num => parseInt(num));
  
  const negatives = numList.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error("Negative numbers not allowed: " + negatives.join(', '));
  }
  
  return numList.reduce((sum, num) => sum + num, 0);
}

// console.log(add("//;\n1;2"));  // Should return 3
// console.log(add("1,-2,-3"));  // Should throw an error
