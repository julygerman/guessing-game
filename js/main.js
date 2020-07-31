//Cached Element Reference

// this is one way to link to the DOM 
// this works by selecting the id
const messageEl = document.getElementById('message');
 messageEl.textContent = 'BaNaNa'
 messageEl.style.fontFamily = 'sans-serif'


// this is the other method to link to the DOM
// this works by selecting the element

// const messageEl = document.querySelector('h1')
// messageEl.style.textAlign = 'center';

const goToG = document.getElementById('gLink')
goToG.href = 'www.google.com'
goToG.textContent = 'Visit Google'
goToG.style.color = 'white' 
goToG.style.fontFamily = 'sans-serif'

// Selects all elements named div
const divEls = document.querySelectorAll('div')

divEls.forEach((element) => {
    element.innerText ='taco';
    console.log(element)
})

const btn = document.querySelector('button')

// Add Event Listener
btn.addEventListener('click', function(evt){
    // Create a new Element in the Html
    const li = document.createElement('li');
    const inp = document.querySelector('input');

    li.textContent = inp.value;
    evt.target.innerText = "Now I'm a Taco Button";
    document.querySelector('ul').appendChild(li)
})

const ul = document.querySelector('ul');

ul.addEventListener('click', function(e){
    console.log(e.target)
})

