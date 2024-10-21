export function add(numbers) {

    // Empty string 
    if (numbers === "") {
        return 0;
    }
    //single number
    if (!isNaN(numbers)) {
        return parseInt(numbers, 10); // Convert the string to a number
    }
    

}
