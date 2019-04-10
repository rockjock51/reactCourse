// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: "Rocky",
    cities: ["Rogers", "North Bend", "Malvern"],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    },
};

const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    },
};

console.log(multiplier.multiply());
