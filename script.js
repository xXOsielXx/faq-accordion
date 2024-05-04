const summarys = document.querySelectorAll("summary");

let icon;
let faqAnswer;

summarys.forEach(e => {
	e.addEventListener("click", () => {
		icon = e.querySelector("img");
		if (icon.classList.contains("icon-plus")) {
			icon.classList.remove("icon-plus");
			icon.classList.add("icon-minus");
			icon.src = "assets/images/icon-minus.svg";
		}
		else {
			icon.classList.remove("icon-minus");
			icon.classList.add("icon-plus");
			icon.src = "assets/images/icon-plus.svg";
		}
	})
});