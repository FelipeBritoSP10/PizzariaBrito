
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items'); //Adicionar as pizzas e bebidas no carrinho//
    const totalSpan = document.querySelector('.total'); //Apresentar total das pizzas e bebidas//
    const cancelPurchaseButton = document.querySelector('.cancel-purchase'); //Cancelar compra//

    let total = 0;  //Controle dos produtos (Pizza e bebidas)//

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const priceText = button.previousElementSibling.querySelector('.cash').textContent;
            const price = parseFloat(priceText.replace('R$', '').trim());
            total += price;
            totalSpan.textContent = total.toFixed(2); 
//Nestas 6 linhas de código trata se do cálculo dos produtos//

            const itemName = button.parentElement.querySelector('.product-name').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = `${itemName} - R$ ${price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });
    });  //Esse código capturam o nome dos produtos que o usuário escolheu//


    //Esse código cancela a compra do usuário limpando tudo//
    cancelPurchaseButton.addEventListener('click', function() {
        cartItemsList.innerHTML = ''; // Limpar itens//
        total = 0; //Resetar o total//
        totalSpan.textContent = total.toFixed(2); // Atualizar a exibição do total
    });
});
