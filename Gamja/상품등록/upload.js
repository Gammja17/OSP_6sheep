
document.addEventListener("DOMContentLoaded", function () {
  const imageUploadInput = document.getElementById("image-upload-input");
  const uploadedImage = document.getElementById("uploaded-image");
  const prevImageButton = document.getElementById("prev-image");
  const nextImageButton = document.getElementById("next-image");
  const cancelUploadButton = document.getElementById("cancel-upload");
  const uploadedImageText = document.getElementById("uploaded-image-text");
  const imageCounter = document.getElementById("image-counter");

  let currentImageIndex = 0;
  let uploadedImages = [];

  // Function to display the image at the specified index
  function showImage(index) {
    const file = uploadedImages[index];
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      adjustImageSize();
    };

    reader.readAsDataURL(file);

    // Update image counter text
    imageCounter.innerText = `이미지 ${index + 1} / ${uploadedImages.length}`;
  }

  // Hide the uploaded image text and image counter initially
  uploadedImageText.style.display = "none";
  imageCounter.style.display = "none";

  // Event listener for image upload
  imageUploadInput.addEventListener("change", function () {
    const files = imageUploadInput.files;

    if (files.length > 0) {
      uploadedImages = Array.from(files);
      currentImageIndex = 0;
      showImage(currentImageIndex);

      // Show the uploaded image text and image counter when an image is uploaded
      uploadedImageText.style.display = "block";
      imageCounter.style.display = "block";
    }
  });

  // Event listener for showing the previous image
  prevImageButton.addEventListener("click", function () {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      showImage(currentImageIndex);
    }
  });

  // Event listener for showing the next image
  nextImageButton.addEventListener("click", function () {
    if (currentImageIndex < uploadedImages.length - 1) {
      currentImageIndex++;
      showImage(currentImageIndex);
    }
  });

  // Event listener for canceling the upload
  cancelUploadButton.addEventListener("click", function () {
    clearImage();
  });

  // Function to clear the uploaded image
  function clearImage() {
    imageUploadInput.value = "";
    uploadedImage.src = "";
    uploadedImages = [];
    currentImageIndex = 0;

    // Hide the uploaded image text and image counter when the upload is canceled
    uploadedImageText.style.display = "none";
    imageCounter.style.display = "none";
  }

  // Function to adjust image size while maintaining aspect ratio
  function adjustImageSize() {
    const maxWidth = 300;
    const maxHeight = 300;

    const width = uploadedImage.width;
    const height = uploadedImage.height;

    if (width > height) {
      if (width > maxWidth) {
        const ratio = maxWidth / width;
        uploadedImage.style.width = maxWidth + "px";
        uploadedImage.style.height = height * ratio + "px";
      }
    } else {
      if (height > maxHeight) {
        const ratio = maxHeight / height;
        uploadedImage.style.height = maxHeight + "px";
        uploadedImage.style.width = width * ratio + "px";
      }
    }
  }
});