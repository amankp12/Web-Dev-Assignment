// Sample JSON data with image URLs
const imageData = [
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg" },
    { "image": "https://www.bu.edu/files/2020/12/cover1.jpg" }
];

// Function to load images
function loadImages(data) {
    const container = document.getElementById('imageContainer');
    data.forEach((item, index) => {
        const img = new Image();
        img.src = item.image;
        img.alt = 'User Image';
        img.title = `Image ${index + 1}`;
        container.appendChild(img);
    });
}

// Load images when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadImages(imageData);
});