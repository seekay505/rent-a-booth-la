// select nav contact button
const contact_btn =  document.querySelector("#contact");
const pop_up_window =  document.querySelector("#pop-up");

// add event listener
contact_btn.addEventListener("click", () => {
    // add pop-up-show class
    pop_up_window.classList.add("pop-up-show");
    // remove pop-up-hide class
    pop_up_window.classList.remove("pop-up-hide");
})

// select close button
const close_btn = document.querySelector("#close-btn");

// add event listener
close_btn.addEventListener("click", () => {
    // add pop-up-hide class
    pop_up_window.classList.add("pop-up-hide");
    // remove pop-up-show class
    pop_up_window.classList.remove("pop-up-show");
});