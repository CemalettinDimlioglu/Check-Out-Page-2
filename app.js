 const taxRate = 0.18;
 const shippingPrice = 15;
 const shippingFreePrice = 300;
 window.addEventListener("load", () => {
   localStorage.setItem("taxRate", taxRate);
   localStorage.setItem("shippingPrice", shippingPrice);
   localStorage.setItem("shippingFreePrice", shippingFreePrice);
 });
 const productsDiv = document.querySelector(".products");
 productsDiv.addEventListener("click", (e) => {
   //- TIKLANDIĞINDA
   if (e.target.className === "fa-solid fa-minus") {
     if (e.target.nextElementSibling.innerText > 1) {
       e.target.nextElementSibling.innerText--;
     } else {
       if (
         confirm(
           `${
             e.target.closest(".product-info").querySelector("h2").innerText
           } will be removed! `
         )
       ) {
         e.target.closest(".product").remove();
       }
     }
   }
   //+ TIKLANDIĞINDA
   else if (e.target.classList.contains("fa-plus")) {
     e.target.parentElement.querySelector(".quantity").innerText++;
   }
   //REMOVE TIKLANDIĞINDA
   else if (e.target.getAttribute("class") == "remove-product") {
     if (
       confirm(
         `${
           e.target.closest(".product-info").querySelector("h2").innerText
         } will be removed!`
       )
     ) {
       e.target.closest(".product").remove();
     }
   } else {
     alert("other element clicked");
   }
 });
 const calculateProductPrice = (target) => {
   const productInfoDiv = target.closest(".product-info");
   const price = productInfoDiv.querySelector(
     "div.product-price strong"
   ).innerText;
   const quantity = productInfoDiv.querySelector("p.quantity").innerText;
   productInfoDiv.querySelector("div.product-line-price").innerText = (
     price * quantity
   ).toFixed(2);
 };






