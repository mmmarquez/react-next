const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/', (req, res) => app.render(req, res, '/'));
	server.get('/work/:slug', (req, res) => {
		return app.render(
			req,
			res,
			'/work',
			Object.assign({ slug: req.params.slug })
		);
	});
	server.get('/*', (req, res) => handle(req, res));

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Read on http://localhost:${port}`);
	});
});
