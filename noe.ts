class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  tellMyAge = () => {
    console.log(`I am ${this.age} years old`);
  };
  tellMyName = () => {
    console.log(`I am ${this.name}`);
  };
}

const Person1 = new Person("John", 40);
Person1.tellMyAge();
Person1.tellMyName();

const Person2 = new Person("Mary", 35);
Person2.tellMyAge();
Person2.tellMyName();

