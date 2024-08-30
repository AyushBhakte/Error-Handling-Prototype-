class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Example usage:
const myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar.getDescription());  
