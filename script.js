// Log a welcome message to the console
console.log('Welcome to the Blog!');

// Add hover effects for navigation links dynamically
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347'; // Change color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Revert color
    });
});

// Add form submission feedback
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Clear the form fields
    });
}

// Add a dark mode toggle button
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '10px';
toggleButton.style.right = '10px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
