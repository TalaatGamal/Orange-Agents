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
const casesIcon1 = document.getElementById("cases-icon1");
const back_c = document.getElementById("back-c");
const front_c = document.getElementById("front-c");

casesIcon1.addEventListener("click", () => {
    card.classList.toggle("flipped");
    card.style.borderColor="#004458"
    setTimeout(() => {
        back_c.style.display="flex"
        front_c.style.display="none"
    }, 100);
});




const card2 = document.getElementById("v-2");
const casesIcon2 = document.getElementById("cases-icon2");
const back_c2 = document.getElementById("back-c2");
const front_2 = document.getElementById("front-c2");


casesIcon2.addEventListener("click", () => {
    card2.classList.toggle("flipped");
    card2.style.borderColor="#004458"
    setTimeout(() => {
        back_c2.style.display="flex"
        front_c2.style.display="none"
    }, 100);
});





home.addEventListener("click", (e) => {

    if (e.target !== home) return;

    if (back_c.style.display === "flex") {

        card.classList.remove("flipped");
        card.style.borderColor = "";

        back_c.style.display = "none";
        front_c.style.display = "flex";
    }

    if (back_c2.style.display === "flex") {

        card2.classList.remove("flipped");
        card2.style.borderColor = "";

        back_c2.style.display = "none";
        front_2.style.display = "flex";
    }

});









