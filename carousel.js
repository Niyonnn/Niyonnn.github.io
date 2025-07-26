const images = [
    "images/proj1.png",
    "images/proj2.png",
    "images/proj3.png",
    "images/proj4.png",
    "images/proj5.jpg",
    "images/proj6.png",
    "images/proj7.png",
    "images/proj8.png"
];

let current = 1; // Center image index

const track = document.querySelector('.carousel-track');

// Create image elements
function renderImages() {
    track.innerHTML = '';
    images.forEach((src, idx) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'carousel-img';
        if (idx === current) img.classList.add('center');
        track.appendChild(img);
    });
}

// Move track to show current image in center
function updateCarousel() {
    renderImages();
    const offset = (current - 1) * 340; // 320px width + 2*10px margin
    track.style.transform = `translateX(${-offset}px)`;
}

// Auto-scroll logic
let autoScroll = setInterval(nextImage, 2000);

function resetAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(nextImage, 2000);
}

function nextImage() {
    current = (current + 1) % images.length;
    updateCarousel();
}
function prevImage() {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
}

// Button event listeners
document.getElementById('next-btn').addEventListener('click', () => {
    nextImage();
    resetAutoScroll();
});
document.getElementById('prev-btn').addEventListener('click', () => {
    prevImage();
    resetAutoScroll();
});

// Initial render
updateCarousel();