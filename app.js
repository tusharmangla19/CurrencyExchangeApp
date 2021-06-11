const currencySelect1 = document.getElementById("currency-one");
const currencySelect2 = document.getElementById("currency-two");
const btn = document.getElementById("swap");
const rate = document.getElementById("rate");
const amountInput2 = document.getElementById("amount-two");
const amountInput1 = document.getElementById("amount-one");

//fetch
function calculate() {
    const currencyOne = currencySelect1.value;
const currencyTwo = currencySelect2.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.rates[currencyTwo];
        rate.innerText = `1${currencyOne} = ${rates} ${currencyTwo}`
        amountInput2.value = (amountInput1.value*rates).toFixed(2)
    }
    )


}


//event listners

currencySelect1.addEventListener("change", calculate)
currencySelect2.addEventListener("change", calculate)
amountInput1.addEventListener("input", calculate);
amountInput2.addEventListener("input", calculate);

btn.addEventListener("click", function () {
    const temp = currencySelect1.value;
    currencySelect1.value = currencySelect2.value;
    currencySelect2.value = temp;
    calculate();
})

calculate();


