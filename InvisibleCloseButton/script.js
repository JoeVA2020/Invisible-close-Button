// Get the button container
const container = document.querySelector('.button-container');

// Number of buttons
const numberOfButtons = 189;

// Create 250 buttons
for (let i = 1; i <= numberOfButtons; i++) {
    const button = document.createElement('button');
    button.className = 'invisible-button';
    button.id = `button${i}`;
    container.appendChild(button);
}

// Choose a random button
const randomButtonId = `button${Math.floor(Math.random() * numberOfButtons) + 1}`;

// Add event listener to each button
container.addEventListener('click', function (event) {
    const clickedButton = event.target;
    // Check if the clicked button is the randomly selected button
    if (clickedButton.id === randomButtonId) {
        // Redirect to "index.html" using the hidden anchor tag
        document.getElementById('redirectLink').click();
    }
});
