const video = document.getElementById("video");
function printScroll() {
	let top =video.getBoundingClientRect().top
	console.log(top)
	if (
		top < 485 && top > 3
	) {
		video.play();
	} else {
		video.pause();
	}
}

window.addEventListener("scroll", printScroll, false);

const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", function () {
	window.scrollTo(0, 0);
});

const ul = document.getElementById("ul");

const hamburger = document.getElementById("burger-button");
hamburger.addEventListener("click", function () {
	if (hamburger.className == "inactive") {
		hamburger.className = "active";
		ul.className = "slide";
	} else {
		hamburger.className = "inactive";
		ul.className = "";
	}
});
