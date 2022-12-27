const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        console.log(panel.classList)
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}