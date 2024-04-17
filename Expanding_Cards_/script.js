const panels = document.querySelectorAll('.panel')

console.log(panels[2])

panels.forEach( (panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses() //rimuovo tutti gli active per impedire che ce ne siano di più
        panel.classList.add('active')
    })
})


function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}