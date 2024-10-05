// let inventory = []
// function addProduct(productName, quantity){
//     let product = inventory.find((item) => item.productName === productName)
//     if(product){
//         product.quantity += quantity
//     } else {
//         inventory.push({productName, quantity})
//     }
// }
// console.log(addProduct('Apples', 10));
// console.log(addProduct('Banana', 3));
// console.log(addProduct('Apples', 150));
// console.log(addProduct('Oranges', 5));
// console.log(inventory);


// const removeProduct = (productName, quantity) => {
//     let removeItem = inventory.find((itemRemove) => itemRemove.productName === productName)
//     if(removeItem.quantity >= quantity){
//         removeItem.quantity -= quantity
//         console.log(`${quantity} ${productName}(s) removed from inventory.`);
//     } else {
//         console.log('Not enough stock!')
//     }
// } 
// console.log(removeProduct('Apples', 120));
// console.log(removeProduct('Banana', 50));

// function checkStock(productName){
//     let checkProduct = inventory.find((checking) => checking.productName === productName)
//     if(checkProduct.quantity > 0){
//         console.log(`${productName}  ${checkProduct.quantity} units.`);
//     } else {
//         console.log(`${productName}: Out of stock`)
//     }
// }
// console.log(checkStock("Apples"));


// function alertStockLow(){
//     inventory.forEach((product) => {
//         if(product.quantity < 5){
//             console.log(`Warning: Stock of ${product.productName} is low ${product.quantity} units left`)
//         }
//     })
// }
// console.log(showLowStockAlerts());

// function displayInventory(){
//     console.log(inventory);
// }
// console.log(displayInventory());

// function showLowStockAlerts(){
//     inventory.forEach((item) => {
//         if(item.quantity < 5){
//             console.log(`${item.productName} is low ${item.quantity} units left`);
//         }
//     })
// }
// console.log(showLowStockAlerts());






// ----------------------------------------------------------------------------------------------------
// Problem: Age Calculator App with HTML, CSS, and JavaScript
// Description:
// Create an Age Calculator App where users can:
// Enter their birthdate in the format day/month/year.
// Calculate their age by clicking a "Calculate Age" button.
// The app should display the age in years, months, and days.
// Provide a simple and responsive design for user interaction.
// How It Works:
// 1. The user inputs their birthdate in the form of a date using the HTML <input
// type="date">.
// 2. When they click the "Calculate Age" button, the calculateAge function is
// triggered, which:
// ○ Gets the current date (today).
// ○ Gets the input birthdate and creates a Date object from it.
// ○ Calculates the difference between the current date and the birthdate
// in terms of years, months, and days.
// ○ Adjusts for situations where the birthdate hasn't occurred yet this
// year, and months or days need to be recalculated.
// 3. The calculated age is displayed in the format: "You are X years, Y months,
// and Z days old."
// Example Input/Output:
// ● Input:
// ○ Birthdate: 1995-08-25
// ● Output:
// ○ You are 29 years, 1 month, and 3 days old.
// Challenging Parts for Students:
// 1. Working with Date objects and manipulating them to get the correct years,
// months, and days.
// 2. Adjusting the calculation to handle edge cases where the birthdate hasn’t
// occurred yet in the current year.
// 3. Understanding how event listeners work in JavaScript to trigger the function
// on button click.



document.getElementById("button").addEventListener("click", calculateAge);

function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const todayDate = new Date();

  if (isNaN(birthdate.getTime())) {
    document.getElementById("result").innerHTML = "Please enter a valid date.";
    return;
  }

  let years = todayDate.getFullYear() - birthdate.getFullYear();
  let months = todayDate.getMonth() - birthdate.getMonth();
  let days = todayDate.getDate() - birthdate.getDate();

  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
    days += lastMonth;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  document.getElementById("result").innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}











