const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
});

let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
    let quantityP = event.target.parentElement.parentElement.querySelector("#product-quantity")
  //console.log(event.target);
  //minus buttons
  if (
    event.target.classList.contains("fa-minus") ||
    event.target == quantityP.parentElement.firstElementChild) {
    console.log("minusBtn clicked");
  }

  //plus buttons
  else if (event.target.className == "fas fa-plus" || event.target == quantityP.parentElement.lastElementChild ) {
    console.log("plusBtn clicked");
  }

  //remove buttons
  else if (event.target.className == "remove-product") {
    console.log("removeBtn clicked");
  }
});
