const polygons = document.querySelectorAll(".polygon");

function showHide(polygon) {
    // change show icon direction (up or down)
    polygon.classList.toggle("up");
    polygon.classList.toggle("down");

    // show / hide answer
    const parentQuestion = polygon.closest(".question");
    const answer = parentQuestion.querySelector(".answer");
    answer.classList.toggle("hide");
    answer.classList.toggle("show");
    return
}

// add drop-down functionality to headings
const headings = document.querySelectorAll(".question > h4");

headings.forEach(heading => {
    heading.addEventListener("click", () => {
        const polygon = heading.querySelector(".polygon");
        showHide(polygon);
    })
})