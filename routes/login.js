const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    res.render('login');
});

module.exports = router;
