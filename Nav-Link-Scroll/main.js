let nav = document.querySelectorAll(".nav-list");

nav.forEach((navList) => {
	navList.addEventListener("click", (e) => {
		e.preventDefault();
		let targetSection = navList.textContent.trim().toLocaleLowerCase();
		let sectionId = document.getElementById(targetSection);

		let interval = setInterval(() => {
			let targetSectionCoordinates = sectionId.getBoundingClientRect(sectionId);
			if (targetSectionCoordinates.top <= 0) {
				clearInterval(interval);
				return;
			}
			window.scrollBy(0, 500);
		}, 50);
	});
});
