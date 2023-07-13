const catagoriesItemMenu = document.getElementById('catagories-item-menu');
const catagoriesItemButton = document.getElementById('catagories-item-button');

window.addEventListener('scroll', function () {

    const count = window.pageYOffset;
    if (count >= 50) {
        catagoriesItemButton.style.display = 'flex';
        catagoriesItemMenu.style.display = 'none';
    } else {
        catagoriesItemButton.style.display = 'none';
        catagoriesItemMenu.style.display = 'block';
    }

})

