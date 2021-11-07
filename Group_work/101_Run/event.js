export {addCart,remove,searching}
let cart = [];

function addCart(event){
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
            console.log(cart);
            let count = document.querySelector('#num')
            count.innerHTML = countCart();
    }else{        
        cart.push({productID : id,quantity : qty})
        if(cart.includes(id)){}
        else{ alert(` " ${id} " added in your cart`);}  
        console.log(cart);
        let count = document.querySelector('#num')
        count.innerHTML = countCart();  
    }
}

function countCart(){
    let qty = 0;
    for(let i=0;i<cart.length;i++){
       qty += cart[i].quantity;
    }
    return qty
}

function remove(){
    let count = document.querySelector('#num')
    cart = [];
    count.textContent = cart.length;
}

function searching() {
    const productAll = document.getElementsByClassName('sProduct') 
    const searchString = document.querySelector('#SearchProduct');
    const filter = searchString.value.toLowerCase();
    for (let product of productAll){
        let name = product.textContent.toLocaleLowerCase();
        if(name.includes(filter)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }
    }
}