const router = require('express').Router();

const avlfRoutes = require('./avlf');

router.use('/api/avlf', avlfRoutes);

router.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	let msg = err.message;
	// If we are in production, override the message we
	// expose to the client (for security reasons)
	if (process.env.NODE_ENV === 'production') {
		msg = 'Internal server error';
	}
	if (err.statusCode === 500) {
		console.error(err);
	}
	res.status(err.statusCode).json({
		error: msg
	});
});

module.exports = router;
