let billdiv=document.getElementById("billTotalInput")
let tipdiv=document.getElementById("tipInput")
let numberofppldiv=document.getElementById("numberOfPeople")
let totaldiv=document.getElementById("perPersonTotal")

let numberOfPeople=Number(numberofppldiv.innerText)


function calculateBill(){
    let bill=Number(billdiv.value)
    let tipPercentage=Number(tipdiv.value)
    let totalBill=(bill+(tipPercentage*bill/100))/numberOfPeople
    totalBill=totalBill.toFixed(2)
    totaldiv.innerText=`₹${totalBill}`
}

function increasePeople(){
    numberOfPeople+=1
    numberofppldiv.innerText=numberOfPeople
    calculateBill()
}

function decreasePeople(){
    if(numberOfPeople==1)
        return;
    numberOfPeople-=1;
    numberofppldiv.innerText=numberOfPeople
    calculateBill()
}
