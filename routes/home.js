const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        success: true,
        result: 'It works!'
    });
});

module.exports = router;