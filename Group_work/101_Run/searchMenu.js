import { searching } from './event.js'

let getSch = document.querySelector('#search');
getSch.setAttribute('class', 'ms-5 mt-4')
let search = document.createElement('img');
search.setAttribute('id','Simg')
search.setAttribute('src','https://www.pngall.com/wp-content/uploads/8/Vector-Search.png');
search.height = "50";
getSch.appendChild(search);

let divWrap = document.createElement('div')
divWrap.setAttribute('style', 'display: none;');

let inputText = document.createElement('input');
inputText.setAttribute('id', 'SearchProduct');
inputText.setAttribute('type', 'text');
inputText.setAttribute('placeholder', 'Search...')
divWrap.appendChild(inputText);

const button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute('id', 'buttonSch')
button.setAttribute("class", "ms-3 btn btn-primary btn-sm");
button.textContent = "Search";
divWrap.appendChild(button)
getSch.appendChild(divWrap)

button.addEventListener('click', searching);



const searchBtn = document.querySelector('#Simg');
searchBtn.addEventListener('click', myClick, false)
let ClickCount = 0;
function myClick() {
    ClickCount++;
    if (ClickCount % 2 == 0) {
        divWrap.setAttribute('style', 'display: none;');
    } else {
        divWrap.setAttribute('style', 'display: inline;');
    }
}
