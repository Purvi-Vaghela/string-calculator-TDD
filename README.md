# 🧮 String Calculator

Welcome to the **String Calculator** project—a simple yet powerful tool designed to demonstrate the principles of Test-Driven Development (TDD) in Node.js. This calculator processes a string of numbers, sums them up, and showcases how clean code and robust testing can lead to reliable software.

## 🚀 Features

- **Flexible Input:** Add numbers from a string of comma-separated values.
- **Edge Case Handling:** Supports empty strings, single numbers, and multiple numbers seamlessly.
- **Custom Delimiters:** Easily define custom delimiters for more complex input scenarios.
- **Error Handling:** Gracefully handles errors, including negative numbers, with informative messages.
- **Test-Driven:** Developed with TDD using Mocha and Chai, ensuring reliability from the ground up.

## 🛠 Installation

Clone the repository to your local machine and install the necessary dependencies:

```bash
git clone https://github.com/your-username/string-calculator.git
cd string-calculator
npm install
```

## 🛠 Requirements
The `add()` method should handle the following cases:

1. **Basic Functionality:**
   - An empty string `""` returns `0`.
   - A single number (e.g., `"1"`) returns that number.
   - Two numbers separated by a comma (e.g., `"1,2"`) return their sum.

2. **Multiple Numbers:**
   - The `add()` method should handle any number of numbers, separated by commas.

3. **New Lines:**
   - The `add()` method should handle new lines as delimiters between numbers. For example, `"1\n2,3"` should return `6`.

4. **Custom Delimiters:**
   - Support custom delimiters specified at the beginning of the string. For example, `"//;\n1;2"` should return `3` where the delimiter is `';'`.

5. **Negative Numbers:**
   - The `add()` method should throw an exception with the message `"negatives not allowed"` followed by the negative number(s) if any negative numbers are included in the input. For example, `add("1,4,-1")` should throw an exception with `"negatives not allowed: -1"`.

6. **Large Numbers:**
   - Numbers larger than 1000 should be ignored in the summation. For instance, adding `2 + 1001` should return `2`.

## 📜 Usage

To use the `StringCalculator` function, require the module and call the `add()` method with a string argument representing the numbers to be summed.

### 💻 Example


```javascript
const StringCalculator = require('./StringCalculator');
const calculator = new StringCalculator();
const result = calculator.add("1,2,3");
console.log(result); // Output: 6

