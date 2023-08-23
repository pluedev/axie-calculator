let currentEnergy = 3
let runningEnergy = 3
let energyUsed = 0
let energyGained = 0
let energyDestroyed = 0
let round = 1
let win = 0
let lose = 0
let draw = 0


let energyEl = document.getElementById("energy-el")
let currentEnergyUsed = document.getElementById("currentEnergyUsed")
let currentEnergyGained = document.getElementById("currentEnergyGained")
let currentEnergyDestroyed = document.getElementById("currentEnergyDestroyed")
let roundEl = document.getElementById("round-el")
let winTxt = document.getElementById("win-txt")
let loseTxt = document.getElementById("lose-txt")
let drawTxt = document.getElementById("draw-txt")

function addEnergyUsed() {
    energyUsed = energyUsed + 1
    runningEnergy = runningEnergy - 1

    if (runningEnergy <= 0) {
        runningEnergy = 0
    }
    if (energyUsed > currentEnergy) {
        energyUsed = currentEnergy
    }
    currentEnergyUsed.textContent = energyUsed
    energyEl.textContent = runningEnergy
}

function minusEnergyUsed() {
    energyUsed = energyUsed - 1
    runningEnergy = runningEnergy + 1

    if (runningEnergy <= 0) {
        runningEnergy = 0
    }
    if (energyUsed > currentEnergy) {
        energyUsed = currentEnergy
    }
    if (energyUsed <= 0) {
        energyUsed = 0
        runningEnergy = currentEnergy
    }
    currentEnergyUsed.textContent = energyUsed
    energyEl.textContent = runningEnergy
}

function addEnergyGained() {
    if (runningEnergy < 10) {
        energyGained = energyGained + 1
        runningEnergy = runningEnergy + 1
    }
    currentEnergyGained.textContent = energyGained
    energyEl.textContent = runningEnergy
}

function minusEnergyGained() {
    if (energyGained > 0) {
        energyGained = energyGained - 1
        runningEnergy = runningEnergy -1
    }
    currentEnergyGained.textContent = energyGained
    energyEl.textContent = runningEnergy
}

function addEnergyDestroyed() {
    if (runningEnergy > 0) {
        energyDestroyed = energyDestroyed + 1
        runningEnergy = runningEnergy - 1
    }
    currentEnergyDestroyed.textContent = energyDestroyed
    energyEl.textContent = runningEnergy
}

function minusEnergyDestroyed() {
    if (energyDestroyed > 0) {
        energyDestroyed = energyDestroyed - 1
        runningEnergy = runningEnergy + 1
    }
    currentEnergyDestroyed.textContent = energyDestroyed
    energyEl.textContent = runningEnergy
}

function endTurn() {
    round = round + 1
    roundEl.textContent = "Round " + round
    currentEnergy = runningEnergy += 2
    if(currentEnergy >= 10) {
        currentEnergy = 10
    }
    if (currentEnergy < 2) {
        currentEnergy = 2
    }
    energyUsed = 0
    energyGained = 0
    energyDestroyed = 0
    
    energyEl.textContent = currentEnergy
    currentEnergyUsed.textContent = energyUsed
    currentEnergyGained.textContent = energyGained
    currentEnergyDestroyed.textContent = energyDestroyed
}

function reset() {
    currentEnergy = 3
    runningEnergy = 3
    round = 1
    energyUsed = 0
    energyGained = 0
    energyDestroyed = 0

    roundEl.textContent = "Round " + round
    energyEl.textContent = currentEnergy
    currentEnergyUsed.textContent = energyUsed
    currentEnergyGained.textContent = energyGained
    currentEnergyDestroyed.textContent = energyDestroyed
}

function winScore() {
    win = win + 1
    winTxt.textContent = win
}

function loseScore() {
    lose = lose + 1
    loseTxt.textContent = lose
}

function drawScore() {
    draw = draw + 1
    drawTxt.textContent = draw
}

function clearScore() {
    win = 0 
    lose = 0
    draw = 0

    winTxt.textContent = win
    loseTxt.textContent = lose
    drawTxt.textContent = draw
}
