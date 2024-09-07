// Function to open image in a new window
function openImageInNewWindow(imageSrc) {
    window.open(imageSrc, '_blank');
}

function openModal(projectId, imageIndex) {
    // Get the project container and the total number of images
    var projectContainer = document.getElementById(projectId);
    var images = projectContainer.getElementsByClassName("image-grid")[0].getElementsByTagName("img");
    var totalImages = images.length;

    // Set the current slide index
    showSlides(imageIndex, totalImages);

    // Show the modal
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex);
}

function showSlides(n, totalImages) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > totalImages) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalImages }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

function toggleDetails(projectId) {
    var project = document.getElementById(projectId);
    if (project.style.display === "none") {
        project.style.display = "block";
    } else {
        project.style.display = "none";
    }
}
