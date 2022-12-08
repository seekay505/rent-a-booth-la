// select nav contact button
const contact_btn =  document.querySelector("#contact");
const pop_up_window =  document.querySelector("#pop-up");
const main_html = document.querySelector("html");

// select close button
const close_btn = document.querySelector("#close-btn");


// add contact button event listener
contact_btn.addEventListener("click", () => {
    // add pop-up-show class
    pop_up_window.classList.add("pop-up-show");
    // remove pop-up-hide class
    pop_up_window.classList.remove("pop-up-hide");

    // stop main page from scrolling
    main_html.classList.add("covered");

    // close button animation
    close_btn.classList.add("pop-up-show");
    close_btn.classList.remove("pop-up-hide");
})



// add close button event listener
close_btn.addEventListener("click", () => {
    // remove pop-up-show class
    pop_up_window.classList.remove("pop-up-show");
    // add pop-up-hide class
    pop_up_window.classList.add("pop-up-hide");

    // stop main page from scrolling
    main_html.classList.remove("covered");

    // close button animation
    close_btn.classList.remove("pop-up-show");
    close_btn.classList.add("pop-up-hide");
});