let rotateButtons = document.querySelectorAll('.rotate-button');

rotateButtons.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('rotate-90');
    })
});