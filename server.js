const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const exphbars = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Now Listening at http://localhost:3001/api");
  });
});
