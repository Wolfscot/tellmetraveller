const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  app.use(bodyParser.json({ limit: "10mb", extended: true }));
  app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

  app.use(cookieParser(secret));
};