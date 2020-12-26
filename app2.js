let qrt = prompt("จำนวนสินค้า")
let total = 0
for(var i = 1; i <= qrt;i++){
    let item_price = prompt("ราคาสินค้าชื้นที่ " + i)
    total = total + parseInt(item_price)
    document.getElementById("price-list").innerHTML +="ราคาสินค้าชิ้นที่ " + i + " : " +item_price + " บาท " +"<br></br>"
}document.getElementById("total-price").innerHTML = total + " บาท"
