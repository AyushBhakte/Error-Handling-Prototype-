function convertToNumber(str) {
    const number = parseFloat(str);
    
    // Check if the conversion resulted in NaN (Not a Number)
    if (isNaN(number)) {
        return "Invalid number";
    }
    
    return number;
}

// Example usage:
console.log(convertToNumber("123"));      // Output: 123
console.log(convertToNumber("abc"));      // Output: "Invalid number"
