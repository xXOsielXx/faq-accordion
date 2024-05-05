const summarys = document.querySelectorAll("summary");

let icon;
let faqAnswer;

summarys.forEach(e => {
	e.addEventListener("click", () => {
		icon = e.querySelector("i");
		if (icon.classList.contains("icon-plus")) {
			icon.classList.remove("icon-plus");
			icon.classList.add("icon-minus");
		}
		else {
			icon.classList.remove("icon-minus");
			icon.classList.add("icon-plus");
		}
	})
});