document.addEventListener("DOMContentLoaded", () => {
    // Select all elements needed for the modal functionality
    const triggerBtns = document.querySelectorAll('.triggerBtn');
    const popup = document.getElementById('popup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Add event listener to each trigger button to open the modal
    triggerBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default action
            popup.style.display = 'flex';
        });
    });

    // Add event listener to the Yes button to perform an action and close the modal
    yesBtn.addEventListener('click', () => {
        alert('Inquiry sent successfully');
        popup.style.display = 'none';
        document.getElementById("myForm").reset();
    });

    // Add event listener to the No button to simply close the modal
    noBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Add event listener to close the modal when clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
