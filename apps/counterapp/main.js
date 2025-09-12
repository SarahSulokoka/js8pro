const DEFAULT = 0;
let counter = DEFAULT //state - data 


//Controller

window.addEventListener('DOMContentLoaded', function() {
    this.window.document.querySelector("#btnDecr").addEventListener('click', () => onDecreaseClicked())
    
    this.window.document.querySelector("#btnReset").addEventListener('click', () => onResetClicked())
    
    this.window.document.querySelector("#btnIncr").addEventListener('click', () => onIncreaseClicked())
  })


  //Model

 function onDecreaseClicked() {
    decreaseCounter()
}
 function onResetClicked() {
   resetCounter()
}
 function onIncreaseClicked() {
   increaseCounter()
}

function decreaseCounter() {
    counter--;
    render()
}

function resetCounter() {
    counter = DEFAULT;
    render()
}

function increaseCounter() {
    counter++;
    render()
}


function render() {
    const counterDOM = document.querySelector('#counter')
    counterDOM.textContent = counter
    styleCounter(counterDOM)
}

function styleCounter(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter === 0)
}  

