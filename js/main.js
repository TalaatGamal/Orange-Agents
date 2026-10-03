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
        card.style.height="350px"
        back_c.style.height="350px"
    }, 100);
});




const card2 = document.getElementById("v-2");
const casesIcon2 = document.getElementById("cases-icon2");
const back_c2 = document.getElementById("back-c2");
const front_c2 = document.getElementById("front-c2");


casesIcon2.addEventListener("click", () => {
    card2.classList.toggle("flipped");
    card2.style.borderColor="#004458"
    setTimeout(() => {
        back_c2.style.display="flex"
        front_c2.style.display="none"
        card2.style.height="350px"
        back_c2.style.height="350px"
    }, 100);
});





home.addEventListener("click", (e) => {

    if (e.target !== home) return;

    if (back_c.style.display === "flex") {

        card.classList.remove("flipped");
        card.style.borderColor = "";

        back_c.style.display = "none";
        front_c.style.display = "flex";
        card.style.height="280px"
        back_c.style.height="280px"
    }

    if (back_c2.style.display === "flex") {

        card2.classList.remove("flipped");
        card2.style.borderColor = "";

        back_c2.style.display = "none";
        front_c2.style.display = "flex";
        card2.style.height="280px"
        back_c.style.height="280px"
    }

});


































const openFile_1 = document.getElementById("open-file-1");
const downloadFile_1 = document.getElementById("download-file-1");
// --------------------------------------------------------------------
openFile_1.addEventListener("click", () => {
    window.open("Material - Physical WF after the update 11.pdf");
});
downloadFile_1.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Material - Physical WF after the update 11.pdf";
    link.download = "Session-1.pdf";
    link.click();
});




const openFile_2 = document.getElementById("open-file-2");
const downloadFile_2 = document.getElementById("download-file-2");

// -------------------------------------------------------------------
openFile_2.addEventListener("click", () => {
    window.open("Network WF.pdf");
});
downloadFile_2.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Network WF.pdf";
    link.download = "Session-2.pdf";
    link.click();
});







