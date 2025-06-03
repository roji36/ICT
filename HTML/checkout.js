let cart =JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckout(){
    const ul = document.getElementById("checkout-Items");
    const totalEl = document.getElementById("checkout-Total");
    let total = 0;
    ul.forEach((item,i) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${items.name} - NRs. $ {item.price}`;
        ul.appendChild(li);
    });
    totalEl.textContent = total.toFixed(2);

}

function completeCheckout(){
    if (cart.length === 0){
        alert("Your cart is Empty");
        return;
    }
    alert("Thank you! Your order has been placed.");
    cart = []
    localStorage.setItem(:"cart",JSON.stringify(cart));
    Window.location.href = "index.html";

}
render