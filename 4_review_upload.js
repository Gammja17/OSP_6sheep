function setRating(star) {
    var stars = document.querySelectorAll('.star-rating .star');
    var ratingValue = parseInt(star.dataset.value, 10);
    var currentRating = star.parentNode.getAttribute('data-current-rating');
  
   
    if (currentRating === star.dataset.value) {
      stars.forEach(function(s) {
        s.classList.remove('filled');
      });
      star.parentNode.setAttribute('data-current-rating', '0');
    } else {
      stars.forEach(function(s, index) {
        if (index < ratingValue) {
          s.classList.add('filled');
        } else {
          s.classList.remove('filled');
        }
      });
      star.parentNode.setAttribute('data-current-rating', ratingValue.toString());
    }
  }

 
  
