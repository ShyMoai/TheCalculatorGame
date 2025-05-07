let points = 0
let upgrade = 1
let prestige = 0
let prestigeMulti = 1
let rebirth = 1
var doTick = window.setInterval(function() {
    document.getElementById
}, 50)
function getPoint() {
    points += upgrade * Math.pow(prestigeMulti,rebirth)
    document.getElementById("prestigeButton").innerHTML = "Prestige and get " +  points / 10000 + " prestige points (" + Math.sqrt(points / 10000) + " multiplier)<br> You need at least 10000 points to prestige"
    document.getElementById("pointCounter").innerHTML = "Points : " + points + " points"
    document.getElementById("rebirthButton").innerHTML = "Rebirth to get " +  Math.log10(points / 1000000000) + " rebirth points. Your prestige multiplier is raised to the power of your rebirth points <br>You need at least 1e9 points to rebirth"
}
function getUpgrade() {
    if (points >= 100) {
    upgrade += 1
    points -= 100
    document.getElementById("pointCounter").innerHTML = "Points : " + points + " points"
    document.getElementById("pointButton").innerHTML = "Get " + upgrade * Math.pow(prestigeMulti,rebirth) + " points"
    document.getElementById("upgradeCounter").innerHTML = "Upgrades : " + upgrade
    document.getElementById("prestigeButton").innerHTML = "Prestige and get " +  points / 10000 + " prestige points (" + Math.sqrt(points / 10000) + " multiplier)<br> You need at least 10000 points to prestige"
    document.getElementById("rebirthButton").innerHTML = "Rebirth to get " +  Math.log10(points / 1000000000) + " rebirth points. Your prestige multiplier is raised to the power of your rebirth points <br>You need at least 1e9 points to rebirth"
    }
}
function getPrestige() {
    if (points >= 10000) {
        prestige = points / 10000
        prestigeMulti = Math.sqrt(prestige)
        upgrade = 1
        points = 0
        document.getElementById("pointCounter").innerHTML = "Points : " + points + " points"
        document.getElementById("pointButton").innerHTML = "Get " + upgrade * Math.pow(prestigeMulti,rebirth) + " points"
        document.getElementById("upgradeCounter").innerHTML = "Upgrades : " + upgrade
        document.getElementById("prestigeCounter").innerHTML = "Prestige points : " + prestige
        document.getElementById("prestigeMultiCounter").innerHTML = "Prestige multiplier : " + prestigeMulti
        document.getElementById("prestigeButton").innerHTML = "Prestige and get " +  points / 10000 + " prestige points (" + Math.sqrt(points / 10000) + " multiplier)<br> You need at least 10000 points to prestige"
        document.getElementById("rebirthButton").innerHTML = "Rebirth to get " +  Math.log10(points / 1000000000) + " rebirth points. Your prestige multiplier is raised to the power of your rebirth points <br>You need at least 1e9 points to rebirth"
    }
}
function getRebirth() {
    if (points >= 1000000000) {
        rebirth = Math.log10(points / 1000000000)
        prestige = 1
        prestigeMulti = 1
        upgrade = 1
        points = 0
        document.getElementById("pointCounter").innerHTML = "Points : " + points + " points"
        document.getElementById("pointButton").innerHTML = "Get " + upgrade * Math.pow(prestigeMulti,rebirth) + " points"
        document.getElementById("upgradeCounter").innerHTML = "Upgrades : " + upgrade
        document.getElementById("prestigeCounter").innerHTML = "Prestige points : " + prestige
        document.getElementById("prestigeMultiCounter").innerHTML = "Prestige multiplier : " + prestigeMulti
        document.getElementById("prestigeButton").innerHTML = "Prestige and get " +  points / 10000 + " prestige points (" + Math.sqrt(points / 10000) + " multiplier)<br> You need at least 10000 points to prestige"
        document.getElementById("rebirthCounter").innerHTML = "Rebirth points : " + rebirth
        document.getElementById("totalMultiplier").innerHTML = "Rebirth multiplier : " + Math.pow(prestigeMulti,rebirth)
        document.getElementById("rebirthButton").innerHTML = "Rebirth to get " +  Math.log10(points / 1000000000) + " rebirth points. Your prestige multiplier is raised to the power of your rebirth points <br>You need at least 1e9 points to rebirth"
    }
}
