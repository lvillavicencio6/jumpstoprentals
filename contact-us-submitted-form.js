async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('eventForm');
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Show success message
            form.style.display = 'none'; // Hide the form
            document.getElementById('successMessage').style.display = 'block'; // Show success message
        } else {
            // Handle errors
            alert('There was a problem with your submission. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again.');
    }
}

function closeForm() {
    // Fully close the form and hide the success message
    document.getElementById('successMessage').style.display = 'none'; // Hide success message
    document.getElementById('eventForm').style.display = 'none'; // Hide the form
    window.location.href = 'index.html'; // Redirect to the index page
}