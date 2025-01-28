let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.gallery-item');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const slideWidth = slides[0].offsetWidth + 20; // Includes margin
    document.querySelector('.gallery-grid').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const header = item.querySelector('h3');
    const arrow = header.querySelector('.arrow');
    const content = item.querySelector('.faq-content'); // Ambil elemen konten FAQ

    header.addEventListener('click', () => {
        // Menambah atau menghapus kelas 'open' untuk toggle dropdown
        item.classList.toggle('open');
        
        // Cek apakah item memiliki kelas 'open', lalu ganti panah
        if (item.classList.contains('open')) {
            arrow.innerHTML = '&#x25B2;';  // Panah atas (▲)
        } else {
            arrow.innerHTML = '&#x25BC;';  // Panah bawah (▼)
        }
    });
});

document.querySelectorAll('.slider-container').forEach((slider) => {
    const productContainer = slider.querySelector('.product-umroh');
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');

    let currentIndex = 0;
    const itemWidth = slider.querySelector('.product-item').offsetWidth + 20; 
    const totalItems = slider.querySelectorAll('.product-item').length;

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            productContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            productContainer.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });
});

const toggleBtn = document.querySelector('.toggle_btn')
       const toggleBtnIcon = document.querySelector('.toggle_btn i')
       const dropDownMenu = document.querySelector('.dropdown_menu')
       const Container = document.querySelector('.container')

       toggleBtn.onclick = function (){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')
        Container.classList.toggle('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
       }