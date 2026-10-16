let score = 0

function checkQuestion(answer, button) {
    console.log('sanity check')
    if (answer == 'correct'){
        document.getElementById('answer1').innerHTML = "correct"
        button.classList.add(red)
        score += 1
  
    } else {
        document.getElementById('answer1').innerHTML = "incorrect"
    }
    
    const buttons = document.querySelectorAll('.questionButton');

    buttons.forEach(button => {
        button.disabled =true;

        button.classList.add('disabledButton');
    } );

}

function getScore(){
    document.getElementById('final-score')
    // get score element
    // change inner html to score
}