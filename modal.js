// modal.js
// Get modal element
var modal = document.getElementById("orderModal");

// Get open modal button
var orderRequestButton = document.getElementById("orderRequest");

// Get close button
var closeButton = document.getElementById("closeModal");

// Listen for open click
orderRequestButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// Listen for close click
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
