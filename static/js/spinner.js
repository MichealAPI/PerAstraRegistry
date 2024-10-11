let forms = document.querySelectorAll('.require-loader');
let spinner = document.querySelector('#spinner');

forms.forEach(form => {
    form.addEventListener('submit', () => {
        spinner.classList.remove('d-none');
    })
})