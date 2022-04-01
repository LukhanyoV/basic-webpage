const text = document.querySelectorAll(".heyShorty");

text.forEach(item => {
    item.addEventListener("click", () => {
        item.style.overflow = "auto";
        // (item.style.overflow === "auto") ? item.style.overflow = "hidden": item.style.overflow = "auto";
    });
});