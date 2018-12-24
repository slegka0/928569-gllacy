var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".close-button-feedback");
var login = popup.querySelector(".feedback-email");
var message = popup.querySelector(".feedback-message");
var form = document.querySelector(".feedback-form");
var input = popup.querySelector(".feedback-login");



link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	if (!login.value) {
		evt.preventDefault();
		login.classList.remove("modal-error");
		login.offsetWidth = login.offsetWidth;
		login.classList.add("modal-error");
	}
});
form.addEventListener("submit", function (evt) {
	if (!message.value) {
		evt.preventDefault();
		message.classList.remove("modal-error");
		message.offsetWidth = message.offsetWidth;
		message.classList.add("modal-error");
	}
});
form.addEventListener("submit", function (evt) {
	if (!input.value) {
		evt.preventDefault();
		input.classList.remove("modal-error");
		input.offsetWidth = input.offsetWidth;
		input.classList.add("modal-error");
	}
});
