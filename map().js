// What is map()?
/*
map() goes through each item in an array and transforms it into something else.
Think of it like a factory assembly line:
- Items go in (input)
- Each item gets transformed (process)
- New items come out (output)

Super Simple Example:
*/
const numbers = [1, 2, 3];

// For EACH number, multiply it by 10
const result = numbers.map(num => num * 10);

console.log(result); // [10, 20, 30]

// What happened?

/*
1. Look at first number: 1 -> multiply by 10 -> 10
2. Look at second number: 2 -> multiply by 10 -> 20
3. Look at third number: 3 -> multiply by 10 -> 30
4. Put them all in a new array: [10, 20, 30]

Read the following
numbers.map(num => num * 10)
as
"For each num in numbers, give me num * 10"

Another example:

const words = ["hello", "world"];

For EACH word, make it uppercase
const uppercase = words.map(word => word.toUpperCase());

console.log(uppercase); // ["HELLO", "WORLD"]

What happened?

1. Take "hello" -> make it uppercase -> "HELLO"
2. Take "world" -> make it uppercase -> "WORLD"
3. New array: ["HELLO", "WORLD"]

Now with objects:
Objects have properties you can access with . :
const person = { name: "Alice", age: 25 };

console.log(person.name); // "Alice"
console.log(person.age); // 25

When you have an array of objects:

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

For EACH person, get their name
const names = people.map(person => person.name);

console.log(names); // ["Alice", "Bob"]

What happened?

1. Look at first person: { name: "Alice", age: 25 } -> get name -> "Alice"
2. Look at second person: { name: "Bob", age 30 } -> get name -> "Bob"
3. New array: ["Alice", "Bob"]

Let's trace through it slowly:

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const names = people.map(person => person.name);

Step by Step:
1. map() looks at the first object: { name: "Alice", age: 25 }
2. We call it person (just a variable name, could be anything)
3. We say: give me person.name which is "Alice"
4. map() puts "Alice" in the new array
5. map() looks at the second object: { name: "Bob", age: 30 }
6. We call it person again.
7. We say: give me person.name which is "Bob"
8. map() puts "Bob" in the new array
9. Final result: ["Alice", "Bob"]
