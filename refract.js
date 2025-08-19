function createPricingCard({ title, price, features }) {
    const card = document.createElement('div');
    card.className = 'pricing';

    card.innerHTML = `
        <h2 class="title">${title}</h2>
        <p class="price">${price}</p>
        <ul class="features">
            ${features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <button class="btn">Start Trial</button>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const pricingContainer = document.getElementById('pricing-container');

    const plans = [
        { title: "Basic Plan", price: "$9.99 /month", features: ["1 GB Storage", "Basic Support", "All Core Features"] },
        { title: "Pro Plan", price: "$19.99 /month", features: ["5 GB Storage", "Priority Support", "All Core Features"] }
    ];

    plans.forEach(plan => {
        pricingContainer.appendChild(createPricingCard(plan));
    });
});