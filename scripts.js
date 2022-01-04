const inputVar = document.querySelectorAll('.ranges input');

function update() {
    const size = this.getAttribute('data-sizing') || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + size);
}


inputVar.forEach(input => {
    input.addEventListener('change', update)
    input.addEventListener('mousemove', update)
});