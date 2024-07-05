// JavaScript for handling form submission and wish generation
document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    let yourName = document.getElementById('yourName').value.trim();
    let buddyName = document.getElementById('buddyName').value.trim();
    let buddyAge = document.getElementById('buddyAge').value;
    let buddyPic = document.getElementById('buddyPic').files[0]; 

    // Generate a random wish message
    let wishes = [
        `${buddyName}, may your birthday be filled with sunshine, smiles, laughter, and love.`,
        `Happy birthday to you, ${buddyName}! May your day be as special as you are.`,
        `Wishing you joy, success, and happiness in life. Happy birthday, ${buddyName}!`
    ];
    let randomWish = wishes[Math.floor(Math.random() * wishes.length)];

    // Generate HTML for the wish card
    let generatedWishHTML = `
        <div class="wish-card">
            <img src="${URL.createObjectURL(buddyPic)}" alt="${buddyName}'s Picture" style="max-width: 100%; border-radius: 8px; margin-bottom: 20px;">
            <h2>Happy Birthday, ${buddyName}!</h2>
            <p>${randomWish}</p>
            <p>From: ${yourName}</p>
            <button onclick="window.print()">Print Wish Card</button>
        </div>
    `;

    // Display the generated wish card
    let wishCardSection = document.createElement('section');
    wishCardSection.classList.add('main');
    wishCardSection.innerHTML = generatedWishHTML;
    
    // Append the wish card section to the body and hide the form
    document.body.appendChild(wishCardSection);
    document.getElementById('birthdayForm').classList.add('hidden');
});
