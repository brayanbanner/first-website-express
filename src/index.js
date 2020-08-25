// DEPENDENCIES
const express = require('express');
const app = express();
const path = require('path');

// SETTING
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// ROUTES
app.use(require('./routes'));

// LISTEN THE SERVER
app.listen(app.get('port'), () => {
  console.log('Server On Port: '+app.get('port'));
});