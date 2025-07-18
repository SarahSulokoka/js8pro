// document.getElementById("helloTxt").innerHTML = "Hello Coding Factory"

const h1DOM = document.getElementById('helloTxt')
h1DOM.innerHTML = h1DOM.innerHTML + 'Coding Factory'
h1DOM.style.backgroundColor = "#ff0000"

const pDOM = document.createElement('p')
pDOM.innerHTML = "I am a paragraph"
pDOM.classList.add('borderBlack')

document.body.appendChild(pDOM)