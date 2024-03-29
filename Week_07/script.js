import { productList } from './product.js';
import {addProductToCart,queryProduct,emptyCart,outOfStock,toggleSearchMenu} from './cart.js'

export{showProduct};
// console.log(productList);
//query for id = product
let divProduct = document.querySelector('#product');

createnavBar();

function createnavBar(){
    //create navBar
    let navBar = document.querySelector("#navbar");
    navBar.setAttribute('class','navbar');
    navBar.setAttribute('style','background-color:#337ab7;color:white');

    //Create inner div in navbar
    let divNavRow = document.createElement('div');
    divNavRow.setAttribute('class','row');
    divNavRow.setAttribute('style','margin: 0.5em;padding: 0.5em');

    //Create 'SearchMenu' button
    let divNavSearchFor = document.createElement('div');
    divNavSearchFor.setAttribute('class','col-xs-1');
    let navBarSearchMenuBtn = document.createElement('button');
    navBarSearchMenuBtn.setAttribute('type','button');
    navBarSearchMenuBtn.setAttribute('id','searchMenu')
    navBarSearchMenuBtn.setAttribute('class','btn btn-primary')
    navBarSearchMenuBtn.setAttribute('style','border-color:#fff')
    let navBarSearchMenu = document.createElement('img');
    navBarSearchMenu.setAttribute('src','image/search.png')
    navBarSearchMenu.setAttribute('style','width:2.5em;height:2.5em');
    navBarSearchMenuBtn.appendChild(navBarSearchMenu);
    divNavSearchFor.appendChild(navBarSearchMenuBtn);
    divNavRow.appendChild(divNavSearchFor);
    
    //Create 'Search product name'
    let navBarSearchName = document.createElement('div');
    navBarSearchName.setAttribute('class','col-xs-3');
    navBarSearchName.setAttribute('style','display:none')
    navBarSearchName.setAttribute('id','searchName')
    navBarSearchName.appendChild(document.createTextNode('Product name:'));
    let navBarTextBox = document.createElement('input');
    navBarTextBox.setAttribute('type','text');
    navBarTextBox.setAttribute('id','pName');
    navBarTextBox.setAttribute('value','');
    navBarTextBox.setAttribute('style','color:#000;')
    navBarSearchName.appendChild(navBarTextBox);
    divNavRow.appendChild(navBarSearchName);

    //Create 'Search for available' (Stock = 0)
    let navBarSearchAvailable = document.createElement('div');
    navBarSearchAvailable.setAttribute('class','col-xs-2');
    navBarSearchAvailable.setAttribute('id','searchAvailable')
    navBarSearchAvailable.setAttribute('style','display:none')
    let navBarCheckBox = document.createElement('input');
    navBarCheckBox.setAttribute('type','checkbox');
    navBarCheckBox.setAttribute('id','checkAvailable');
    navBarCheckBox.setAttribute('style','color:#000');
    navBarSearchAvailable.appendChild(navBarCheckBox);
    navBarSearchAvailable.appendChild(document.createTextNode('Product available (in stock)'));
    divNavRow.appendChild(navBarSearchAvailable);

    //Create Search button
    let navBarSearchBtn = document.createElement('div');
    navBarSearchBtn.setAttribute('class','col-xs-1');
    navBarSearchBtn.setAttribute('id','searchButton');
    navBarSearchBtn.setAttribute('style','display:none')
    let searchButton = document.createElement('button');
    searchButton.setAttribute('type','button');
    searchButton.setAttribute('class','btn btn-outline-default');
    searchButton.setAttribute('style','color:#000')
    searchButton.setAttribute('id','search');
    searchButton.appendChild(document.createTextNode('Search'))
    navBarSearchBtn.appendChild(searchButton);
    divNavRow.appendChild(navBarSearchBtn);

    //Create Empty div
    let navBarEmpty = document.createElement('div');
    navBarEmpty.setAttribute('class','col-xs-9');
    navBarEmpty.setAttribute('id','empty')
    divNavRow.appendChild(navBarEmpty);

    //Create Cart
    let navBarCart = document.createElement('div');
    navBarCart.setAttribute('class','col-xs-2');
    let cartPic = document.createElement('img');
    cartPic.setAttribute('src','image/cart.png');
    cartPic.setAttribute('style','width:3em;height:3em');
    navBarCart.appendChild(cartPic);
    let navBarNumCart = document.createElement('span');
    navBarNumCart.setAttribute('id','numCart');
    navBarNumCart.setAttribute('style','font-size: 20px')
    navBarNumCart.appendChild(document.createTextNode(0));
    navBarCart.appendChild(navBarNumCart);
    navBarCart.appendChild(document.createTextNode(' products in cart '))
    let navBarTrashButton = document.createElement('button');
    navBarTrashButton.setAttribute('id','trash');
    navBarTrashButton.setAttribute('class','btn btn-primary');
    navBarTrashButton.setAttribute('style','border-color:#fff')
    let trash = document.createElement('img')
    trash.setAttribute('src','image/bin.png')
    trash.setAttribute('style','width:2em;height:2em');
    navBarTrashButton.appendChild(trash)
    navBarCart.appendChild(navBarTrashButton)
    divNavRow.appendChild(navBarCart);


    //appendChild to all element
    navBar.appendChild(divNavRow);
}

showProduct(productList);
// showProduct(productList);

function showProduct(productList){
    for(let p of productList){
        let divP = document.createElement('div');
        divP.setAttribute('id',p.id);
        divP.setAttribute('class','col-md-5')
        divP.setAttribute('style','padding:2em;margin:2em;border:double grey 1px;height:auto;')
        //Add image of product
        let img = document.createElement('img');
        img.setAttribute('src',p.image);
        img.setAttribute('style','width:16em;height:16em;margin-left: 25%')
        divP.appendChild(img)
        divP.appendChild(document.createElement('br'));
        //Add product details
        divP.appendChild(document.createTextNode('ID: ' + p.id));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Name: ' + p.name));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Desription: ' + p.description));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Price: ' + p.price + ' baht'));
        divP.appendChild(document.createElement('br'));
        divP.appendChild(document.createTextNode('Stock: ' + p.stock));
        divP.appendChild(document.createElement('br'));
        
        //create button
        const button = document.createElement('button');
        button.setAttribute('type','button');
        button.setAttribute('id',p.id)
        if(p.stock==0){
            button.setAttribute('class','btn btn-danger');
            button.appendChild(document.createTextNode("Out of stock"));
            button.addEventListener('click',outOfStock)
        }
        else{
            button.setAttribute('class','btn btn-primary');
            button.appendChild(document.createTextNode("Buy"));
            button.addEventListener('click',addProductToCart)
        }
        divP.appendChild(button);
        divProduct.appendChild(divP);
    }
}
// divProduct.innerHTML= ' ';

//function for showing search menu---------------------
const searchBtnMenu = document.querySelector('#searchMenu');
searchBtnMenu.addEventListener('click',toggleSearchMenu)


//function for searching product------------------------
const searchBtn = document.querySelector('#search');
// const pName = document.getElementById("pName");
// const checkAvailable = document.querySelector('#checkAvailable');

searchBtn.addEventListener('click', queryProduct);

//Function empty the cart
const trashButton = document.querySelector('#trash');
trashButton.addEventListener('click',emptyCart)





