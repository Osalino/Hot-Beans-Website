const arrow = document.getElementById("fa-angle-down");
const list = document.getElementById("droplist-items");

list.style.display = "none";

arrow.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
})

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Design";
    }, 0);
    setTimeout(() => {
        text.textContent = "Engineering";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Optimize";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);


