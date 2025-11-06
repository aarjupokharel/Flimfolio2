document.addEventListener('DOMContentLoaded', function() {
    // No DOM-specific logic here anymore, just utility functions
});

// This popup function needs to be globally accessible
function showPopup(message) {
    let popup = document.getElementById('popup-notification');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'popup-notification';
        popup.className = 'popup';
        document.body.appendChild(popup);
    }
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

// Function to save a review, callable from other scripts
function saveMovieReview(movieTitle, rating, reviewText) {
    let watchedList = JSON.parse(localStorage.getItem('filmFolioWatchedList')) || [];

    // Remove if it exists to avoid duplicates, then add new review
    watchedList = watchedList.filter(movie => movie.title !== movieTitle);

    watchedList.push({
        title: movieTitle,
        rating: rating,
        review: reviewText
    });

    localStorage.setItem('filmFolioWatchedList', JSON.stringify(watchedList));
    showPopup('Review saved!');
}