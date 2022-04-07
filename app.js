console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const plus = (num) => {
    return (plusNum) => num + plusNum;
};

const plus15 = plus(10);

console.log(plus15(10));

const numbers = [8, 8, 5, 3, 2];

console.log(plus15(...numbers));

const plus18 = plus(18);

console.log(plus18(18));

console.log(plus18(...numbers));