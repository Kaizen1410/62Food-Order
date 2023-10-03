function minusQuantity(priceId, quantityId, amountId) {
    const price = parseInt(document.querySelector(`#${priceId}`).textContent);
    const quantity = parseInt(document.querySelector(`#${quantityId}`).textContent) - 1
    if(quantity < 1) return
    document.querySelector(`#${quantityId}`).textContent = quantity;
    document.querySelector(`#${amountId}`).textContent = price * quantity;
}

function plusQuantity(priceId, quantityId, amountId) {
    const price = parseInt(document.querySelector(`#${priceId}`).textContent);
    const quantity = parseInt(document.querySelector(`#${quantityId}`).textContent) + 1
    document.querySelector(`#${quantityId}`).textContent = quantity;
    document.querySelector(`#${amountId}`).textContent = price * quantity;
}