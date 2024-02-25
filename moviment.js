
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); //Adicionar as pizzas e bebidas no carrinho//
    const cartItemsList = document.querySelector('.cart-items');  //Apresentar pizzas e bebidas no carrinho//
    const totalSpan = document.querySelector('.total'); //Apresentar total das pizzas e bebidas//
    const cancelPurchaseButton = document.querySelector('.cancel-purchase');  //Cancelar compra//

    let total = 0;  //Controle dos produtos (Pizza e bebidas)//

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const priceText = button.parentElement.querySelector('.cash').textContent;
            const price = parseFloat(priceText.replace('R$', '').trim());
            total += price;
            totalSpan.textContent = total.toFixed(2);
            //Nestas 6 linhas de código trata se do cálculo dos produtos// 

            const itemName = button.parentElement.querySelector('.product-name').textContent;
            const itemImage = button.parentElement.parentElement.querySelector('.card-image img').src; 
            const listItem = document.createElement('li');
            const itemImageElement = document.createElement('img');
            itemImageElement.src = itemImage; 
            listItem.appendChild(itemImageElement);
            const itemDescription = document.createElement('span');
            itemDescription.textContent = `${itemName} - R$ ${price.toFixed(2)}`; 
            listItem.appendChild(itemDescription);
            cartItemsList.appendChild(listItem);
        });
    });  //Nestas linhas de códigos estamos adicionando no carrinho as pizzas e bebidas completas (imagem e descrição) à lista de itens do carrinho//

    cancelPurchaseButton.addEventListener('click', function() {
        cartItemsList.innerHTML = ''; 
        total = 0; 
        totalSpan.textContent = total.toFixed(2); 
    });
}); //Cancelar a compra//
