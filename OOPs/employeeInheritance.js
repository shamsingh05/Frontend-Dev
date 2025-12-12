class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} is managing the ${this.department} department`;
  }
}

const e1 = new Employee("Rahul", "IT");
const m1 = new Manager("Suman", "HR");

console.log(e1.work());
console.log(m1.work()); // overridden → polymorphism
