const DEFAULT = 0;
let counter = DEFAULT //state - data 

window.addEventListener('DOMContentLoaded', function() {
    this.window.document.querySelector("#btnDecr").addEventListener('click', () => onDecreaseClicked())
    
    this.window.document.querySelector("#btnReset").addEventListener('click', () => onResetClicked())
    
    this.window.document.querySelector("#btnIncr").addEventListener('click', () => onIncreaseClicked())
  })


 function onDecreaseClicked() {
    decreaseCounter()
}
 function onResetClicked() {
   resetCounter()
}
 function onIncreseClicked() {
   increaseCounter()
}
