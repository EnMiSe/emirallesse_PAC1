const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const checkoutButton = document.getElementById('checkout-button');

let selectedSeats = [];
let ticketPrice = 10; // Precio de la entrada

// Actualiza la cuenta y el total
function updateSelectedCount() {
    const selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
}

// Maneja la selección de asientos
seats.forEach((seat, index) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');

        if (seat.classList.contains('selected')) {
            selectedSeats.push(index);
        } else {
            selectedSeats = selectedSeats.filter(seatIndex => seatIndex !== index);
        }

        updateSelectedCount();
    });
});

// Maneja la reserva de entradas
checkoutButton.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        alert(`Has reservat ${selectedSeats.length} seient(s) per un total de $${selectedSeats.length * ticketPrice}.`);
    } else {
        alert('Siusplau, selecciona un seient abans de reservar.');
    }
});
