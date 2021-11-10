export {addProductToCart,queryProduct,emptyCart,outOfStock,toggleSearchMenu}
import { productList } from './product.js';
import { showProduct } from './script.js';

let cart = [];
function queryProduct(){
    if(checkAvailable.checked==false & pName.value==''){ //เผื่อปัด cas นี้ทิ้ง ดักกรณีไว้ก่อน
        // checkAvailable.checked เพื่อดูว่าติ๊กอยู่รึเปล่า
        // ไม่มีเงื่อนไข แสดงผลทุกรายการ ต้องมีโค้ด 2 บรรทัดล่างเผื่อในกรณีที่มีการ query บางส่วน แล้วยกเลิก จะได้แสดงผลทั้งหมดออกมา
        divProduct.innerHTML = '';
        showProduct(productList)
    } 
    else{
        divProduct.innerHTML = ''; // ล้างข้อมูลใน div product
        let newProductList = [];
        for(let p of productList){
            if(p.name.toLowerCase().includes(pName.value.toLowerCase()) | pName.value==''){//เช็คว่า pName ไม่มีเงื่อนไข หรือ pName ตรงกับค่า product ของเรา
                if(checkAvailable.checked==true){//เช็คในส่วน checkAvailable ว่ามีการตรวจว่ามีของหรือไม่
                    if(p.stock>0) newProductList.push(p); // ถ้า stock = 0 ก็จะไม่แสดงผล
                }
                else{
                    newProductList.push(p); // ไม่มีเงื่อนไขเพิ่มเติมก็เอาข้อมูลนั้น push ลง array ได้เลย
                }
            }
        }
        
        showProduct(newProductList) // เรียก function การแสดงผล โดยส่ง parameter เป็น array ที่เราทำการกรอง เลือก ข้อมูลแล้ว
    }
    
}

//Function for adding product---------------------
function addProductToCart(event){
    let id = event.target.id; // รับ Id ของ button
    let check = cart.find(value => { return value.id == id}) //ใช้ find ในการหาสินค้าในตะกร้า
    if(check != undefined){ //ถ้าไม่พบสินค้าในตะกร้า
        check.quantity++ // ถ้าเป็น True ให้เพิ่มจำนวนสินค้า
    }else{
        cart.push({id : id,quantity : 1}) //กรณีเป็น False ให้เพิ่ม id และจำนวนสินค้าภายในตะกร้า
        alert(` " ${id} " added in your cart`); // แสดง alert
    }
    console.log(cart)
    numProductInCart(); // เรียกใช้ numproductIncart เพื่อให้แสดงจำนวนสินในตะกร้า
}

function numProductInCart(){
    let numProductInCart = cart.reduce((count, cartItem) => count + cartItem.quantity, 0); //นับจำนวนสินค้าในตะกร้า
    console.log(numProductInCart);
    let numCart = document.querySelector("#numCart"); //รับ id numCart
    numCart.innerHTML = numProductInCart //ส่ง numCart ให้แสดง DOM 
}

let searchMenuShow = false; 
function toggleSearchMenu(){
    if(searchMenuShow){//searchMenu แสดงผลอยู่ -> ถ้ากดก็จะซ่อน
        document.querySelector('#searchName').setAttribute('style','display:none');
        document.querySelector('#searchAvailable').setAttribute('style','display:none');
        document.querySelector('#searchButton').setAttribute('style','display:none');
        document.querySelector('#empty').setAttribute('class','col-xs-9');
    }
    else{ //searchMenu ซ่อนอยู่ -> ถ้ากดจะแสดง
        document.querySelector('#searchName').setAttribute('style','display:inline');
        document.querySelector('#searchAvailable').setAttribute('style','display:inline');
        document.querySelector('#searchButton').setAttribute('style','display:inline');
        document.querySelector('#empty').setAttribute('class','col-xs-3');
    }
    // console.log(searchMenuShow);
    searchMenuShow = !searchMenuShow;
}

function outOfStock(event){ //กรณีที่กดเลือกของที่ out of stock (stock=0) จะแสดง alert ขึ้นมาเตือน
    alert(event.target.id + " is not available now!")
}


function emptyCart(){ //ล้างตะกร้า ทำให้ array ที่เก็บข้อมูลกลายเป็น array เปล่าๆ
    cart = [];
    numProductInCart(); // เรียก function เพื่อให้ update จำนวนข้อมูลในตะกร้าสินค้า
    alert('You cart is empty now!') // แจ้ง alert ให้กับ user
}