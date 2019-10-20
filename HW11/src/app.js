//let rootNode = document.getElementById("root");
function liInner(innerText) {
    return `<span class="item">
    <i class="material-icons md-blue">check_box_outline_blank</i>
    <span class="text"> ` + innerText +` </span>
    <i class="material-icons md-36 md-blue">create</i>
</span>
<i class="material-icons md-36 md-blue">delete</i>`;
}

let itemToAdd; //read from input

itemToAdd = 'Find the cat';

let list = document.querySelector('ul.list');
let li = document.createElement('li');
li.innerHTML = liInner(itemToAdd);
list.appendChild(li);