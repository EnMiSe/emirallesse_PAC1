const seats = document.querySelectorAll('.seat');
const selectedSeatsCount = document.getElementById('selectedSeatsCount');
const totalPrice = document.getElementById('totalPrice');
const checkoutButton = document.getElementById('checkout-button');
const currentCurrency = document.getElementById('currentCurrency');
const currencySelector = document.getElementById('currency');
const movieSelector = document.getElementById('movie');

let selectedSeats = 0;
let ticketPrice = parseFloat(movieSelector.value);


let originalPrices = Array.from(movieSelector.options).map(opt => parseFloat(opt.value));

movieSelector.addEventListener('change', (e) => {
    ticketPrice = parseFloat(e.target.value);
    updatePrice();
});

currencySelector.addEventListener('change', (e) => {
    updateMoviePrices();
    updatePrice();
});

seats.forEach(seat => {
    seat.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-status') === 'available') {
            e.target.setAttribute('data-status', 'selected');
            selectedSeats++;
        } else if (e.target.getAttribute('data-status') === 'selected') {
            e.target.setAttribute('data-status', 'available');
            selectedSeats--;
        }
        updatePrice();
    });
});

function updateMoviePrices() {
    const currency = currencySelector.value;
    const currencySymbol = getCurrencySymbol(currency);

    if (currency !== 'USD') {
        fetch(`https://v6.exchangerate-api.com/v6/a30cb4ce95385ac2b629e210/latest/USD`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency];
            for (let i = 0; i < movieSelector.options.length; i++) {
                const convertedPrice = originalPrices[i] * rate;
                movieSelector.options[i].value = convertedPrice.toFixed(2);
                movieSelector.options[i].textContent = movieSelector.options[i].textContent.split("-")[0] + "- " + currencySymbol + convertedPrice.toFixed(2); 
            }
            ticketPrice = parseFloat(movieSelector.value);
            updateUI(ticketPrice * selectedSeats);
        });
    } else {
        for (let i = 0; i < movieSelector.options.length; i++) {
            movieSelector.options[i].value = originalPrices[i];
            movieSelector.options[i].textContent = movieSelector.options[i].textContent.split("-")[0] + "- $" + originalPrices[i].toFixed(2);
        }
        ticketPrice = parseFloat(movieSelector.value);
        updateUI(ticketPrice * selectedSeats);
    }
}

function getCurrencySymbol(currency) {
    switch(currency) {
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
        case 'JPY':
            return 'JPY';
        case 'BGN':
            return 'BGN';
        case 'CZK':
            return 'CZK';
        default:
            return '$';
    }
}


function updatePrice() {
    const price = selectedSeats * ticketPrice;
    const currency = currencySelector.value;

    if (currency !== 'USD') {
        fetch(`https://v6.exchangerate-api.com/v6/a30cb4ce95385ac2b629e210/latest/USD`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency];
            const convertedPrice = price * rate;
            updateUI(convertedPrice);
        });
    } else {
        updateUI(price);
    }
}

function updateUI(price) {
    selectedSeatsCount.textContent = selectedSeats;
    totalPrice.textContent = price.toFixed(2) + " " + currencySelector.value;
}

updateMoviePrices();

