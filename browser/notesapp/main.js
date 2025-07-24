const daysGR = ['Κυριακή', 'Δευτέρα' , 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthGR = ['Ιανουαρίου', 'Φεβρουαρίου' , 'Απριλίου', 'Μαϊου', 'Ιουνίου','Ιουλίου' ,'Αυγούστου' , 'Σεπτέμβρη' , 'Οκτώβρη' ,'Δεκέμβρη']

let notes = []
let count = []

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(() => printGrDate(), 1000)
    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertHandler({key: count + 1 , note: document.querySelector('#inputNote').value.trim(), softDeleted: false})
    })
    
    this.document.querySelector('#inputNote').addEventListener('keyup' , function() {
        if (e.key === 'Enter') {
            onInsertHandler({key: count + 1 , note: e.target.value.trim(), softDeleted: false})
        }
    })
})
