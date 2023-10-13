const valorDivisa1 = document.getElementById('divisa1');
const valorCuantia1 = document.getElementById('cuantia1');
const valorDivisa2 = document.getElementById('divisa2');
const valorCuantia2 = document.getElementById('cuantia2');
const loading_msg = document.getElementById('loading-msg');

console.log(valorDivisa1);

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const divisa1 = valorDivisa1.value;
  const divisa2 = valorDivisa2.value;
  loading_msg.textContent = "Carregant informació..."
  fetch(`https://v6.exchangerate-api.com/v6/a30cb4ce95385ac2b629e210/latest/${divisa1}`)
    .then(res => res.json())
    .then(data => {
      console.log('Makina:', data);
      const rate = data.conversion_rates[divisa2];
      rateEl.innerText = `1 ${divisa1} = ${rate} ${divisa2}`;
      valorCuantia2.value = (valorCuantia1.value * rate).toFixed(2);
      loading_msg.textContent = ""
    })
    .catch(error => {
      alert('Internal service error. 😢 Try again later.')
      console.log(error);
      loading_msg.textContent = "Servei no disponible"

  });

}

// Event listeners
valorDivisa1.addEventListener('change', calculate);
valorCuantia1.addEventListener('input', calculate);
valorDivisa2.addEventListener('change', calculate);
valorCuantia2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = valorDivisa1.value;
  valorDivisa1.value = valorDivisa2.value;
  valorDivisa2.value = temp;
  calculate();
});

calculate();
  