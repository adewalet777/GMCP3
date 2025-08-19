// Get all necessary elements
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
const likeButtons = document.querySelectorAll('.fa-heart');
const quantities = document.querySelectorAll('.quantity');
const totalElement = document.querySelector('.total');

// Function to update total price
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.card-body').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        total += unitPrice * quantity;
    });
    totalElement.textContent = `${total} $`;
}

// Add event listeners to "+" buttons
plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentQuantity = parseInt(quantities[index].textContent);
        quantities[index].textContent = currentQuantity + 1;
        updateTotal();
    });
});

// Add event listeners to "-" buttons
minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentQuantity = parseInt(quantities[index].textContent);
        if (currentQuantity > 0) {
            quantities[index].textContent = currentQuantity - 1;
            updateTotal();
        }
    });
});

// Add event listeners to delete buttons
deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.closest('.card-body').parentElement.remove();
        updateTotal();
    });
});

// Add event listeners to like buttons
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.color = button.style.color === 'red' ? 'black' : 'red';
    });
});

// Initialize total
updateTotal();