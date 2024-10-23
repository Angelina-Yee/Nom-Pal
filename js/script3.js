document.addEventListener('DOMContentLoaded', function() {
    const rightContentImage = document.querySelector('.right-content img');

    const savedImage = localStorage.getItem('profileImage');
    if (savedImage && rightContentImage) {
        rightContentImage.src = savedImage; 
        if (savedImage.includes('girl.png')) {
            rightContentImage.classList.add('girl-image'); 
        } else {
            rightContentImage.classList.remove('girl-image'); 
        }
    }
});

