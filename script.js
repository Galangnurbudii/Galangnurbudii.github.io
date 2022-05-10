const video = document.getElementById("video");
const buttonId = ["left", "right"];
const popularMenu = document.getElementById("popularMenu");
buttonId.forEach((id) => {
    document.getElementById(id + "Button").addEventListener("click", () => {
        // window.scrollTo(0, popularMenu.getBoundingClientRect().top);
        popularMenu.scrollIntoView();
    });
});
window.addEventListener(
    "scroll",
    () => {
        console.log(popularMenu.getBoundingClientRect().top);
        let top = video.getBoundingClientRect().top;
        if (top < 485 && top > 3) {
            video.play();
        } else {
            video.pause();
        }
    },
    false
);
