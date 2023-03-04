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

/***********  Events (Mobile) *******/

if (screen.width <= 765) {
    chessPiece.addEventListener("touchstart", touchStartHandler)

    blocks.forEach(item => {
        item.addEventListener("touchmove", touchMoveHandler)
    })
}

/***********  Global Scope  **********/

let DraggedItem

if (screen.width <= 765) {
    let DraggedItemMobile
}

/***********  Handlers ***************/

function dragStartHandler(e) {
    DraggedItem = e.target
    console.log(screen.width);
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

/***********  Handlers (mobile) ***************/

function touchStartHandler(e) {
    DraggedItemMobile = e.target
    console.log(touchLocation);

}

function touchMoveHandler(e) {
    let touchLocation = e.targetTouches[0];
    chessPiece.style.left = touchLocation.pageX + 'px';
    chessPiece.style.top = touchLocation.pageY + 'px';
}