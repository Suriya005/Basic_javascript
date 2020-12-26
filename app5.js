 function toCelsius(fahrenheit){
     let value = (fahrenheit-32)/1.80 
     return value.toFixed(4) + " °C";
 }
 function display(elementId,value){
     document.getElementById(elementId).innerHTML = "<b>" + value + "</b>"
 }
 function toFahrenheit(celsius){
     value = 1.80 * celsius + 32
     return value.toFixed(4) + " °F" ;
 }

