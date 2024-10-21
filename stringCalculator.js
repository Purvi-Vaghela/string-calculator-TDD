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
      const numArray = numbers.split(",");
    //   return numArray.reduce((sum, num) => sum + parseInt(num), 0);

    // sum of multiple numbers having new line as delimiter
     const numHavingNewLineDelimiter = numbers.split(/[\n,]/);
     return numHavingNewLineDelimiter.reduce((sum, num) => sum + parseInt(num), 0);

     //
}

// console.log(add("1\n2,3"));