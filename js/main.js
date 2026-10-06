
const username = document.getElementById("username");
const user = document.getElementById("user");
const btn = document.getElementById("btn");
const intro = document.getElementById("intro");

let left_animation = document.getElementById("left-animation");
let left_animation2 = document.getElementById("left-animation2");
let left_animation3 = document.getElementById("left-animation3");
let right_animation = document.getElementById("right-animation");


// ==========================================
// التحقق من الاسم المحفوظ
// ==========================================

const savedUsername = localStorage.getItem("username");

if (savedUsername) {

    // الاسم موجود → لا تظهر الـ intro
    intro.style.display = "none";

    user.textContent = savedUsername;

    // تشغيل الأنيميشن مباشرة
    left_animation.style.right = "0px";
    left_animation2.style.right = "0px";
    left_animation3.style.right = "0px";
    right_animation.style.left = "0px";

    setTimeout(() => {
        left_animation.style.opacity = "1";
        left_animation2.style.opacity = "1";
        left_animation3.style.opacity = "1";
        right_animation.style.opacity = "1";
    }, 100);

}


// ==========================================
// زر الدخول
// ==========================================

btn.addEventListener("click", () => {

    // ممنوع الدخول لو الاسم فاضي
    if (username.value.trim() === "") {
        return;
    }

    // تخزين الاسم
    localStorage.setItem("username", username.value);

    setTimeout(() => {

        username.blur();
        intro.style.right = "-100vw";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);

    }, 100);


    // تشغيل الأنيميشن
    setTimeout(() => {

        left_animation.style.right = "0px";
        left_animation2.style.right = "0px";
        left_animation3.style.right = "0px";
        right_animation.style.left = "0px";

        setTimeout(() => {

            left_animation.style.opacity = "1";
            left_animation2.style.opacity = "1";
            left_animation3.style.opacity = "1";
            right_animation.style.opacity = "1";

        }, 100);

    }, 200);

});


// ==========================================
// كتابة الاسم
// ==========================================

username.addEventListener("input", () => {

    // English letters + numbers + underscore فقط
    username.value = username.value.replace(/[^a-zA-Z0-9_]/g, "");

    user.textContent = username.value;

});





















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


document.addEventListener("click", (e) => {

    // لو الضغط جوه أي كارد، متقفلش
    if (card.contains(e.target) || card2.contains(e.target)) {
        return;
    }

    if (back_c.style.display === "flex") {

        card.classList.remove("flipped");
        card.style.borderColor = "";
        back_c.style.display = "none";
        front_c.style.display = "flex";
        card.style.height = "280px";
        back_c.style.height = "280px";
    }

    if (back_c2.style.display === "flex") {

        card2.classList.remove("flipped");
        card2.style.borderColor = "";
        back_c2.style.display = "none";
        front_c2.style.display = "flex";
        card2.style.height = "280px";
        back_c2.style.height = "280px";
    }
});

























const openFile_1 = document.getElementById("open-file-1");

const downloadFile_1 = document.getElementById("download-file-1");

// --------------------------------------------------------------------

openFile_1.addEventListener("click", () => {

    window.open("./sources/Material - Physical WF after the update 11.pdf");

});

downloadFile_1.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "./sources/Material - Physical WF after the update 11.pdf";

    link.download = "Session-1.pdf";

    link.click();

});


// -------------------------------------------------------------------

const openFile_2 = document.getElementById("open-file-2");

const downloadFile_2 = document.getElementById("download-file-2");

openFile_2.addEventListener("click", () => {

    window.open("./sources/Network WF.pdf");

});

downloadFile_2.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "./sources/Network WF.pdf";

    link.download = "Session-2.pdf";

    link.click();

});














































// let left_animation = document.getElementById("left-animation")
// let left_animation2 = document.getElementById("left-animation2")
// let left_animation3 = document.getElementById("left-animation3")
// let right_animation = document.getElementById("right-animation")

// document.addEventListener("DOMContentLoaded" , () => {
//     left_animation.style.right="0px"
//     left_animation2.style.right="0px"
//     left_animation3.style.right="0px"
//     right_animation.style.left="0px"
//     setTimeout(() => {
//         left_animation.style.opacity="1"
//         left_animation2.style.opacity="1"
//         left_animation3.style.opacity="1"
//         right_animation.style.opacity="1"
//     }, 100);
// })













































const cases = document.querySelectorAll(".video-1 .case");

cases.forEach(item => {
    item.addEventListener("click", () => {

        const time = item.dataset.time;

        // window.location.href = `../html/session1.html?time=${time}`;
        window.location.href = `html/session1.html?time=${time}`;

    });
});


const cases2 = document.querySelectorAll(".video-2 .case");

cases2.forEach(item2 => {
    item2.addEventListener("click", () => {

        const time2 = item2.dataset.time2;

        // window.location.href = `../html/session2.html?time=${time2}`;
        window.location.href = `html/session2.html?time=${time2}`;

    });
});