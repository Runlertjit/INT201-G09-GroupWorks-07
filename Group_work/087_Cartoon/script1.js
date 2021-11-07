import { productList } from './product.js';
console.log(productList);
//query for id = product
let divProduct = document.querySelector('#product');
// divProduct.setAttribute('class','col')

for(let p of productList){
    let divP = document.createElement('div');
    divP.setAttribute('id',p.id);
    divP.setAttribute('class','row')
    divP.setAttribute('style','padding:1em;margin:1em;border:double grey 1px;width 150px')
    //Add image of product
    let img = document.createElement('img');
    img.setAttribute('src',p.image);
    img.setAttribute('style','width:16em;')
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
    button.setAttribute('class','btn btn-primary')
    button.appendChild(document.createTextNode("Buy"));
    divP.appendChild(button);
    divProduct.appendChild(divP);
}

