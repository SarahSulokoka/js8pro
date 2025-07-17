function createCounter() {
    let count = 0;

    return {
        increment: function increment() {
            count++;
        },

        getCount: function getCount() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());



function calculator() {
    let memory = 0 

    return function add(a, b) {
        memory = a + b 
        return memory;
    }
}

// const myAdd = calculator();
// console.log(myAdd(3,10));
// console.log(myAdd(10,30));    //output = 40 



function calculator() {
    let memory = 0;

    return function add(a, b) {
        memory += a + b; // Add to the previous value (accumulate)
        return memory;
    };
}

const myAdd = calculator();
myAdd(3, 10);  // 13 (3 + 10)
myAdd(10, 30); // 53 (13 + 10 + 30)
console.log(myAdd(0, 0)); // Output: 53 (no change)