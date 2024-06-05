const arrow = document.getElementById("fa-angle-down");
const list = document.getElementById("droplist-items");
const arrow_up = document.getElementById("fa-angle-down");

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


const d = new Date();
let current_date = d.toLocaleTimeString();
document.getElementById("current_date").innerHTML = current_date;

// const date = new Date();
// let current = current_time.toLocaleDateString();
// // var current = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
// document.getElementById("current_date").innerHTML = current;



// const d = new Date();
// let current_date = d.toLocaleDateString();
// document.getElementById("current_date").innerHTML = current_date;
