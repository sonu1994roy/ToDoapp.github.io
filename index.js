const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");


// ------menu bar defind -------
const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});
// --- defind fnction for close nave menu bar if open menu-------
navClose.addEventListener("click", (e) => {
    e.preventDefault();
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

//  fix nav bar--------
const navFix = navBar.getBoundingClientRect().height;
const link = document.querySelector(".rmv-link")
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > navFix) {
        navBar.classList.add("fix-nav");
        link.classList.add("remove1-link")
    }
    else {
        navBar.classList.remove("fix-nav");
        link.classList.remove("remove1-link")
    }
})

// click link and and relocate href link ...........
const links = [...document.querySelectorAll(".scroll-link")];

links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = e.target.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navFix;

        window.scrollTo({
            top: position,
            left: 0,
        });
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    });
});



const textInput = document.querySelector(".textInput");
const addBtn = document.querySelector(".addBtn")
const dltBtn = document.querySelector(".dltBtn")

//  fnction definde for user input  undefinde value todo app-------
addBtn.addEventListener("click", function (e) {
    if (textInput.value.trim() != 0) {
        let localItem = JSON.parse(localStorage.getItem('localItem'))
        if (localItem === null) {
            taskList = []
        } else {
            taskList = localItem;
        }
        taskList.push(textInput.value)
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }
    showItem()
})

// -------function definde for inupt item and dom manupate---------

function showItem() {
    let localItem = JSON.parse(localStorage.getItem('localItem'))
    if (localItem === null) {
        taskList = []
    } else {
        taskList = localItem;
    }
    let html = '';
    let itemShow = document.querySelector('.todoList');
    taskList.forEach((data, index) => {
        html += `<li class="listItem">${data}<span class="icone" onclick=" deleteItem(${index})"> <i class="fas fa-times"></i></span></li>`
    })
    itemShow.innerHTML = html
}
showItem()


//---- function definde for  delete item-------
function deleteItem(index) {
    let localItem = JSON.parse(localStorage.getItem('locaItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}
function clearTask() {
    localStorage.clear()
    showItem()
}


// -----clear all iteam from loacl stroge---------
let clearAll = document.querySelector(".clearAll");
clearAll.addEventListener("click", function (index) {
    // let localItem = JSON.parse(localStorage.getItem('locaItem'))
    taskList = []
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
})
// function clearTask(){
//     localStorage.clear()
//     showItem()
// } 

