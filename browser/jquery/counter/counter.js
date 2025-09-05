const DEFAULT= 0
let counter = DEFAULT //state

$(function() {
    $(`#btnDecr`).on('click', () => onDecreaseClicked())
    $(`#btnReset`).on('click', () => onResetClicked())
    $(`#btnIncr`).on('click', () => onIncreaseClicked())
})

function onDecreaseClicked() {
    decreaseCounter()
}

function onResetClicked() {
    resetCounter() 
}

function onIncreaseClicked() {
    increaseCounter()
}

//model methods 
function decreaseCounter() {
    counter--
    render()
}

function resetCounter() {
    counter = DEFAULT
    render()
}

function increaseCounter() {
    counter++
    render()
}

function render() {
    const $counter = $(`#counter`)

    $counter.text(counter)
    styleCounterElement($counter)
}

function styleCounterElement($counter) {
    $counter.toggleClass('color-green', counter > 0)
    $counter.toggleClass('color-red', counter < 0)
    $counter.toggleClass('color-black', counter === 0)

}