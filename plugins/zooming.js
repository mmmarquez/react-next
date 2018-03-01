if (process.browser) {
	// console.log(zoom);
	const Zooming = require("zooming");
	const zoom = new Zooming();
}

module.exports = {
	zoom() {
		return zoom;
	}
};

// By a css selector
// zoom.listen(".img-zoomable");
