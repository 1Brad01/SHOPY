let listCart = [];

//finding cart data from cookie
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCarts='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();


function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    
    let totalQuantity = 0;
    let totalPrice = 0;

    // if product is in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newP);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);}
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}

//Success Page
document.querySelector(".buttonCheckout").onclick=()=>
{
    document.querySelector(".Tit").innerHTML ="Checkout";
    document.querySelector(".container").innerHTML= 
    `
    <div class ="success-container">

    <div class="success-icon">
    &#9731;;
    </div>

    <h1>Thank you for Your Purchase!</h1>
    <button class="back-btn"> Back </button> 
    </div>
    `;
    document.querySelector(".back-btn").onclick =(e)=>{
        location.reload();}
}
