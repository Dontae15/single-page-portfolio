const imgList = document.getElementById('img-list');
const prevBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

const imgWidth = imgList.querySelector('.list-img').clientWidth + 50;

nextBtn.addEventListener('click', () => {
    imgList.scrollLeft += imgWidth; // Scroll right by one image
    updateButtons();
});

prevBtn.addEventListener('click', () => {
    imgList.scrollLeft -= imgWidth; // Scroll left by one image
    updateButtons();
});

function updateButtons() {
    prevBtn.disabled = imgList.scrollLeft <= 0;
    nextBtn.disabled = imgList.scrollLeft >= imgList.scrollWidth - imgList.clientWidth;
}

// Initialize button state
updateButtons();

// Optional: Listen for scroll events if user scrolls manually
imgList.addEventListener('scroll', updateButtons);