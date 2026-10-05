let player;

const params = new URLSearchParams(window.location.search);
const startTime = Number(params.get("time")) || 0;

// تحميل YouTube API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag =
    document.getElementsByTagName("script")[0];

firstScriptTag.parentNode.insertBefore(
    tag,
    firstScriptTag
);

// إنشاء الفيديو
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "v-62StMfhXY",

        playerVars: {
            playsinline: 1,
            rel: 0
        },

        events: {
            onReady: onPlayerReady
        }
    });
}

// لما الفيديو يبقى جاهز
function onPlayerReady(event) {

    if (startTime > 0) {
        event.target.seekTo(startTime, true);
    }

}

// أزرار الـ timestamps
const buttons =
    document.querySelectorAll(".timestamps .case");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const time =
            Number(button.dataset.time);

        player.seekTo(time, true);

    });

});