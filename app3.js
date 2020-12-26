let round = prompt("เล่นกี่รอบ")
var score = 0
for(var i = 1 ; i <= round; i++){
    var answer = prompt("0 หรือ 1")
    let game_random = ""
    if(Math.floor(Math.random()*10) <= 4){
        game_random = 1
    }else{
        game_random = 0
    }
    if(answer == game_random){
        score = score + 1
        document.getElementById("game-list").innerHTML += "รอบที่ " + i +" คุณทายถูก" + "<br></br>"
        alert("คุณทายถูก")
    }else{
        document.getElementById("game-list").innerHTML += "รอบที่ " + i +" คุณทายผิด" + "<br></br>"
        alert("คุณทายผิด")
    }
    
}document.getElementById("score-game").innerHTML = "คะแนนรวมของคุณคือ " + score