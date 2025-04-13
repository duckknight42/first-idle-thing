var gameData = {
    gold:0,
    GoldPerClick:1,
    GoldPerClickCost:10
}

function minegold() {
    gameData.gold += gameData.GoldPerClick
    document.getElementById("goldmined").innerHTML= gameData.gold 
    +" Gold Mined"
   
}
function buyGoldPerClick() {
    if(gameData.gold >= 
        gameData.GoldPerClickCost) {
        gameData.gold -= gameData.GoldPerClickCost
        gameData.GoldPerClick += 1
        gameData.GoldPerClickCost *= 2
        document.getElementById("goldmined").innerHTML
         = gameData.gold + " Gold Mined"
        document.getElementById("PerClickUpgrade").innerHTML
        = "Upgrade Pickaxe (Currently Level " + gameData.GoldPerClick + 
         ") Cost: " + gameData.GoldPerClickCost + "Gold" 
    }
}
var mainGameLoop =
window.setInterval(function() {
    minegold()
}, 1000)
var saveGameLoop=
window.setInterval(function() {
    localStorage.setItem("goldMachineSave",JSON.stringify(gameData))
}, 15000)
var savegame=JSON.parse(localstorage.getItem("goldMachineSave"))
if(savegame !==null) {
    gameData = savegame
}