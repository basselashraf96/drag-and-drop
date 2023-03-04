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
    chessPiece.addEventListener("touchmove", touchMoveHandler)
    chessPiece.addEventListener("touchend", touchEndHandler)
}

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

/***********  Handlers (mobile) ***************/
function touchMoveHandler(e) {
    let touchLocation = e.targetTouches[0];
    chessPiece.style.left = touchLocation.pageX - 150 + '% ';
    chessPiece.style.top = touchLocation.pageY - 480 + 'px';
}

let lastX = `0%`
let lastY = `0%`

function touchEndHandler(e) {
    // current box position.
    let x = parseInt(chessPiece.style.left);
    let y = parseInt(chessPiece.style.top);

    if ((x <= 40 && x >= -40) && (y <= 30 && y >= -30)) {
        chessPiece.style.left = `0%`
        chessPiece.style.top = `0%`
        lastX = `0%`
        lastY = `0%`
    } else if ((x <= 140 && x >= 62) && (y <= 30 && y >= -30)) {
        chessPiece.style.left = `100%`
        chessPiece.style.top = `0%`
        lastX = `100%`
        lastY = `0%`

    } else if ((x <= 240 && x >= 160) && (y <= 30 && y >= -30)) {
        chessPiece.style.left = `200%`
        chessPiece.style.top = `0%`
        lastX = `200%`
        lastY = `0%`
    } else {
        chessPiece.style.left = lastX
        chessPiece.style.top = lastY
    }
}