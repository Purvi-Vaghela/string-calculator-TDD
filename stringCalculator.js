export function add(numbers) {

    // Empty string 
    if (numbers === "") {
        return 0;
    }
    //single number
    if (!isNaN(numbers)) {
        return parseInt(numbers, 10); // Convert the string to a number
    }
      // sum of two numbers 
    //   const numArray = numbers.split(",");
    //   return numArray.reduce((sum, num) => sum + parseInt(num), 0);

    // sum of multiple numbers having new line as delimiter
     const numHavingNewLineDelimiter = numbers.split(/[\n,]/);
    //  return numHavingNewLineDelimiter.reduce((sum, num) => sum + parseInt(num), 0);
    
    let delimiter = /[\n,]/;
     //custom delimiter
       //"//;\n1;2" :-->>  first part: //;  second: 1;2 
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(`[${parts[0].slice(2)}]`);
    numbers = parts[1];
}
    const numArray = numbers.split(delimiter);
     return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add("//;\n1;2"));