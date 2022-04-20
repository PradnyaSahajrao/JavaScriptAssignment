//document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1

// console.log(count)

let countEl = document.getElementById("count-el") //pass by argument
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

console.log("Let's count peopleon the subway")