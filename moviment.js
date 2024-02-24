document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const totalSpan = document.querySelector('.total');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const priceText = button.previousElementSibling.querySelector('.cash').textContent;
            const price = parseFloat(priceText.replace('R$', '').trim());
            total += price;
            totalSpan.textContent = total.toFixed(2);

            const itemName = button.previousElementSibling.querySelector('h4').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} - R$ ${price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });
    });
});
