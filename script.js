const MAX_CHARS = 200;
const textArea = document.getElementById('message-input');
const charCountDisplay = document.getElementById('char-count');
const remainingCountDisplay = document.getElementById('remaining-count');
const warningMessage = document.getElementById('warning-message');
textArea.setAttribute('maxlength', MAX_CHARS);
function updateCharacterCounter() {
    const currentLength = textArea.value.length;
    const remaining = MAX_CHARS - currentLength;
    charCountDisplay.textContent = `${currentLength}/${MAX_CHARS} characters`;
    remainingCountDisplay.textContent = `${remaining} remaining`;

    if (currentLength >= MAX_CHARS) {
        warningMessage.style.display = 'block';
        textArea.classList.add('limit-reached');
    } else {
        warningMessage.style.display = 'none';
        textArea.classList.remove('limit-reached');
    }
}

textArea.addEventListener('input', updateCharacterCounter);
updateCharacterCounter();

