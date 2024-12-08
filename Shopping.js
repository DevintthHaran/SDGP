//if page loaded successfully call
document.addEventListener('DOMContentLoaded', ready);
let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let exitCart=document.querySelector("#exit-cart");

//open the cart menu
cartIcon.onclick=()=>{
    cart.classList.add("active");
}
//close the cart menu
exitCart.onclick=()=>{
    cart.classList.remove("active");
}


//function checkes eventlistener in ready state
function ready(){
    //removes the cart item
    var removeCartButton=document.getElementsByClassName("cart-remove");
    console.log(removeCartButton);
    for (var i=0;i<removeCartButton.length;i++){
        var button=removeCartButton[i];
        button.addEventListener('click',removeCartItem);
    }

    // checks for quantity (not go below 1)
    var quantityEntry=document.getElementsByClassName("cart-quantity");
    for (var i=0;i<quantityEntry.length;i++){
        var input=quantityEntry[i];
        input.addEventListener('change',quantityChanged);
    }

    //cart item addeed 
    var addCart=document.getElementsByClassName("addcart");
    for (var i=0;i<addCart.length;i++){
        var button=addCart[i];
        button.addEventListener('click',addCartClicked);
    }
    document.getElementsByClassName("buy-now")[0].addEventListener("click",buyButtonClicked);
}

function buyButtonClicked(event){
    //if cart empty error message
    var cartContent=document.getElementsByClassName("cart-content")[0];
    if(cartContent.innerHTML.trim() === "" || !cartContent.hasChildNodes()){
        alert("The Cart is empty.Please select item(s) to place order");
        return;
    }
    //get content data to pass for fillform page 
    var cartLists=cartContent.getElementsByClassName("cart-box");
    for(var i=0;i<cartLists.length;i++){
        var cartList=cartLists[i];
        var cartImg=cartList.getElementsByClassName("cart-img")[0].src;
        var stockName=cartList.getElementsByClassName("cart-product-title")[0].innerText;
        var stockquantity=cartList.getElementsByClassName("cart-quantity")[0].value;
        var stockprice=cartList.getElementsByClassName("cart-price")[0].innerText;

        localStorage.setItem("stockImg"+i,cartImg);
        localStorage.setItem("stockName"+i,stockName);
        localStorage.setItem("stockquantity"+i,stockquantity);
        localStorage.setItem("stockprice"+i,stockprice);
    }
    localStorage.setItem('cartcount',cartLists.length);
    var Stocktotal=document.getElementsByClassName("total-price")[0].innerText;
    localStorage.setItem('Stocktotal',Stocktotal);
    //redirects to order(fillform page)
    window.location.href="Order.html";
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();

    ready();
    
}


//remove cart
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}


//makes sure value of quantity not below 1
function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<=0){
        input.value=1;
    }
    updateTotal();
}


//Add to cart
function addCartClicked(event){
    var button=event.target;
    var shopProducts=button.parentElement;
    var productName = shopProducts.getElementsByClassName("itemName")[0].innerText;
    var productPrice = shopProducts.getElementsByClassName("itemPrice")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("itemImg")[0].src;
    addProductToCart(productName,productPrice,productImg);
    updateTotal();
}
//formatting to display in cart
function addProductToCart(productName,productPrice,productImg){
    var cartShopBox=document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText==productName){
            alert("You have already add this to cart");
            return;
        }
    }
    //give format to display in cart menu
    var cartBoxContent = `<img src="${productImg}" alt="Neon" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${productName}</div>
                            <div class="cart-price">${productPrice}</div>
                            <input type="number" value="1" class="cart-quantity id="cart-quantity-${i}" name="cart-quantity-${i}">
                        </div>
                        <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShopBox.innerHTML=cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener('click',removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change',quantityChanged);
}
//update the total
function updateTotal(){
    var cartContent=document.getElementsByClassName("cart-content")[0];
    var cartBoxes=cartContent.getElementsByClassName("cart-box");
    var total=0;
    for (var i=0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        var priceAmount=cartBox.getElementsByClassName("cart-price")[0];
        var quantityAmount=cartBox.getElementsByClassName("cart-quantity")[0];
        var price=parseFloat(priceAmount.innerText.replace("$",""));
        var quantity=quantityAmount.value;    
        total=total+(price*quantity);
    }
        document.getElementsByClassName("total-price")[0].innerText="$"+total;
}