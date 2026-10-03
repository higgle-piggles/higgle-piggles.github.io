function checkQuestion1(answer) {
    if (answer == 'correct'){
        document.getElementById('answer1').innerHTML = "Correct"
  
    } else {
        document.getElementById('answer1').innerHTML = "Incorrect"
    }
    
    const buttons = document.querySelectorAll('.questionButton');

    buttons.forEach(button => {
        button.disabled =true;

        button.classList.add('disabledButton');
    } );

}
