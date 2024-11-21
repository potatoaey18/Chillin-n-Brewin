document.addEventListener("DOMContentLoaded", () => {
    const triggerBtns = document.querySelectorAll('.triggerBtn');
    const popup = document.getElementById('popup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    triggerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.style.display = 'flex';
        });
    });

    yesBtn.addEventListener('click', () => {
        alert('Product added to bag');
        window.location.href = '/bag/bag.html'; // Navigate to bag.html
    });

    noBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
