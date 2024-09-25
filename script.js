document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    this.reset(); // Reset form fields after submission
});