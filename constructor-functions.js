function Person(name) {
    this.name = name
    
}

const person = new Person('Alice')

function Counter() {
    this.count = 0; //public by default 

    this.increment = function() {
        this.count++;
    }
    
    this.getCount = function() {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount());
