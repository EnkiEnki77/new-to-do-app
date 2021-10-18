// document.getElementById('name').addEventListener('click', function () {
//   let style  = document.getElementById('name').style;

//   if (style.color  == 'red') {
//      style.color = 'black';
//       return
//   }

//   if (style.color  == 'black') {
//       style.color = 'red';
//        return
//    }

//   document.getElementById('name').style.color = 'red';
// })

// let bill = document.getElementById('bill-input')

// bill.addEventListener('change', function () {
//   console.log(bill.value)
// })
let billVal = 0;
let numPeep = 0;
let tipPercentage = 0;
let endTip;
let endTotal;


let calcTipSplit = (bill, tipPerc, numPeep) => {
  let tipPerPerson = (bill * tipPerc) / numPeep
  let totalPerPerson = bill / numPeep + tipPerPerson
  
  tipPerPerson = "$" + tipPerPerson.toFixed(2)
  totalPerPerson = "$" + totalPerPerson.toFixed(2)

  console.log(tipPerPerson)
  console.log(totalPerPerson)
  let endTip = document.getElementById('tip-amt').innerText = tipPerPerson
  let endTotal = document.getElementById('tip-tot').innerText = totalPerPerson

  console.log(endTip, endTotal)
}

let getInputs = () => {
  billVal = bill.value;

  numPeep = numberOfPeople.value
  

  tip_butt.forEach((button) => {
    button.addEventListener('click', function () {
      tipPercentage = parseInt(button.innerText) * 0.01;
      calcTipSplit(billVal, tipPercentage, numPeep)
    })
  })
}

let bill = document.getElementById('inp')
bill.addEventListener('change', getInputs)

let numberOfPeople = document.getElementById('numberOfPeople')
numberOfPeople.addEventListener('change',getInputs)

let tip_butt = document.querySelectorAll('.tip-butt')





