if (window.location.pathname.includes('index.html') || window.location.pathname.includes('firstq.html')) {
    localStorage.setItem('quizCorrect', '0');
    localStorage.setItem('quizIncorrect', '0');
    localStorage.setItem('answeredQuestions', JSON.stringify([]));
}

function checkQuestion(userSelection, clickedButton) {
    const currentPath = window.location.pathname;
    const pageIdentifier = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    const alreadyAnswered = answeredQuestions.includes(pageIdentifier);
    
    // Track stats silently behind the scenes
    if (userSelection === 'correct') {
        if (!alreadyAnswered) {
            let correctCount = parseInt(localStorage.getItem('quizCorrect')) || 0;
            correctCount++;
            localStorage.setItem('quizCorrect', correctCount.toString());
        }
    } else {
        if (!alreadyAnswered) {
            let incorrectCount = parseInt(localStorage.getItem('quizIncorrect')) || 0;
            incorrectCount++;
            localStorage.setItem('quizIncorrect', incorrectCount.toString());
        }
    }
    
    if (!alreadyAnswered) {
        answeredQuestions.push(pageIdentifier);
        localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
    }

    // Dynamic button colour changes
    const questionContainer = clickedButton.parentElement;
    const buttons = questionContainer.querySelectorAll('.questionButton');

    buttons.forEach(button => {
        button.disabled = true;

        if (button.getAttribute('onclick').includes("'correct'")) {
            button.style.backgroundColor = "#28a745"; 
            button.style.color = "#ffffff";
        } else if (button === clickedButton && userSelection === 'incorrect') {
            button.style.backgroundColor = "#dc3545"; 
            button.style.color = "#ffffff";
        } else {
            button.style.opacity = "0.5";
        }
        
        button.style.cursor = "not-allowed";
    });
}


