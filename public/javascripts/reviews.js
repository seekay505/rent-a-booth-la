// reviews revolve
// const reviewCards = document.querySelectorAll(".review-card");

// reviewCards.forEach(reviewCard => {
//     reviewCard.addEventListener("click", () => {
//         // select activeCard via clicked card, traverse up, 
//         const activeCard = reviewCard
//             .closest("[data-review-cards]")
//             .querySelector("[data-active-card]");
//         reviewCard.dataset.activeCard = true;
//         delete activeCard.dataset.activeCard;
//     })
// })

const swiper = new Swiper(".swiper", {
    //optional params
    // direction: "horizontal",
    // loop: true,

    effect: "cards",
    grabCursor: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
      },

    spaceBetween: 200,
});

// dim left arrow on begginning
swiper.on("reachBeginning", function () {
    // select left arrow
})

// dim right arrow when reaching end
swiper.on("reachEnd", function () {
    // select right arrow

})