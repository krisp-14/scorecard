let countHome = document.getElementById("count-el-home")
let countAway = document.getElementById("count-el-away")
let newGame = document.getElementById("new-game")
let homeCount = 0
let awayCount = 0

function homeOne() {
    homeCount += 1
    countHome.textContent = homeCount
}

function homeTwo() {
    homeCount += 2
    countHome.textContent = homeCount
}

function homeThree() {
    homeCount += 3
    countHome.textContent = homeCount
}

function awayOne() {
    awayCount += 1
    countAway.textContent = awayCount
}

function awayTwo() {
    awayCount += 2
    countAway.textContent = awayCount
}

function awayThree() {
    awayCount += 3
    countAway.textContent = awayCount
}


function reset() {
    homeCount = 0
    awayCount = 0
    document.getElementById("count-el-home").textContent = homeCount
    document.getElementById("count-el-away").textContent = awayCount
}