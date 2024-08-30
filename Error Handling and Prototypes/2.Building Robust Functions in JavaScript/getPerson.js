function getPerson(person) {
    try {
        // Check if person is an object and has the required properties
        if (typeof person !== 'object' || !person.hasOwnProperty('name') || !person.hasOwnProperty('age')) {
            throw new Error("Invalid parameter type");
        }

        // Return the formatted string
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        // Return the error message if an error occurs
        return error.message;
    }
}

// Example usage:
console.log(getPerson({ name: "John", age: 30 }));  
console.log(getPerson({ name: "Jane" }));           
console.log(getPerson("Not an object"));            
