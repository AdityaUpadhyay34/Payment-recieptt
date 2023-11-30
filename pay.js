//get current date and time 
const currentDate = new
Date().toLocaleDateString();
const currentTime = new
Date().toLocaleTimeString();

//upadte date and time in the reciept 

document.getElementById('date').textContent = currentDate;
document.getElementById('time').textContent = currentTime;

//handel "pay again" bottun click

document.getElementById('payagainbtn').addEventListener('click',function() {
    alert('Redirect to payment page or handel paymnet again logic here.');

});