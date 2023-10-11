document.addEventListener("DOMContentLoaded", function () {
    const amount = document.getElementById("amount");
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const result = document.getElementById("result");
    const convertButton = document.getElementById("convert");
  
    // Desplegables opcions de moneda
    fetch("https://api.apilayer.com/exchangerates_data/latest")
      .then((response) => response.json())
      .then((data) => {
        const currencies = Object.keys(data.rates);
  
        currencies.forEach((currency) => {
          const option1 = document.createElement("option");
          option1.value = currency;
          option1.text = currency;
          fromCurrency.appendChild(option1);
  
          const option2 = document.createElement("option");
          option2.value = currency;
          option2.text = currency;
          toCurrency.appendChild(option2);
        }
        );
      }
      );
  
    //Conversió
    convertButton.addEventListener("click", () => {
      const from = fromCurrency.value;
      const to = toCurrency.value;
      const amountValue = parseFloat(amount.value);
  
      fetch(`https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amountValue}`)
        .then((response) => response.json())
        .then((data) => {
          const convertedAmount = amountValue * data.result;
          result.value = `${amountValue} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
        })
        .catch((error) => {
          console.error("Error en la conversió:", error);
        }
        );
    }
    );
  }
  );
  