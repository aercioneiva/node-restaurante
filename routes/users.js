const express = require('express');
const router = express.Router();
const db = require('../config/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query(
    'SELECT * FROM `tb_users`',
    ['Page', 45],
    function(err, results) {
      res.json(results);
    }
  );
  
});

module.exports = router;
