const handleCart = () => {
  const productName = document.getElementById("name").value;
  const productQuantity = document.getElementById("quantity").value;
  displayProduct(productName, productQuantity);
  savedProductLocalStorage(productName, productQuantity);
};

const displayProduct = (productName, productQuantity) => {
  const display = document.getElementById("display");
  const li = document.createElement("li");
  li.innerHTML = `${productName} ${productQuantity}`;
  display.appendChild(li);
};

const checkLocalStorage = () => {
  let cart = {};
  const shoppingCart = localStorage.getItem("cart");
  if (shoppingCart) {
    cart = JSON.parse(shoppingCart);
  }
  return cart;
};

const savedProductLocalStorage = (productName, productQuantity) => {
  const cart = checkLocalStorage();
  cart[productName] = productQuantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayProductFromLocalStorage = () => {
  const storedCart = checkLocalStorage();
  for (const product in storedCart) {
    const quantity = storedCart[product];
    displayProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
