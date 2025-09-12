$(function() {
    let debounceTimeout = null 
    $('#searchInput').on('input', function() { 
        clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500) 
    }) 

    $('#showMore').on('click', function(e) {
        e.preventDefault()
        onShowMoreClicked()
    })
})

function getMovie(title) {
    if (!title) return 

    onBeforeSend() 
    fetchMovieFromApi(title)
}

function fetchMovieFromApi(title) {
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=6c4f5282`)
    .then(response => {
        handleResults(response.data)
    })
    .catch(error => console.error('Error: ' + error))
}

function handleResults(data) {
    if (data.Response === 'True') {
        render(data)
        hideComponent('#waiting')
    } else if (data.Response === 'False') {
        hideComponent('#waiting')
        showComponent('#notFound')
    }
}

function onBeforeSend() {
    showComponent('#waiting')
    hideComponent('#movie')
    hideComponent('#notFound')
    hideComponent('#error')
} 
