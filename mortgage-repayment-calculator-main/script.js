const form = document.getElementById("user-form");
const clear = document.getElementById("reset-link");
const calculator = document.getElementById("calculator-button");
const outputSection = document.querySelector(".result-output");
const defaultSection = document.querySelector(".default");
const repaymentInput = document.getElementById("repayment-radio");
const interestInput = document.getElementById("interest-radio");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    formValidator();
    mortgagecalculator();
})

function formValidator(){
    const amountError = document.getElementById("mortgage-amount-error");
    const termError = document.getElementById("mortgage-term-error");
    const interestError = document.getElementById("interest-rate-error");
    const repayInterestError = document.getElementById("interest-repay-error");


    const inputs = form.querySelectorAll("input")
    const validatedNames = new Set();
    let errorTracker = 0;

    inputs.forEach(input => {
        if (validatedNames.has(input.name)) return;
        validatedNames.add(input.name)

        const parent = input.parentElement;
        let isValid = true;

        switch(input.name){
            case ("mortgage-amount"):
                if (input.value == ""){
                    isValid = false;
                    amountError.innerHTML = "Field is required";
                    console.log("Mortgage amount is invalid");
                    errorTracker =+ 1;
                }
            break;
            case ("mortgage-term"):
                if (input.value == ""){
                    isValid = false;
                    termError.innerHTML = "Field is required";
                    console.log("Mortgage term is invalid");
                    errorTracker =+ 1;
                }
            break;
            case ("interest-rate"):
                if (input.value == ""){
                    isValid = false;
                    interestError.innerHTML = "Field is required";
                    console.log("Mortgage interest is invalid");
                    errorTracker =+ 1;
                }
            break;
            case ("interest-repay"):
                if(!interestInput.checked && !repaymentInput.checked){
                    isValid = false;
                    repayInterestError.innerHTML = "Field is required"
                    console.log("Repayment or interest only option is not selected");
                    errorTracker =+ 1;
                }
            break;
        }

        if (!isValid){
            parent.classList.add("error");
        }
        else{
            parent.classList.remove("error");
        }
    })
}

// A function which calculates mortgage;
function mortgagecalculator(){
    const mortgageAmountInput = document.getElementById("mortgage-amount-field");
    const mortgageAmountValue = mortgageAmountInput.value.trim();
    const mortgageTermInput = document.getElementById("mortgage-term-field");
    const mortgageTermValue = mortgageTermInput.value.trim();
    const mortgageInterestInput = document.getElementById("interest-rate-field");
    const mortgageInterestValue = mortgageInterestInput.value.trim();
    const PercentInterestRate = parseFloat(mortgageInterestValue) / 100;
    const monthlyInterestRate = PercentInterestRate / 12;
    const totalPayments = mortgageTermValue * 12;
    const mortgageRepayment = (mortgageAmountValue * ((monthlyInterestRate * (1 + monthlyInterestRate) ** totalPayments) / ((1 + monthlyInterestRate) ** totalPayments - 1)));
    const totalPayment = mortgageRepayment * totalPayments;
    const interestOnlyPayment = mortgageAmountValue * monthlyInterestRate; 
    const repaymentInputField = document.getElementById("main-result");
    const remainingField = document.getElementById("remaining-field");

    function currencyFormatter(value){
        return new Intl.NumberFormat('en-us', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }).format(value);
    }

    if(repaymentInput.checked){
        repaymentInputField.innerHTML = "£" + currencyFormatter(mortgageRepayment);
        console.log(mortgageRepayment)
        remainingField.innerHTML = "£" + currencyFormatter(totalPayment);
        console.log(totalPayment);
    }
    else if(interestInput.checked){
        console.log(interestOnlyPayment);
        repaymentInputField.innerHTML = "£" + currencyFormatter(interestOnlyPayment);
        remainingField.innerHTML = "£" + currencyFormatter(totalPayment);
        console.log(totalPayment);
    }
    if(repaymentInput.checked || interestInput.checked){
        defaultSection.style.display = 'none';
        outputSection.style.display = 'grid';
    }
}

clear.addEventListener('click', () => {
    outputSection.style.display = 'none';
    defaultSection.style.display = 'flex';
})
