const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const updateRouter = require("./update");
apiRouter.use("/update", updateRouter);

const displayRouter = require("./display");
apiRouter.use("/display", displayRouter);

const dbpostRouter = require("./dbpost");
apiRouter.use("/dbpost", dbpostRouter);

apiRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = apiRouter;
