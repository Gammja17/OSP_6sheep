
showProductDetails('productBox');

function showProductDetails(boxId) {
    // 해당 상품 상세 내용을 보여줌
    var productDetails = document.getElementById(boxId).querySelector('.product-details');
    var reviewDetails = document.getElementById(boxId).querySelector('.review-details');
    
    productDetails.style.display = 'flex';
    reviewDetails.style.display = 'none';
    
    var productDetailsButton = document.querySelector('.product-details-button');
    var reviewButton = document.querySelector('.review-button');

    productDetailsButton.classList.add('active-button');
    reviewButton.classList.remove('active-button');
}

function showReview(boxId) {
    // 해당 판매자의 리뷰를 보여줌
    var productDetails = document.getElementById(boxId).querySelector('.product-details');
    var reviewDetails = document.getElementById(boxId).querySelector('.review-details');

    productDetails.style.display = 'none';
    reviewDetails.style.display = 'block';

    var productDetailsButton = document.querySelector('.product-details-button');
    var reviewButton = document.querySelector('.review-button');

    productDetailsButton.classList.remove('active-button');
    reviewButton.classList.add('active-button');

} 





    