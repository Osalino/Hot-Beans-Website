const togglebtn = document.getElementById('nav')
const navbarLinks = document.getElementById('links');

togglebtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
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