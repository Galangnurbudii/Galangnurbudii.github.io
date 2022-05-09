const video = document.getElementById("video");

window.addEventListener(
    "scroll",
    () => {
        let top = video.getBoundingClientRect().top;
        if (top < 485 && top > 3) {
            video.play();
        } else {
            video.pause();
        }
    },
    false
);
