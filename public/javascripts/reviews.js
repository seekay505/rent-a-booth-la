// reviews revolve
const reviewCards = document.querySelectorAll(".review-card");

reviewCards.forEach(reviewCard => {
    reviewCard.addEventListener("click", () => {
        // select activeCard via clicked card, traverse up, 
        const activeCard = reviewCard
            .closest("[data-review-cards]")
            .querySelector("[data-active-card]");
        reviewCard.dataset.activeCard = true;
        delete activeCard.dataset.activeCard;
    })
})