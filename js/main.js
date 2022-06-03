// declaring variables

let main = document.querySelector('.viewOne')
let review = document.querySelector('.review')
let btn = document.querySelector('#btn')
let result = document.getElementById('noOfSelection')

// add event listener to submit button
// toggle main and review sections

btn.addEventListener('click', function btnClick() {
    main.classList.add('hide')
    review.classList.toggle('hide')
    valueSelected ()
})

// setting span selections to call its specific value
function valueSelected  (e){
    let spanValue = e.getAttribute('value')
    result.textContent = spanValue
}
