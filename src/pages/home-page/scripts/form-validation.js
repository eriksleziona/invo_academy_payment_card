
export default class Validators {

    validateCardNumber (creditCardNumber) {
        // - Remove any '-' and ' ' fron the card Number String
        creditCardNumber = creditCardNumber.replace(/\D/g, '')
        // Checking for the length beetween 13-19 Digits
        if(!/^\d{13,19}$/g.test(creditCardNumber)) {
            return false
        }   
        // Split and reverse the Credit Card NUmber
        let reversedCardNumberArr = creditCardNumber.split('').reverse().map(Number)

        let sum = reversedCardNumberArr.reduce((acc, currentVal, currentIndex) => {
            
            if(currentIndex % 2 === 1) {            
                let doubleVal = currentVal * 2
                return acc + (doubleVal > 9 ? doubleVal - 9 : doubleVal)
            }else {
                return acc + currentVal
            }
        })
        return sum % 10 === 0
    }

    validateCVV (cvv) {
        cvv = cvv.replace(/\D/g, '')
       return /^\d{3,4}$/g.test(cvv) ? true : false
    }

    isExpired (cardDate) {
        const today = new Date().toLocaleString('en-eu', {month: '2-digit',year:"2-digit"})
        const cardDataArr = cardDate.split('/').map(Number)
        const compareDate = new Date(cardDataArr[1], cardDataArr[0]-1).toLocaleString('en-eu', {month: "2-digit", year: "2-digit"})
        return today <= compareDate
    }
}
