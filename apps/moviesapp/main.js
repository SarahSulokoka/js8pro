$(function() {
    let debounceTimeout = null 
    $('#searchInput').on('input', function() { //fires every time output value changes 
        clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500) //miliseconds
        
    }) 

    $('#showMore')
})