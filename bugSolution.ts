function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Modify the function to accept an array of strings.
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user)); //This will work correctly because the function now accepts an array of strings.

//Solution 2: Modify the call to the function to pass a single string
console.log(greeter(user[0])); //This will work correctly because it is now passing a single string to the function.