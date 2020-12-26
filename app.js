// let num = prompt("กรอกหวย");
// let random_num = Math.floor(Math.random()*100);
// console.log(random_num);
// document.getElementById("result_num").innerHTML = random_num;


// if(num == random_num){
//     document.getElementById("result").innerHTML = "ถูกรางวัล";
// }else{
//     document.getElementById("result").innerHTML = "คุณไม่ถูกรางวัล ";
// }

let score = prompt("คะแนนของคุณ")
if(score >= 80 ){
    document.getElementById("result").innerHTML = "เกรด A"
}else if(score >= 70){
    document.getElementById("result").innerHTML = "เกรด B"
}else if(score >= 60){
    document.getElementById("result").innerHTML = "เกรด C"
}else if(score >= 50){
    document.getElementById("result").innerHTML = "เกรด D"
}else{
    document.getElementById("result").innerHTML = "เกรด F"
}
