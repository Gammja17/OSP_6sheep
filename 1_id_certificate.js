
document.addEventListener("DOMContentLoaded", function () {
    const authenticateButton = document.getElementById("authenticate-button");
    const sellerIdInput = document.getElementById("seller-id");
    const messageDiv = document.getElementById("message");

    authenticateButton.addEventListener("click", function () {
        const sellerId = sellerIdInput.value;

//testuser라는 아이디가 인증 가능하도록 해둠
        if (sellerId === "testuser") {
            messageDiv.textContent = "상품 판매가 가능한 ID입니다.";
        } else {
            messageDiv.textContent = "인증 실패: 판매가 불가능한 ID입니다.";
        }
    });
});

