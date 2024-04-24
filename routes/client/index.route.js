const bookRoutes = require("./book.route");
const readerRoutes = require("./reader.route");
const authRoutes = require("./auth.route");

const authMiddlewares = require("../../middlewares/client/auth.middlewares");
const controllerReader = require("../../controllers/client/reader.controller");

module.exports = (app) => {  
  app.use("/books",bookRoutes);
  app.use("/reader", readerRoutes);
  app.use("/auth", authRoutes);
  app.post('/reader/register', controllerReader.create);
}