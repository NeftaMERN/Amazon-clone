
// scroll buttons
const scrollContainer = document.querySelector('.Main_Movies_Image');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});
