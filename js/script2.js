document.addEventListener('DOMContentLoaded', function(){
    const changeButton = document.getElementById('change-picture');
    const profilePicture = document.getElementById('profile-picture');
    const rightContentImage = document.querySelector('.right-content img'); // Select the image in the .right-content section

    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profilePicture.src = savedImage;
        rightContentImage.src = savedImage;
        if (savedImage.includes('girl.png')) {
            rightContentImage.classList.add('girl-image');
        }
    }

    if (changeButton && profilePicture && rightContentImage) {
        changeButton.addEventListener('click', function() {
            if (profilePicture.src.includes('boy.png')) {
                profilePicture.src = 'assets/girl.png';
                rightContentImage.src = 'assets/girl.png';
                rightContentImage.classList.add('girl-image');
                localStorage.setItem('profileImage', 'assets/girl.png'); // Save girl.png in localStorage
            } else {
                profilePicture.src = 'assets/boy.png';
                rightContentImage.src = 'assets/boy.png';
                rightContentImage.classList.remove('girl-image');
                localStorage.setItem('profileImage', 'assets/boy.png'); // Save boy.png in localStorage
            }
        });
    } else {
        console.error('Change button, profile picture, or right content image not found');
    }
});

