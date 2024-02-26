// Constants
const MAX_PRODUCT_COUNT = 10;
const PRODUCT_PRICE = 125.00;

// Element selectors
const minusButton = document.getElementById("minusButton");
const productCounterInput = document.getElementById("productCounterInput");
const plusButton = document.getElementById("plusButton");
const addToCartButton = document.getElementById("addToCartButton");
const badgeProductCounter = document.getElementById("badgeProductCounter");
const loadedCart = document.getElementById("loadedCart");
const emptyCart = document.getElementById("emptyCart");
const productQuantity = document.getElementById("productQuantity");
const cartTotal = document.getElementById("cartTotal");
const deleteCartButton = document.getElementById("deleteCartButton");

// Initial values
var productCounterValue = 0;
var numberOfProductsInCart = 0;

// Event listeners
if (minusButton) {
  minusButton.addEventListener("click", decrementProductCounter);
}

if (plusButton) {
  plusButton.addEventListener("click", incrementProductCounter);
}

if (addToCartButton) {
  addToCartButton.addEventListener("click", addToCart);
}

// Functions
function decrementProductCounter() {
  if (productCounterValue > 0) {
    productCounterValue--;
  }

  productCounterInput.value = productCounterValue;
}

function incrementProductCounter() {
  if (productCounterValue < MAX_PRODUCT_COUNT) {
    productCounterValue++;
  }

  productCounterInput.value = productCounterValue;
}

function addToCart() {
    if(productCounterValue < 0 ) {
        return;
    }
  addProductQuantity();
  modifyBadge();
  modifyCart();
  updatePopover();
  resetProductCounter();
}

function addProductQuantity() {
  numberOfProductsInCart = numberOfProductsInCart + productCounterValue;
}

function modifyBadge() {
  if (productCounterInput.value === 0) {
    return;
  }

  badgeProductCounter.classList.remove("invisible");
  badgeProductCounter.innerText = numberOfProductsInCart;
}

function modifyCart() {
  if (!emptyCart.classList.contains("d-none")) {
    emptyCart.classList.add("d-none");
    loadedCart.classList.remove("d-none");
  }

  productQuantity.innerText = numberOfProductsInCart;
  cartTotal.innerText = "$" + (PRODUCT_PRICE * numberOfProductsInCart);
}

function updatePopover() {
  popover.hide();
  setTimeout(function () {
    popover.show();
  }, 200); // delay to ensure the popover has time to hide before showing again
}

function resetProductCounter() {
  productCounterValue = 0;
  productCounterInput.value = 0;
}

// Define the deleteCart function
function deleteCart() {
  numberOfProductsInCart = 0;
  badgeProductCounter.innerText = 0;
  badgeProductCounter.classList.add("invisible");
  emptyCart.classList.remove("d-none");
  loadedCart.classList.add("d-none");
  updatePopover();
}

// Create a MutationObserver instance
let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      let nodes = Array.prototype.slice.call(mutation.addedNodes); // Convert NodeList to Array
      nodes.forEach(function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if it's an element node
          let button = node.querySelector("#deleteCartButton");
          if (button) {
            button.addEventListener("click", function (event) {
              event.preventDefault();
              deleteCart();
            });
          }
        }
      });
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });