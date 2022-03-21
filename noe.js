"use strict";
class Person {
    constructor(name, age) {
        this.tellMyAge = () => {
            console.log(`I am ${this.age} years old`);
        };
        this.tellMyName = () => {
            console.log(`I am ${this.name}`);
        };
        this.age = age;
        this.name = name;
    }
}
const Person1 = new Person("John", 40);
Person1.tellMyAge();
Person1.tellMyName();
const Person2 = new Person("Mary", 35);
Person2.tellMyAge();
Person2.tellMyName();
//# sourceMappingURL=noe.js.map