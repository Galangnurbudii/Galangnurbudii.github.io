const video = document.getElementById("video");
const buttonId = ["left", "right"];
const popularMenu = document.getElementById("popularMenu");
buttonId.forEach((id) => {
    document.getElementById(id + "Button").addEventListener("click", () => {
        popularMenu.scrollIntoView();
    });
});
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
