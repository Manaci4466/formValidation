const emailInput =  document.querySelector("#email");
const zipCodeInput = document.querySelector("#zipCode");
const countryInput = document.querySelector("#country");
const passwordInput = document.querySelector("#password");
const inputs = document.querySelectorAll('input');
const form = document.querySelector("form");

function showError(){

    inputs.forEach((item) => {
        if(item.validity.valueMissing){

            item.setCustomValidity('You are required to fill in ' + item.name + ' field' )
            item.className = 'error' ;
        }
        else if(item.validity.patternMismatch){
            item.setCustomValidity('You have entered the wrong pattern in ' + item.name + ' field' )
            item.className = 'error' ;
        }
        else if(item.validity.typeMismatch){
            item.setCustomValidity('You have entered the wrong type in ' + item.name + ' field' )
            item.className = 'error' ;
        }
       
        console.log(item.validationMessage)
    })
}

inputs.forEach((item) => {

    item.addEventListener('input', () => {
        if(item.validity.valid){

            item.className = 'valid';
        }
        else {
            showError();
            
        }
    })
})

form.addEventListener("submit",(e) => {

    if(!(zipCodeInput.Validity.valid && passwordInput.Validity.valid && countryInput.Validity.valid && emailInput.Validity.valid)){

        showError()
        
    }
    e.preventDefault()
    
 
})
