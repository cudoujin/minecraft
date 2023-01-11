const summaries = document.getElementsByTagName('summary')

for (let s of summaries) {
    s.addEventListener('click', function(e) {
        e.preventDefault()
        let d = e.currentTarget.parentElement
        
        if (d.classList.contains('closing')) {
            d.setAttribute('open', '')
            d.classList.remove('closing')
            clearTimeout(d.closingTimer)
            d.style.maxHeight = d.scrollHeight + "px";
        } else if (d.getAttribute('open') === null) {
            d.setAttribute('open', '')
            d.style.maxHeight = d.scrollHeight + "px";
        } else {
            d.classList.add('closing')
            d.style.maxHeight = "26px";
            d.closingTimer = setTimeout(() => {
                d.classList.remove('closing')
                d.removeAttribute('open')
            }, 400);
        }
    })
}

const details = document.getElementsByTagName('details')

/* open details that has 'open' attr initially */
for (let d of details) {
    if (d.getAttribute('open') !== null) {
        d.style.maxHeight = d.scrollHeight + "px";
    }
}
