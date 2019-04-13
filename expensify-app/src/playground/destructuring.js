// const person = {
//     name: "Rocky",
//     age: 32,
//     location: {
//         city: "Rogers",
//         temperature: 45,
//     },
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temperature: temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin",
//     },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

const address = [
    "1299 S Juniper Street",
    "Philadelphia",
    "Pennsylvania",
    "19147",
];

const [street, city, state, zipcode] = address;

console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);
