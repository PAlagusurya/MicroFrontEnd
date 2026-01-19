import faker from "faker";

const cartItems = `<div>You have ${faker.random.number()} items in your cart</div>`;
document.querySelector("#dev-cart").innerHTML = cartItems;
