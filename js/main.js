






// const username = document.getElementById("username");
// const user = document.getElementById("user");
// const btn = document.getElementById("btn");
// const intro = document.getElementById("intro");

// const left_animation = document.getElementById("left-animation");
// const left_animation2 = document.getElementById("left-animation2");
// const left_animation3 = document.getElementById("left-animation3");
// const right_animation = document.getElementById("right-animation");

// // ==========================================
// // تشغيل الأنيميشن
// // ==========================================

// function startAnimation() {
//     left_animation.style.right = "0px";
//     left_animation2.style.right = "0px";
//     left_animation3.style.right = "0px";
//     right_animation.style.left = "0px";

//     setTimeout(() => {
//         left_animation.style.opacity = "1";
//         left_animation2.style.opacity = "1";
//         left_animation3.style.opacity = "1";
//         right_animation.style.opacity = "1";
//     }, 100);
// }

// // ==========================================
// // التحقق من الاسم ومدة 15 دقيقة
// // ==========================================

// const savedUsername = localStorage.getItem("username");
// const lastLogin = Number(localStorage.getItem("lastLogin"));

// if (
//     savedUsername &&
//     lastLogin &&
//     Date.now() - lastLogin < 15 * 60 * 1000
// ) {
//     // الاسم محفوظ والمدة لم تنتهِ
//     intro.style.display = "none";
//     document.documentElement.style.overflowY = "auto";

//     user.textContent = savedUsername;

// } else {
//     // لا يوجد اسم أو انتهت المدة
//     localStorage.removeItem("username");
//     localStorage.removeItem("lastLogin");

//     intro.style.display = "block";
//     intro.style.right = "0";

//     document.documentElement.style.overflowY = "hidden";
// }

// // ==========================================
// // تشغيل الأنيميشن عند فتح الصفحة أو تحديثها
// // ==========================================

// startAnimation();

// // ==========================================
// // زر الدخول Request
// // ==========================================

// btn.addEventListener("click", () => {
//     const name = username.value.trim();

//     if (!name) {
//         username.focus();
//         return;
//     }

//     // السماح بالحروف الإنجليزية والأرقام والشرطة السفلية فقط
//     if (!/^[a-zA-Z0-9_]+$/.test(name)) {
//         alert("Please use English letters, numbers, and underscores only.");
//         username.focus();
//         return;
//     }

//     // حفظ الاسم ووقت الدخول
//     localStorage.setItem("username", name);
//     localStorage.setItem("lastLogin", Date.now().toString());

//     user.textContent = name;
//     username.blur();

//     // إخفاء صفحة البداية
//     intro.style.right = "-100vw";

//     setTimeout(() => {
//         intro.style.display = "none";
//         document.documentElement.style.overflowY = "auto";
//     }, 1000);
// });

// // ==========================================
// // كتابة الاسم وعرضه مباشرة
// // ==========================================

// username.addEventListener("input", () => {
//     username.value = username.value.replace(/[^a-zA-Z0-9_]/g, "");
//     user.textContent = username.value;
// });








const username = document.getElementById("username");
const user = document.getElementById("user");
const btn = document.getElementById("btn");
const intro = document.getElementById("intro");

const left_animation = document.getElementById("left-animation");
const left_animation2 = document.getElementById("left-animation2");
const left_animation3 = document.getElementById("left-animation3");
const right_animation = document.getElementById("right-animation");

const animations = [
    right_animation,
    left_animation,
    left_animation2,
    left_animation3
];

// ==========================================
// تشغيل الأنيميشن
// ==========================================

function startAnimation() {
    // إعادة العناصر إلى وضع البداية
    animations.forEach((element) => {
        element.classList.remove("show");
    });

    // تطبيق وضع البداية قبل تشغيل الحركة
    void document.body.offsetHeight;

    // تشغيل الأنيميشن بالتدريج
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            animations.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add("show");
                }, index * 200);
            });
        });
    });
}

// ==========================================
// التحقق من الاسم ومدة 15 دقيقة
// ==========================================

const savedUsername = localStorage.getItem("username");
const lastLogin = Number(localStorage.getItem("lastLogin"));

const validLogin =
    savedUsername &&
    lastLogin &&
    Date.now() - lastLogin < 15 * 60 * 1000;

if (validLogin) {
    user.textContent = savedUsername;

    intro.style.display = "none";
    intro.style.right = "-100vw";

    document.documentElement.style.overflowY = "auto";
} else {
    localStorage.removeItem("username");
    localStorage.removeItem("lastLogin");

    intro.style.display = "block";
    intro.style.right = "0";

    document.documentElement.style.overflowY = "hidden";
}

startAnimation();
// ==========================================
// زر Request
// ==========================================

btn.addEventListener("click", () => {
    const name = username.value.trim();

    if (!name) {
        username.focus();
        return;
    }

    // السماح بالحروف الإنجليزية والأرقام والشرطة السفلية فقط
    if (!/^[a-zA-Z0-9_]+$/.test(name)) {
        alert("Please use English letters, numbers, and underscores only.");
        username.focus();
        return;
    }

    // حفظ الاسم ووقت الدخول
    localStorage.setItem("username", name);
    localStorage.setItem("lastLogin", Date.now().toString());

    // user.textContent = name;
    username.blur();

    // إخفاء الانترو
    intro.style.right = "-100vw";
    startAnimation();

    setTimeout(() => {
        intro.style.display = "none";
        document.documentElement.style.overflowY = "auto";
    }, 850);
});

// ==========================================
// كتابة الاسم وعرضه مباشرة
// ==========================================

username.addEventListener("input", () => {
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







// -------------------------------------------------------------------

const openFile_3 = document.getElementById("open-file-3");

const downloadFile_3 = document.getElementById("download-file-3");

openFile_3.addEventListener("click", () => {

    window.open("./sources/Billing.pdf");

});

downloadFile_3.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "./sources/Billing.pdf";

    link.download = "Billing.pdf";

    link.click();

});



// -------------------------------------------------------------------

const openFile_4 = document.getElementById("open-file-4");

const downloadFile_4 = document.getElementById("download-file-4");

openFile_4.addEventListener("click", () => {

    window.open("./sources/call-scenario.pdf");

});

downloadFile_4.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "./sources/call-scenario.pdf";

    link.download = "call-scenario.pdf";

    link.click();

});















































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

        const time2 = item2.dataset.time;

        // window.location.href = `../html/session2.html?time=${time2}`;
        window.location.href = `html/session2.html?time=${time2}`;

    });
});





























































emailjs.init({
    publicKey: "3o_Ok3aG0DS4-OWJo"
});

// const username = document.getElementById("username");
// const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    if (username.value.trim() === "") {
        username.focus();
        return;
    }

    emailjs.send(
        "direct-message",
        "template_dwzuvu4",
        {
            username: username.value
        }
    )
    .then(() => {
        // alert("Request sent successfully!");
        username.value = "";
    })
    .catch((error) => {
        console.log(error);
        // alert("Failed to send request.");
    });

});