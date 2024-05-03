const faqQuestions = document.querySelectorAll(".faq__question");
const accordionBtns = document.querySelectorAll(".faq__question button");

let icon;
let faqAnswer;

faqQuestions.forEach(e => {
	e.addEventListener("click", () => {
		icon = e.querySelector("button img");
		faqAnswer = e.nextElementSibling;
		if (icon.classList.contains("icon-plus")) {
			icon.classList.remove("icon-plus");
			icon.classList.add("icon-minus");
			icon.src = "assets/images/icon-minus.svg";

			faqAnswer.classList.add("active");
		}
		else {
			icon.classList.remove("icon-minus");
			icon.classList.add("icon-plus");
			icon.src = "assets/images/icon-plus.svg";

			faqAnswer.classList.remove("active");
		}
	})
});