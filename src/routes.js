// DEPENDENCIES
const express = require('express');
const router = express.Router();
const path = require('path');

// FILES
const public = path.join(__dirname, 'public/');

// ROUTES
router.get('/', (req, res) => {
  res.render('index.html');
});
router.get('/bootstrap.css', (req, res) => {
  res.sendFile(public+'bootstrap.min.css');
});

// EXPORT THE MODULE
module.exports = router;