const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;


window.addEventListener("load", ()=>{
     localStorage.setItem("taxRate", taxRate);
     localStorage.setItem("shippingPrice", shippingPrice);
     localStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv=document.querySelector(".products");

productsDiv.addEventListener("click", (e)=>{
// -- TIKLANINCA
if(e.target.className==="fa solid fa minus"){
     
}


})