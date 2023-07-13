document.addEventListener("DOMContentLoaded", function () {
    var backgroundColor = localStorage.getItem("background_color");

    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }


});
function changeColors(event) {
    var bgElement = event.target;
    let bgColor = 'white';
    let textColor = 'black';

    for (const name of bgElement.getAttributeNames()) {
        const value = bgElement.getAttribute(name);

          if (value == 'secondary') {
            bgColor = '#6C757D';
        } else if (value == 'success') {
            bgColor = '#198754';
        } else if (value == 'danger') {
            bgColor = '#DC3545';
        } else if (value == 'warning') {
            bgColor = '#FFC107';
        } else if (value == 'info') {
            bgColor = '#0DCAF0';
            textColor = 'black!important'
        } else if (value == 'light') {
            bgColor = '#FFFFFF';
        } else if (value == 'dark') {
            bgColor = '#212529';
        }

    }

    document.body.style.backgroundColor = bgColor;


    localStorage.setItem("background_color", bgColor);
}

