
    //This function checks the question (this happens in the answer buttons)
function checkQuestion(answer, button) {
    console.log('sanity check')
    if (answer == 'correct'){  
        document.getElementById('answer1').innerHTML = "Correct" // Prints out the message
        button.classList.add(red)
        score += 1
  
    } else {
        document.getElementById('answer1').innerHTML = "Incorrect"
    }
    
    const buttons = document.querySelectorAll('.questionButton');

    buttons.forEach(button => {
        button.disabled =true; //Once the user chooses a button it disables the button so the user can't pick anything else

        button.classList.add('disabledButton');
    } );

}


document.getElementById('final-score').innerHTML = "final-score"
    // get score element
    // change inner html to score