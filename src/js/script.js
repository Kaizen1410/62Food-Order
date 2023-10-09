function minusQuantity(priceId, quantityId, amountId) {
    const price = parseInt(document.querySelector(`#${priceId}`).textContent);
    const quantity = parseInt(document.querySelector(`#${quantityId}`).textContent) - 1
    if(quantity < 1) return
    document.querySelector(`#${quantityId}`).textContent = quantity;
    document.querySelector(`#${amountId}`).textContent = price * quantity;

    // Total Amount Modal
    const totalAmountModal1 = parseInt(document.querySelector('#total-amount-modal-1').textContent);
    const totalAmountModal2 = parseInt(document.querySelector('#total-amount-modal-2').textContent);
    const totalAmountModal3 = parseInt(document.querySelector('#total-amount-modal-3').textContent);
    const totalAmountModal4 = parseInt(document.querySelector('#total-amount-modal-4').textContent);
    document.querySelector('#total-amount-modal').textContent = totalAmountModal1 + totalAmountModal2 + totalAmountModal3 + totalAmountModal4;

    // Total Amount
    const totalAmount1 = parseInt(document.querySelector('#total-amount-1').textContent);
    const totalAmount2 = parseInt(document.querySelector('#total-amount-2').textContent);
    const totalAmount3 = parseInt(document.querySelector('#total-amount-3').textContent);
    const totalAmount4 = parseInt(document.querySelector('#total-amount-4').textContent);
    document.querySelector('#total-amount').textContent = totalAmount1 + totalAmount2 + totalAmount3 + totalAmount4;
}

function plusQuantity(priceId, quantityId, amountId) {
    const price = parseInt(document.querySelector(`#${priceId}`).textContent);
    const quantity = parseInt(document.querySelector(`#${quantityId}`).textContent) + 1
    document.querySelector(`#${quantityId}`).textContent = quantity;
    document.querySelector(`#${amountId}`).textContent = price * quantity;

    // Total Amount Modal
    const totalAmountModal1 = parseInt(document.querySelector('#total-amount-modal-1').textContent);
    const totalAmountModal2 = parseInt(document.querySelector('#total-amount-modal-2').textContent);
    const totalAmountModal3 = parseInt(document.querySelector('#total-amount-modal-3').textContent);
    const totalAmountModal4 = parseInt(document.querySelector('#total-amount-modal-4').textContent);
    document.querySelector('#total-amount-modal').textContent = totalAmountModal1 + totalAmountModal2 + totalAmountModal3 + totalAmountModal4;

    // Total Amount
    const totalAmount1 = parseInt(document.querySelector('#total-amount-1').textContent);
    const totalAmount2 = parseInt(document.querySelector('#total-amount-2').textContent);
    const totalAmount3 = parseInt(document.querySelector('#total-amount-3').textContent);
    const totalAmount4 = parseInt(document.querySelector('#total-amount-4').textContent);
    document.querySelector('#total-amount').textContent = totalAmount1 + totalAmount2 + totalAmount3 + totalAmount4;
}

function toggleSidebar() {
    const sidebarEl = document.querySelector('#sidebar');

    sidebarEl.classList.toggle('w-0');
    const open = sidebarEl.classList.toggle('w-96');
    
    if(open) {
        document.querySelector('#backdrop').innerHTML = `<div class="lg:hidden bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 h-full w-full z-40" onclick="toggleSidebar()"></div>`
    } else {
        document.querySelector('#backdrop').innerHTML = ''
    }
}