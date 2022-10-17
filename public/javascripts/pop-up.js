// select nav contact button
const contact_btn =  document.querySelector("#contact");
const pop_up_window =  document.querySelector("#pop-up");

// select close button
const close_btn = document.querySelector("#close-btn");


// add event listener
contact_btn.addEventListener("click", () => {
    // add pop-up-show class
    pop_up_window.classList.add("pop-up-show");
    // remove pop-up-hide class
    pop_up_window.classList.remove("pop-up-hide");

    // close button animation
    close_btn.classList.add("pop-up-show");
    close_btn.classList.remove("pop-up-hide");
})



// add event listener
close_btn.addEventListener("click", () => {
    // remove pop-up-show class
    pop_up_window.classList.remove("pop-up-show");
    // add pop-up-hide class
    pop_up_window.classList.add("pop-up-hide");

    // close button animation
    close_btn.classList.remove("pop-up-show");
    close_btn.classList.add("pop-up-hide");
});