//runs when page loaded successfully
document.addEventListener('DOMContentLoaded', () => {
    var cartCount=localStorage.getItem("cartcount");
    var finalcont=document.getElementById("finalCon");
    //store data from shop.html
    for(let i=0;i<cartCount;i++){
        var StockName=localStorage.getItem("stockName"+i);
        var StockQua=localStorage.getItem("stockquantity"+i);
        var StockPrice=localStorage.getItem("stockprice"+i);
        var StockImg=localStorage.getItem("stockImg"+i);
    
        var cartBox =document.createElement('div');
        cartBox.classList.add('cart-box');
    
        cartBox.innerHTML=`
            <img src="${StockImg}" class="cart-img" alt="">
            <div class="detail-box">
                    <div class="cart-product-title">${StockName}</div>
                    <div class="cart-price">${StockPrice}</div>
                    <div class="cart-quantity">Quantity: ${StockQua}</div>
            </div>
        `;
        //append the above format in html
        finalcont.appendChild(cartBox); 
    }
    var StockTotal=localStorage.getItem("Stocktotal");
    document.getElementsByClassName("s-price")[0].innerText=StockTotal;   
});
//validation for cardnum
let cNo=document.getElementById("cardNo");
cNo.addEventListener('keyup',function(e){
    let num=cNo.value;
    let newValue='';
    num=num.replace(/\s/g,'');
    for (var i=0;i<num.length;i++){
        if(i%4==0 && i>0){
           newValue=newValue.concat(' ');
        }
    newValue =newValue.concat(num[i]);
    cNo.value=newValue;
    }
    cNopattern="[0-9]{16}"
    if(num.length<16 || !num.match(cNopattern)){
        cNo.style.border="2px solid red";
    }else{
        cNo.style.border="2px solid greenyellow";
    }
});

//validation for carddate
let expDate=document.getElementById("cardDate");
expDate.addEventListener('keyup',function(e){
    let newInput=expDate.value;
    newInput=newInput.replace(/\s/g,'');
    expDate.value=newInput;
    if(e.which !==8){
        var numChar=e.target.value.length;
        if(numChar== 2){
            var thisVal=e.target.value;
            thisVal +='/'
            e.target.value=thisVal;
        }
    }
    let datepattern="[0-9]{2}/[0-9]{2}"
    if(newInput.length<5 || !newInput.match(datepattern)){
        expDate.style.border="2px solid red";
    }else{
        expDate.style.border="2px solid greenyellow";
    }
})



SingleEntry("cardHName","[a-zA-Z\s]+");
SingleEntry("billaddress1","[a-zA-Z0-9\s]+");
SingleEntry("cityname","[a-zA-Z\s]+");
SingleEntry("firstname","[a-zA-Z\s]+");
SingleEntry("surname","[a-zA-Z\s]+");
SingleEntry("eaddress","[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
//validation for types except numeric only
function SingleEntry(y,Namepattern){
    let x=document.getElementById(y);
    x.addEventListener('keyup',function(e){
        let xValue="";
        xValue= xValue.concat(x.value);
        if(!xValue.match(Namepattern)){
            x.style.border="2px solid red";
        }else{
            x.style.border="2px solid greenyellow";       
        }
    });    
}




//validation for numeric only
NumericInput("cardccv",3);
NumericInput("Zip-Code",5);
NumericInput("phonenumber",10);
 function NumericInput(ID,length){
    let numericvalue=document.getElementById(ID);
    numericvalue.addEventListener('keyup',function(e){
        var pattern=`[0-9]{${length}}`;
        let numerical=numericvalue.value;
        numerical=numerical.replace(/\s/g,'');
        numericvalue.value=numerical;
        if (!numerical.match(pattern)){
            numericvalue.style.border="2px solid red";
        }else{
            numericvalue.style.border="2px solid greenyellow";
        }
    });   
 }


let CountryName=document.getElementById("Country");
CountryName.addEventListener('click',function(e){
    let CName=CountryName.value;
    if (CName==""){
        CountryName.style.border="2px solid red";
    }else{
        CountryName.style.border="2px solid greenyellow";
    }
});
//form border turn green if accepted
let formone=document.getElementById("form_one");
let fieldone=document.getElementById("fieldone");
let subformone=false;
formone.addEventListener('submit',function(e){
    e.preventDefault();
    subformone=true;
    fieldone.style.border="3px solid greenyellow";
    allFormChecked();
});

//reset
formone.addEventListener('reset',function(e){
    inputformone=formone.getElementsByTagName("input")
    for(let i=0;i<inputformone.length;i++){
        inputformone[i].style.border="2px solid red";
    }
});
//form border turn green if accepted
let formtwo=document.getElementById("form_two");
let fieldtwo=document.getElementById("fieldtwo");
let subformtwo=false;
formtwo.addEventListener('submit',function(e){
    e.preventDefault();
    subformtwo=true;
    fieldtwo.style.border="3px solid greenyellow";
    allFormChecked();
});


//reset
formtwo.addEventListener('reset',function(e){
    inputformtwo=formtwo.getElementsByTagName("input");
    selectformtwo=formtwo.getElementsByTagName("select");
    selectformtwo[0].style.border="2px solid red";
    for(let i=0;i<inputformtwo.length;i++){
        if (i!=1 && i!=2 && i!=4){
            inputformtwo[i].style.border="2px solid red";
        }
    }
});
//form border turn green if accepted
let formthree=document.getElementById("form_three");
let fieldthree=document.getElementById("fieldthree");
let subformthree=false;
formthree.addEventListener('submit',function(e){
    e.preventDefault();
    subformthree=true;
    fieldthree.style.border="3px solid greenyellow";
    allFormChecked();
});


//reset
formthree.addEventListener('reset',function(e){
    inputformthree=formthree.getElementsByTagName("input")
    for(let i=0;i<inputformthree.length;i++){
        inputformthree[i].style.border="2px solid red";
    }
});

//placeorder form button turn blue if all form submitted
function allFormChecked(){
    let finalSet=document.getElementById("finalset");
    let finalButton=document.getElementById("PlaceOrder");
    if(subformone && subformtwo && subformthree){
        finalSet.style.border="3px solid blue";
        finalButton.style.backgroundColor="blue";
    }
}
//return to shop if submit accepted
let FinalOrder=document.getElementById("PlaceOrder");
FinalOrder.addEventListener('click',function(e){
    if(!subformone || !subformtwo || !subformthree){
        e.preventDefault();
        alert("Please fill the red box(s)before placing order");
        return;
    }
    alert("The order has been placed successfully");
    window.location.href="shop.html";     
});
//returm to shop if exit
let FinalExit=document.getElementById("Exit");
FinalExit.addEventListener('click',function(e){
    alert("The order has been cancelled");
    window.location.href="shop.html";
});