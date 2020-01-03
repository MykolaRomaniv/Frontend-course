//let rootNode = document.getElementById("root");

document.addEventListener('DOMContentLoaded', function () {

    let list = document.querySelector('.list');

    let addBtn = document.querySelector('.add');
    addBtn.addEventListener('click', addLi);

    let itmeInput = document.querySelector('#item-input');
    itmeInput.addEventListener('input', inputChecker);

    function inputChecker(e) {
        if (e.target.value) {
            e.target.nextElementSibling.classList.remove('md-inactive');
            e.target.nextElementSibling.classList.add('md-blue');
        } else {
            e.target.nextElementSibling.classList.remove('md-blue');
            e.target.nextElementSibling.classList.add('md-inactive');
        }
    }

    function addLi(e) { //addBtn
        let liText;
        if (liText = itmeInput.value) {
            let li = document.createElement('li');
            li.innerHTML = liInner(liText);
            li.setAttribute('draggable', 'true');
            li.firstChild.firstChild.addEventListener('click', checked); //li -> span -> <i>checkbox</i> 
            li.firstChild.lastChild.addEventListener('click', upd); //li -> span -> <i>create</i>
            li.lastChild.addEventListener('click', del);
            addDragNDropListeners(li);
            list.appendChild(li);
        }
    }

    function liInner(innerText) {
        return '<span class="item">' +
            '<i class="material-icons md-blue checkbox">check_box_outline_blank</i>' +
            '<span class="text">' + innerText + '</span>' +
            '<i class="material-icons md-36 md-blue">create</i>' +
            '</span>' +
            '<i class="material-icons md-36 md-blue">delete</i>';
    }

    function checked(e) { //checkbox
        if (e.target.textContent === 'check_box_outline_blank') {
            e.target.textContent = 'check_box';
        } else {
            e.target.textContent = 'check_box_outline_blank';
        }
    }

    function del(e) { //delBtn
        document.querySelector('ul').removeChild(e.target.parentNode); //deleteBtn -> li
    }

    function upd(e) { //createBtn 
        let updBox = document.createElement('span');
        updBox.classList.add('item');
        updBox.classList.add('upd-item');
        updBox.innerHTML =
            '<input type="text"><i class="material-icons md-36 md-inactive">save</i>';
        updBox.firstChild.addEventListener('input', inputChecker);
        updBox.lastChild.addEventListener('click', () => {
            if (updBox.firstChild.value) {
                updBox.previousElementSibling.firstChild.childNodes[1].innerText = updBox.firstChild.value;
                updBox.remove(); //TODO something smarter
            }
        });
        insertAfter(updBox, e.target.parentNode.parentNode); //createBtn -> span -> li
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

function dragStart(e) {
    activeElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragLeave(e) {
    e.stopPropagation();
}

function dragOver(e) {
    e.preventDefault();
    return false;
}

function dragDrop(e) {
    if (activeElement && activeElement !== this) {
        activeElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function addDragNDropListeners(node){
    node.addEventListener('dragstart', dragStart, false);
    node.addEventListener('dragover', dragOver, false);
    node.addEventListener('dragleave', dragLeave, false);
    node.addEventListener('drop', dragDrop, false);
}

});