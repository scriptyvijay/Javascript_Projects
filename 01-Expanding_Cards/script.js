let panel = document.querySelectorAll(".panel");

panel.forEach((panel) => {
	panel.addEventListener("click", (p) => {
		removeActiveListener();
		panel.classList.add("active");
	});
});

function removeActiveListener() {
	panel.forEach((p) => {
		p.classList.remove("active");
	});
}
