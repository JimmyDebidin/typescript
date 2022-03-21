function hello(name: string) {
  console.log("Hello " + name);
}

var firstName = "bob";

hello(firstName);
hello(firstName + " marley");

function concat(a: string, b: string): string {
  return a + b;
}

var ds = concat("Donkey", concat("School", "!"));
console.log(ds);
