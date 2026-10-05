


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

                videoId: "sy5y51mDZOw",

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