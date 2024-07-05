// JavaScript for handling wish card generation and actions
window.onload = function() {
    // Extract data from local storage
    let buddyName = localStorage.getItem('buddyName');
    let buddyPicUrl = localStorage.getItem('buddyPicUrl');
    let wishMessage = localStorage.getItem('wishMessage');

    // Set the content of the wish card
    document.getElementById('buddyNameDisplay').innerText = buddyName;
    document.getElementById('wishMessageDisplay').innerText = wishMessage;
    document.getElementById('buddyImage').src = buddyPicUrl;
};

// Function to download the wish card
document.getElementById('downloadButton').addEventListener('click', function() {
    html2canvas(document.querySelector('.wish-card')).then(canvas => {
        let link = document.createElement('a');
        link.download = 'birthday_wish.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

// Function to share the wish card
document.getElementById('shareButton').addEventListener('click', function() {
    if (navigator.share) {
        html2canvas(document.querySelector('.wish-card')).then(canvas => {
            canvas.toBlob(blob => {
                let file = new File([blob], 'birthday_wish.png', { type: 'image/png' });
                navigator.share({
                    files: [file],
                    title: 'Birthday Wish',
                    text: 'Check out this birthday wish card I created!'
                });
            });
        });
    } else {
        alert('Sharing is not supported on this browser.');
    }
});
