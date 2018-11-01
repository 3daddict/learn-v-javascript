const messageSection = document.getElementById('messageSection');
const messageHeader = document.querySelector('.message-header');
const messageBody = document.querySelector('.message-body');

messageSection.addEventListener('click', (event) => {
    if (event.target.style.display == 'none') {
        messageBody.style.display = 'block';
    } else {
        messageBody.style.display = 'none';
    }
    
});