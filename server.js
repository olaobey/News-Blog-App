const http = require("http");
const app = require("./src/app");
const logger = require("./src/utils/logger");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
const server = http.createServer(app);

dotenv.config();
const startServer = async () => {
  try {
    await connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Successfully connected to database ${process.env.MONGO_DB}`);
    server.listen(process.env.PORT, () => {
      logger.info(
        `Application started successfully on PORT ${process.env.PORT}`
      );
    });
  } catch (error) {
    logger.error(error);
    startServer();
  }
};
startServer();
