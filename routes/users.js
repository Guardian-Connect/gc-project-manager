const apiRouter = require("express");
require("dotenv").config();
const usersRouter = apiRouter.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  createUser,
  getUserByUsername,
  getUser,
  getAllUsers,
  getAllSites,
  getSites,
  getAllSitesNotes,
  getAllSitesOpen,
  getRecordByDate,
} = require("../db");
const SALT_COUNT = 10;

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send({ users });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/disp", async (req, res, next) => {
  try {
    const dispinfo = await getAllSites();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/disp/notes", async (req, res, next) => {
  try {
    const dispinfo = await getAllSitesNotes();
    // console.log(process.env.cust1);
    // console.log(dispinfo);
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/disp/open", async (req, res, next) => {
  try {
    const dispinfo = await getAllSitesOpen();
    console.log(dispinfo);
    if (dispinfo.length >= 1) {
    res.send(dispinfo);
    } else {
    //   // need to add default nothing here message here
    res.send([
      {
        id: 5000000,
        gp: "MAJ0001",
        company: "MAJORS MANAGEMENT",
        address: "NA",
        gvrid: "NA",
      },
    ]);
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/disp/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const dispinfo = await getSites(id);
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/getUserInfo", async (req, res, next) => {
  try {
    if (req.user) {
      res.send({ user: req.user });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next({
      name: "MissingUserNameOrPassword",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUser({ username, password });
    if (!user) {
      next({
        name: "WrongUserNameOrPassword",
        message: "Username or password is incorrect",
      });
    } else {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1w" }
      );
      res.send({ message: "you're logged in!", token, user });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const queriedUser = await getUserByUsername(username);
    if (queriedUser) {
      next({
        name: "UserExistsError",
        message: "A user by that username already exists",
      });
    } else if (password.length < 1) {
      next({
        name: "PasswordLengthError",
        message: "Password Too Short!",
      });
    } else {
      bcrypt.hash(password, SALT_COUNT, async function (err, hashedPassword) {
        const user = await createUser({
          username,
          password: hashedPassword,
          email,
          seller: false,
        });
        if (err) {
          next(err);
        } else {
          const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1w" }
          );
          res.send({ message: "you're logged in!", token, user });
        }
      });
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/report", async (req, res, next) => {
  const { start, end, gp } = req.body;
  console.log(start, end, "gp", gp);
  let startNew = new Date(start);
  let endNew = new Date(end);
  let startDate = startNew.toISOString();
  let useStartDate = startDate.split("T")[0];
  let endDate = endNew.toISOString();
  let useEndDate = endDate.split("T")[0];
  try {
    const report = await getRecordByDate(useStartDate, useEndDate, gp);
    res.send({ report });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = usersRouter;
