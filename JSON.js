// JSON: JavaScript Object Notation

// JSON is how we store and transfer data between systems.
// It looks almost exactly like JavaScript objects!

// What is JSON?

// JSON is JavaScript Object Notation
// It's a text format for storing data that:
/*
- Looks like JavaScript objects
- Is just a string (text)
- Can be sent over the Internet
- Can be saved to files

JavaScript Object vs JSON:

JavaScript Object (in code):
*/
const player = {
    name: "Alice",
    level: 5,
    inventory: ["sword", "potion"]
};

// JSON (as text/string)
/*
{
    "name": "Alice",
    "level": 5,
    "inventory": ["sword", "potion"]
}
*/
// Key differences:
// JSON property names MUST be in double quotes: "name"
// JSON is just a string, not a real object

// Converting Object <-> JSON

// JavaScript Object -> JSON String

//reusing player from above
const jsonString = JSON.stringify(player);
console.log(jsonString); // '{"name":"Alice","level":5,"inventory":["sword","potion"]}'

console.log(typeof jsonString); // "string"

// JSON String -> JavaScript Object
// const jsonString = '{"name":"Alice","level":5,"inventory":["sword","potion"]}';

// Convert to JavaScript object
// const player = JSON.parse(jsonString);

console.log(player.name);
console.log(player.level);
console.log(typeof player);