// const username = document.getElementById("username");
// const user = document.getElementById("user");
// const btn = document.getElementById("btn");
// const intro = document.getElementById("intro");

// btn.addEventListener("click", () => {

//     setTimeout(() => {
//         username.blur();

//         intro.style.right = "-100vw";

//         setTimeout(() => {
//             intro.style.display = "none";
//         }, 1000);

//     }, 100);
// });

// username.addEventListener("input", () => {

//     // English letters + numbers + underscore فقط
//     username.value = username.value.replace(/[^a-zA-Z0-9_]/g, "");

//     user.textContent = username.value;

// });








const card = document.getElementById("v-1");
const casesIcon = document.getElementById("cases-icon");
const back_c = document.getElementById("back-c");
const front_c = document.getElementById("front-c");

casesIcon.addEventListener("click", () => {
    card.classList.toggle("flipped");
    card.style.borderColor="#004458"
    setTimeout(() => {
        back_c.style.display="flex"
        front_c.style.display="none"
    }, 100);
});