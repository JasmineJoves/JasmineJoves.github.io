var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder(productName, price, quantity) {
    var order = quantity + ' pc/s x ' + price + '------' + productName + '------ Php' + (parseFloat(quantity) * parseFloat(price)) + '\n';
    carts.textContent += order;
    calculateTotal();
}

function calculateTotal() {
    var totalAmount = 0;
    if (parseFloat(qty1.value) > 0) {
        totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }
    if (parseFloat(qty2.value) > 0) {
        totalAmount += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }
    total.value = totalAmount.toFixed(2);
}

cash.addEventListener("keyup", function () {
    var cashValue = parseFloat(cash.value);
    var totalValue = parseFloat(total.value);
    if (!isNaN(cashValue) && !isNaN(totalValue)) {
        change.value = (cashValue - totalValue).toFixed(2);
    } else {
        change.value = "";
    }
});

qty1.addEventListener("keyup", calculateTotal);
qty2.addEventListener("keyup", calculateTotal);
