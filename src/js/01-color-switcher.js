const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),

}
let colorId = null
refs.startBtn.isActive = false
console.log(refs.startBtn.isActive)

refs.startBtn.addEventListener("click", fnColorSetIntStart)
refs.stopBtn.addEventListener("click", fnColorSetIntStop)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function fnColorSetIntStart() {
    if (refs.startBtn.isActive) {
        return
    }
    refs.startBtn.isActive = true
    colorId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    console.log(refs.startBtn.isActive)
}

function fnColorSetIntStop() {
    clearInterval(colorId)
    refs.startBtn.isActive = false
    console.log(refs.startBtn.isActive)
}