class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Example usage:
const employee = new Employee("Ayush", "Software Engineer", 80000);
console.log(employee.getSalary());  
