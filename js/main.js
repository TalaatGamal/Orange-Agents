const username = document.getElementById("username");
const user = document.getElementById("user");
const btn = document.getElementById("btn");
const intro = document.getElementById("intro");

btn.addEventListener("click", () => {

    setTimeout(() => {
        username.blur();

        intro.style.right = "-100vw";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);

    }, 100);
});

username.addEventListener("input", () => {

    // English letters + numbers + underscore فقط
    username.value = username.value.replace(/[^a-zA-Z0-9_]/g, "");

    user.textContent = username.value;

});