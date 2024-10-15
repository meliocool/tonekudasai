const words = ["TONE KUDASAI", "KOTONE", "KAMIMOTO", "TRIPLES", "COTOCOLA", "S11"];
        
let currentIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 100; 
const deleteSpeed = 70;  
const delayBetweenWords = 1000; 

function RandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

const h1Element = document.getElementById('dynamic-text');
let fullText = RandomWord();

function typeWords() {
    
    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    h1Element.textContent = currentText;

    if (!isDeleting && currentText === fullText) {
        setTimeout(() => isDeleting = true, delayBetweenWords); 
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        fullText = RandomWord();
    }

    const speed = isDeleting ? deleteSpeed : typingSpeed;
    setTimeout(typeWords, speed);
}

document.addEventListener('DOMContentLoaded', typeWords);