/*
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

// get the bill toatal by id
let billTotal = document.getElementById('billTotalInput')

// get the tip input by id
let tipAmount = document.getElementById('tipInput')

//get number of people by id
let peopleAmount = document.getElementById('numberOfPeople')

// get price total
let priceTotal = document.getElementById('perPersonTotal')

let peopleNumber = Number(peopleAmount.innerText)

// method that will calculate the bill
const calculateBill = () => {
  //wrap bill total to be numer not string
  let bill = Number(parseFloat(billTotal.value))

  //since it is a percentage, i divide by 100
  let tipPercent = parseFloat(Number(tipAmount.value) / 100)
  // to get the tip amount i multiple the percent result by the bill
  let tip = tipPercent * bill

  // total calculation
  let total = (tip + bill) / peopleNumber

  // modify the price total to the result of total
  priceTotal.innerText = `$${total.toFixed(2)}`

}



const increasePeople = () => {
  // increase people number by 1 when cliked
  peopleNumber++

  peopleAmount.innerText = peopleNumber


  calculateBill()



}

const decreasePeople = () => {
  // decrease people
  if (peopleNumber <= 1) {
    return
  }
  peopleNumber--


  peopleAmount.innerText = peopleNumber

  calculateBill()
}


