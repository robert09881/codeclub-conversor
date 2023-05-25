const button = document.getElementsByTagName('button')[0]
const select = document.getElementById("currency-select")


// ou getElementById quando estiver uma ID no button em html.

// const dolar = 4.94;
// const euro = 5.46;
// const bitcoin = 0.0000072;


const converValues = async() => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('dolar-value-text')

    const data = await fetch ("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    console.log (data)

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency', currency: 'BRL'
        }).format(inputReais);

    if (select.value === "U$$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency', currency: 'USD'
            }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency', currency: 'EUR'
            }).format(inputReais / euro)
    }

    if (select.value === "₿ BitCoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('ja-JP',
            {
                style: 'currency', currency: 'BTC'
            }).format(inputReais / bitcoin)
    }
    


}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'U$$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./Assets/eua.jpg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/euro.jpg"
    }

    if (select.value === '₿ BitCoin') {
        currencyName.innerHTML = "BitCoin"
        currencyImg.src = "./Assets/bitcoin.jpg"
    }
    
    converValues()

}

button.addEventListener('click', converValues)
select.addEventListener("change", changeCurrency)