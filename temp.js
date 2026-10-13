let score = 0


function checkQuestion1(answer, button) {
    if (answer == 'correct'){
        document.getElementById('answer1').innerHTML = "Correct"
        button.classList.add(red)
        score += 1
  
    } else {
        document.getElementById('answer1').innerHTML = "Incorrect"
    }
    
    const buttons = document.querySelectorAll('.questionButton');

    buttons.forEach(button => {
        button.disabled =true;

        button.classList.add('disabledButton');
    } );

}

function getScore(){
    // get score element
    // change inner html to score
}