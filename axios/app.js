let apiUrl = "https://covid19.th-stat.com/api/open/today"
let covid = document.querySelector('.covid-name')

function getCovidData(){
    axios.get(apiUrl)
    .then(function(response){
        
            covid.innerHTML += "ติดเชื้อสะสม : " +  response.data.Confirmed + "<br></br>";
            covid.innerHTML += "หายแล้ว : " +  response.data.Recovered + "<br></br>";
            covid.innerHTML += "กำลังรักษา : " +  response.data.Hospitalized + "<br></br>";
            covid.innerHTML += "เสียชีวิต : " +  response.data.Deaths + "<br></br>";
            covid.innerHTML += "ติดเชื้อเพิ่มอีก : " +  response.data.NewConfirmed + "<br></br>";
            covid.innerHTML += "รักษาหายเพิ่ม : " +  response.data.NewRecovered + "<br></br>";
            covid.innerHTML += "เข้ารับการรักษาเพิ่ม : " +  response.data.NewHospitalized + "<br></br>";
            covid.innerHTML += "เสียชีวิตเพิ่ม : " +  response.data.NewDeaths + "<br></br>";
            covid.innerHTML += "อัปเดตเมื่อวันที่ : " +  response.data.UpdateDate + "<br></br>";            
    })
    .catch(function(e){
        covid.innerHTML = "(error bro !!!)";
    })
}
let button = document.querySelector(".covid-button")
button.addEventListener("click",getCovidData)