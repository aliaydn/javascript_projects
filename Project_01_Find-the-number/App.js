let enterButton = document.getElementById('enterButton');
let againButton = document.getElementById('againButton');
let output = document.getElementById('outputText');

let randomNumber = Math.floor(Math.random() * 100)+1;
console.log(randomNumber);


function checkNumber() {
    let input = document.getElementById('userInput').value;


    if (input == randomNumber) {
        output.innerHTML = "You guessed right "+ ", "+ " it was "+ randomNumber;
        output.style.color = "green";
    }
    else if (input > randomNumber && input < 101) {
        output.innerHTML = "You guessed too high ";
    }
    else if (input < randomNumber && input > 0) {
        output.innerHTML = "You guessed too low ";
    }
    else if (input < 1) {
        output.innerHTML = "Higher number, it has to be between 1 and 100";
    }
    else if (isNaN(input)) {
        alert("That's not a number!");
    }
    else{
        output.innerHTML = "Low number, it has to be between 1 and 100";
    }      
  };

enterButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', function () {
    location.reload();
});