import { product1,product2,product3,product4,product5 } from "./product";

const CproductList = [product1,product2,product3,,product4,product5];
const CProduct = document.querySelector('product');
const CdivProduct = document.createElement('div');
CdivProduct.setAttribute('id',product.id);
let a = "id";
CdivProduct.appendChild(a);


// CproductList.forEach(Cproduct) => {
//   let li = document.createElement('li');
//   li.innerHTML = Cproduct.id;
//   li.innerHTML = Cproduct.name;
//   li.innerHTML = Cproduct.description;
// }



// for(const Cpro of CproductList){
//   let CdivPro = document.createElement('div');
//   let CId = document.createElement('p').textContent(Cpro.id);
//   let CName = document.createElement('p').textContent(Cpro.name);
//   let CDesc = document.createElement('p').textContent(Cproduct1.description);
//   let CPrice = document.createElement('p').textContent(Cpro.price);
//   let CStock = document.createElement('p').textContent(Cpro.stock);
//   CdivPro.appendChild(CId, CName, CDesc, CPrice, CStock);
//   CdivProduct.appendChild(CdivPro);
// }
