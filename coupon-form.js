function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('couponForm');
    const formData = new FormData(form);

    // Send the form data to Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Redirect to deals.html if the submission is successful
            window.location.href = 'deals.html';
        } else {
            // Handle errors here
            alert('There was a problem with your submission. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again.');
    });
}