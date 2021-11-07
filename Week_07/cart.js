export {addProductToCart,queryProduct,emptyCart,outOfStock,toggleSearchMenu}
import { productList } from './product.js';
import { showProduct } from './script.js';

let cart = [];
function queryProduct(){
    let divProduct = document.querySelector('#product');
    const pName = document.getElementById("pName");
const checkAvailable = document.querySelector('#checkAvailable');
    if(checkAvailable.checked==false & pName.value==''){
        divProduct.innerHTML = '';
        showProduct(productList)
    } 
    else{
        divProduct.innerHTML = '';
        let newProductList = [];
        for(let p of productList){
            if(p.name.toLowerCase().includes(pName.value.toLowerCase()) | pName.value==''){
                // console.log("match");
                if(checkAvailable.checked==true){
                    if(p.stock>0) newProductList.push(p);
                    // console.log("check : true")
                }
                else{
                    newProductList.push(p);
                }
            }
        }
        
        showProduct(newProductList)
    }
    
}

//Function for adding product---------------------
function addProductToCart(event){
    let id = event.target.id;
    let qty = 1 ;
    let check = false;
    if(cart.length!=0){
        for(let i=0; i<cart.length; i++)
        {
            if(check == false)
             if(cart[i].productID==id) {
                check = true ;
                cart[i].quantity += 1;}
             else{check = false}           
        }
        if(check == false){
            cart.push({productID : id,quantity : qty})
            alert(` " ${id} " added in your cart`);}

    }else{        
        cart.push({productID : id,quantity : qty})
        if(cart.includes(id)){}
        else{ alert(` " ${id} " added in your cart`);}  
    }
    console.log(cart)
    numProductInCart();
}

function numProductInCart(){
    let numProductInCart=0;
    for(let c of cart){
        numProductInCart += c.quantity;
    }
    console.log(numProductInCart);
    let numCart = document.querySelector("#numCart");
    numCart.innerHTML = numProductInCart
}

let searchMenuShow = false;
function toggleSearchMenu(){
    if(searchMenuShow){
        document.querySelector('#searchName').setAttribute('style','display:none');
        document.querySelector('#searchAvailable').setAttribute('style','display:none');
        document.querySelector('#searchButton').setAttribute('style','display:none');
        document.querySelector('#empty').setAttribute('class','col-xs-9');
    }
    else{
        document.querySelector('#searchName').setAttribute('style','display:inline');
        document.querySelector('#searchAvailable').setAttribute('style','display:inline');
        document.querySelector('#searchButton').setAttribute('style','display:inline');
        document.querySelector('#empty').setAttribute('class','col-xs-3');
    }
    console.log(searchMenuShow);
    searchMenuShow = !searchMenuShow;
}

function outOfStock(event){
    alert(event.target.id + " is not available now!")
}


function emptyCart(){
    cart = [];
    numProductInCart();
    alert('You cart is empty now!')
}