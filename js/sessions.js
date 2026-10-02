


        let player;

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

                videoId: "2QAEqimhbfA",

                playerVars: {
                    playsinline: 1,
                    rel: 0
                }

            });

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