/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

import  Validators from '../scripts/form-validation'


const triggers = {
    'card' : document.getElementById('card'),
    'cvv': document.getElementById('cvv')
}

const val = new Validators()

triggers.card.addEventListener('keyup', () => {
    let num = triggers.card.value;
    console.log(val.validateCardNumber(num))
    
})

triggers.cvv.addEventListener('keyup', () => {
    let cvvNum = triggers.cvv.value;
    console.log(val.validateCVV(cvvNum))
})