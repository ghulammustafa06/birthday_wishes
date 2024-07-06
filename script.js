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
        `Wishing you a day filled with joy and laughter.`,
        `May your birthday be as special as you are.`,
        `Happy birthday! Enjoy your day to the fullest.`
    ];
    let randomWish = wishes[Math.floor(Math.random() * wishes.length)];

    // Read the buddy's picture and convert to Data URL
    let reader = new FileReader();
    reader.onload = function(e) {
        // Store data in localStorage
        localStorage.setItem('buddyName', buddyName);
        localStorage.setItem('wishMessage', randomWish);
        localStorage.setItem('yourName', yourName);
        localStorage.setItem('buddyPicUrl', e.target.result);

        // Redirect to the result page
        window.location.href = 'result.html';
    };
    reader.readAsDataURL(buddyPic);
});
