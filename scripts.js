function checkQuestion(userSelection, clickedButton) {
    const feedbackElement = clickedButton.parentElement.querySelector('.answer-feedback');
    
    if (userSelection === 'correct') {
        feedbackElement.innerHTML = "Correct!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.innerHTML = "Incorrect.";
        feedbackElement.style.color = "red";
    }
    
    const questionContainer = clickedButton.parentElement;
    const buttons = questionContainer.querySelectorAll('.questionButton');

    buttons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabledButton');
    });
}
