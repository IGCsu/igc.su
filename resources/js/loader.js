document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.loader').classList.add('loader-loaded');
	document.querySelector('.loaderIcon').classList.remove('enabled');
});

document.addEventListener('click', function (e) {
	let href;

	for (const elem of e.path) {
		if (
			elem instanceof Element &&
			null !== (href = elem?.getAttribute('href'))
		) {
			document.querySelector('.loader').classList.remove('loader-loaded');
			document.querySelector('.loaderIcon').classList.add('enabled');
			return;
		}
	}
});
