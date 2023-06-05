// import uniqid from 'uniqid'; 

let plus = document.querySelector('.options__link-plus')
let trash = document.querySelector('.options__link-trash')
let cancel = document.querySelectorAll('.options__link-exit')
let newBlank = document.querySelector('.fill-background')
let oldBlank = document.querySelector('.make')
let inputTitle = document.querySelector('#text-first')
let inputDescr = document.querySelector('#text-second')
let inputAuth = document.querySelector('#text-third')
let create = document.querySelector('#fill__btn-create');
// let cancel = document.querySelector('#fill__btn-cancel')
let makeProg = document.querySelector('.makeProgress')
let delet = document.querySelector('.box__wrapper-btn-del')
let doneBlank = document.querySelector('.finish')
let totalCountToDo = document.querySelector('.totalCountToDo');
let totalCountInProg = document.querySelector('.totalCountInProg');
let totalCountDone = document.querySelector('.totalCountDone');
let options = document.querySelector('.options')

// использовать пакет idGenerator 

let arr = []

totalCountToDo.textContent = arr.length

const nowDate = new Date()

// totalCountDone.append(totalDone)
// totalCountInProg.append(totalInProg)
// totalCountToDo.append(totalToDo)



// делать только одну задау в функциях
const addTask = () => { //нажатие на плюс, открытие формы
    // сделать функцию по созданию таски

    plus.addEventListener('click', () => {
        newBlank.classList.add('toggle-popup');
        // console.log(newBlank.classList)
    })
    create.addEventListener('click', (e) => {
        let validText = document.querySelector('.valid-text')
        e.preventDefault()
        if (inputTitle.value.length !== 0 && inputDescr.value.length !== 0 && inputAuth.value.length !== 0) {
            let obj = {
                title: inputTitle.value,
                decrs: inputDescr.value,
                auth: inputAuth.value,
                done: false,
                inprogress: false,
                // id: uniqid()
            }
            validText.innerHTML = ''
            arr.push(obj)

            renderTask()
            newBlank.classList.remove('toggle-popup');
            inputTitle.value = ''
            inputDescr.value = ''
            inputAuth.value = ''
        } else {
            console.log(validText)
            validText.innerHTML = `
            <h1 class="empty">fill all input fields</h1>`
        }
    })
}


const trashTask = () => { //нажатие на корзину
    options.addEventListener('click', (event) => {
        let target = event.target
        if (target.className === 'options__link-trash-do' ) {
            // console.log(target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
            arr = arr.filter(item => item.done !== false && item.inprogress !== false)
        }
        // else if (target.className === 'options__link-trash-prog' ) {
        //     // console.log(target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
        //     arr = arr.filter(item => item.done === false && item.inprogress === true)
        // }
        // else if (target.className === 'options__link-trash-done' ) {
        //     // console.log(target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
        //     arr = arr.filter(item => item.done === true && item.inprogress === false)
        // }
        console.log(arr)
        renderTask()
        })
    }
//     )
// }



const cancelForm = () => { //кнопка закрыть на форме
    cancel.forEach(item => {
        item.addEventListener('click', () => {
            // console.log(item)
            newBlank.classList.remove('toggle-popup'); //add/remove
        })
    })
}


const renderTask = () => { //отрисовывает task
    oldBlank.innerHTML = ''
    makeProg.innerHTML = ''
    doneBlank.innerHTML = ''
    arr.forEach(item => {
        let box = document.createElement('div')
        box.classList.add('box')
        if (item.done === false && item.inprogress === false) {
            box.innerHTML = `
            <div class="box__title">
                <p>ToDo</p>
                <p>${nowDate.toLocaleDateString()}</p>
            </div>
            <div class="box__divider-up">
                <hr>
            </div>
            <div class="box__title-input">${item.title}</div>
            <div class="box__description">
            <div class="box__description-input">${item.decrs}</div>
            </div>
            <div class="box__divider-low">
                <hr>
            </div>
            <div class="box__wrapper">
            <div class="box__wrapper-author">${item.auth}</div>
            <div class="box__wrapper-btn">
                <button class="box__wrapper-btn-inprog">In Prog</button>
                <button class="box__wrapper-btn-done">Done</button>
                <button class="box__wrapper-btn-del">del</button>
            </div>
            </div>   
                `
            oldBlank.append(box);
        } else if (item.done === false && item.inprogress === true) {

            box.innerHTML = `
            <div class="box__title">
                <p>ToDo</p>
                <p>${nowDate.toLocaleDateString()}</p>
            </div>
            <div class="box__divider-up">
                <hr>
            </div>
            <div class="box__title-input">${item.title}</div>
            <div class="box__description">
            <div class="box__description-input">${item.decrs}</div>
            </div>
            <div class="box__divider-low">
                <hr>
            </div>
            <div class="box__wrapper">
            <div class="box__wrapper-author">${item.auth}</div>
            <div class="box__wrapper-btn">
                <button class="box__wrapper-btn-done">Done</button>
                <button class="box__wrapper-btn-del">del</button>
            </div>
            </div>   
                `
            makeProg.append(box);
        } else if (item.done === true && item.inprogress === false) {
            box.innerHTML = `
            <div class="box__title">
                <p>ToDo</p>
                <p>${nowDate.toLocaleDateString()}</p>
            </div>
            <div class="box__divider-up">
                <hr>
            </div>
            <div class="box__title-input">${item.title}</div>
            <div class="box__description">
            <div class="box__description-input">${item.decrs}</div>
            </div>
            <div class="box__divider-low">
                <hr>
            </div>
            <div class="box__wrapper">
            <div class="box__wrapper-author">${item.auth}</div>
            <div class="box__wrapper-btn">
                <button class="box__wrapper-btn-inprog">In Prog</button>
                <button class="box__wrapper-btn-del">del</button>
            </div>
            </div>   
                `
            doneBlank.append(box);
        }
        console.log(arr)
    })
    counter()
    saveStorage()
}

const deleteTask = () => { //кнопка delete
    options.addEventListener('click', (event) => {
        let target = event.target
        if (target.className === 'box__wrapper-btn-del' ) {
            console.log(target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
            arr = arr.filter(item => item.title !== target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
        }
        console.log(arr)
        renderTask()
    })

}



const doneTask = () => { //кнопка done
    options.addEventListener('click', (event) => {
        let target = event.target
        if (target.className === 'box__wrapper-btn-done') {
            console.log(target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
            arr.filter(item => {
                if (item.title === target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent) {
                    item.done = true
                    item.inprogress = false
                }
            })
            renderTask()
        }
    })

    console.log(arr);
}

const inProgTask = () => { //кнопка in prog
    options.addEventListener('click', (event) => {
        let target = event.target
        if (target.className === 'box__wrapper-btn-inprog') {
            console.log(target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
            arr.forEach(item => {
                if (item.title === target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent) {
                    item.inprogress = true
                    item.done = false
                }
            })
            renderTask()
        }
    })
    console.log(arr);
}


const counter = () => {
    totalCountToDo.textContent = arr.filter(item => item.done === false && item.inprogress === false).length
    totalCountInProg.textContent = arr.filter(item => item.done === false && item.inprogress === true).length
    totalCountDone.textContent = arr.filter(item => item.done === true && item.inprogress === false).length
}

const saveStorage = () => {
    localStorage.setItem("item", JSON.stringify(arr))
}

const drawStorage = () => {
    if (localStorage.getItem("item")) {
        arr = JSON.parse(localStorage.getItem("item"))
        renderTask()
    }
    else {
        arr = []
    }
}

drawStorage()
addTask()
trashTask()
cancelForm()
deleteTask()
doneTask()
inProgTask()

