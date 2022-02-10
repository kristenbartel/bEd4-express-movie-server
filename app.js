const express = require('express');
const app = express();
es6Renderer = require('express-es6-template-engine');
const port = 3005;
const indexRouter = require('./routes/index');
const showsRouter = require('./routes/shows');
const detailsRouter = require('./routes/showDetails');

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// routes
// any requests to this route will be handled by this
app.use('/', indexRouter);
app.use('/', showsRouter);
app.use('/', detailsRouter);

// end routes

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.01:${port}`)
})