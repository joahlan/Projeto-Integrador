const express = require('express');
const router = express.Router();
const db = require('../models/db');
const path = require('path');
const { mainModule } = require('process');


router.get('/', (req, res) => {
    res.send("Rota Funcionando!")
});

module.exports = router;