const express = require("express");
const cors = require("cors");
const paginate = require("express-paginate");
const passport = require("passport");
const pinoHTTP = require("pino-http");
const logger = require("../src/utils/logger");
const router = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
require("../src/middleware/passport.middleware")(passport);

app.use(paginate.middleware(process.env.LIMIT, process.env.MAX_LIMIT));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
  pinoHTTP({
    logger,
  })
);

app.use("/api/v1", router);
module.exports = app;
