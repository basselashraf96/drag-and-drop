/***********  DOM Elements ***************/

const chessPiece = document.querySelector(".block img")
const blocks = document.querySelectorAll(".block")


/***********  Events ***************/

chessPiece.addEventListener("dragstart", dragStartHandler)

blocks.forEach(item => {
    item.addEventListener("dragover", dragOverHandler)
    item.addEventListener("drop", dragHandler)
    item.addEventListener("dragenter", dragEnterHandler)
    item.addEventListener("dragleave", dragLeaveHandler)
})


/***********  Global Scope  **********/

let DraggedItem

/***********  Handlers ***************/

function dragStartHandler(e) {
    DraggedItem = e.target
}

function dragHandler(e) {
    e.target.append(DraggedItem)
    e.target.classList.remove("active")
}

function dragOverHandler(e) {
    e.preventDefault()
}

function dragEnterHandler(e) {
    e.target.classList.add("active")
}

function dragLeaveHandler(e) {
    e.target.classList.remove("active")
}