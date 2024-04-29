var jpyInput = document.getElementById("jpyInput")

const btn = document.getElementById("converter")
var output = document.getElementById("output")
const output_thb = document.getElementById("output-thb")
const tax = document.getElementById("taxOption")

const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=1&from=JPY&to=THB`)
  .then(resp => resp.json())
  .then((data) => {
    const thbCurrency = data.rates.THB;
    const thbToDecimal = parseFloat(thbCurrency.toFixed(3))
    let calculated
    let getValue
    btn.addEventListener('click',function(){
           
    
        // 20.42%
        if(tax.value == 1){
            calculated = thbCurrency * parseFloat(jpyInput.value)
            const discountAmount = calculated * (20.42/100)
            const discountPrice = calculated - discountAmount
            output.innerHTML = discountPrice.toFixed(3) +" "+"฿" + "<br>" + "≈"
            getValue = parseFloat(output.innerHTML)
            
        // // 15%
         }else{
            calculated = thbCurrency * parseFloat(jpyInput.value)
            
            const discountAmount = calculated * (20.42/100)
            const discountPrice = calculated - discountAmount
           
            output.innerHTML = discountPrice.toFixed(3) +" "+"฿" + "<br>" + "≈"
            getValue = parseFloat(output.innerHTML)
            
         }


        fetch(`https://${host}/latest?amount=${getValue}&from=THB&to=JPY`)
  .then(resp => resp.json())
  .then((data) => {
    
    output_thb.innerHTML = data.rates.JPY +" "+"¥"
  });
        

        
    });
  });










