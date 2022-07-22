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
  getSpecificSiteInfoIncom,
  getSpecificSiteInfoComplete,
  getEmailByGvr,
  getEmailByGp,
  createSite,
  createEmailList,
  createGctracker,
  createSiteDisp,
  updateDisp,
  getAllGcTracker,
  getTracker,
  updateTracker,
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

usersRouter.get("/gctracker", async (req, res, next) => {
  try {
    const dispinfo = await getAllGcTracker();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/email/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const emailInfo = await getEmailByGvr(id);
    res.send({ emailInfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/gp/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const emailInfo = await getEmailByGp(id);
    res.send({ emailInfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/disp/notes", async (req, res, next) => {
  try {
    const dispinfo = await getAllSitesNotes();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/disp/open", async (req, res, next) => {
  try {
    const dispinfo = await getAllSitesOpen();
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

usersRouter.get("/tracker/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const dispinfo = await getTracker(id);
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

usersRouter.get("/records/:gp", async (req, res, next) => {
  try {
    const { gp } = req.params;
    const dispinfo = await getSpecificSiteInfoIncom(gp);
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.get("/complete/:gp", async (req, res, next) => {
  try {
    const { gp } = req.params;
    const dispinfo = await getSpecificSiteInfoComplete(gp);
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
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
    next(error);
  }
});

usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
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

// FUTURE MERGING OF CODE FOR ALL SITES AND DISPINFO
// linkRouter.post("/", async (req, res, next) => {
//   const { url: link, date, comment, clicks = 0, tags = [] } = req.body;
//   console.log(req.body);
//   const tagArr = tags.trim().split(/\s+/);
//   const linkData = {};

//   console.log("something");
//   try {
//     linkData.link = link;
//     linkData.date = date;
//     linkData.comment = comment;
//     linkData.clicks = clicks;
//     linkData.tags = tagArr;
//     console.log("28");
//     const createdLink = await createLink(linkData);
//     console.log("called create link");
//     if (createdLink) {
//       res.send({ createdLink });
//     } else {
//       ({
//         name: "Missing Post Data",
//         message: "Post Data is missing",
//       });
//     }
//   } catch ({ name, message }) {
//     console.log(name, message);
//     next({ name, message });
//   }
// });

usersRouter.post("/createdisp", async (req, res, next) => {
  const { gvr_id, gp_cust, cus_name, site_address, contract } = req.body;
  try {
    const dispinfo = await createSiteDisp(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract
    );
    // console.log(dispinfo.rowCount);
    // if (dispinfo.rowCount === 1) {
    //   res.send("Success");
    // } else {
    //   console.log(error);
    // }
    console.log(dispinfo);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.post("/allsites", async (req, res, next) => {
  const { gvr_id, gp_cust, cus_name, site_address, contract } = req.body;
  try {
    const allsites = await createSite(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract
    );
    // if (allsites.rowCount === 1) {
    //   res.send("Success");
    // } else {
    //   console.log(error);
    // }
    res.send({ allsites });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/custemail", async (req, res, next) => {
  const {
    cust_gp,
    cus_name,
    rrs,
    cus_email1,
    cus_email2,
    cus_email3,
    cus_email4,
    cus_email5,
    cus_email6,
  } = req.body;
  try {
    const custemail = await createEmailList(
      cust_gp,
      cus_name,
      rrs,
      cus_email1,
      cus_email2,
      cus_email3,
      cus_email4,
      cus_email5,
      cus_email6
    );
    // if (custemail.rowCount === 1) {
    //   res.send("Success");
    // } else {
    //   res.send("Error");
    // }
    // res.send({ allsites });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/gcticket", async (req, res, next) => {
  const {
    date,
    gvr_id,
    gp,
    dispatch_type,
    fm_ticket,
    location,
    address,
    grade,
    fp,
    sb,
    gp_ticket,
    atl_po,
    warranty_status,
    notes,
    status,
  } = req.body;
  try {
    const custemail = await createGctracker(
      date,
      gvr_id,
      gp,
      dispatch_type,
      fm_ticket,
      location,
      address,
      grade,
      fp,
      sb,
      gp_ticket,
      atl_po,
      warranty_status,
      notes,
      status
    );
    // if (custemail.rowCount === 1) {
    //   res.send("Success");
    // } else {
    //   res.send("Error");
    // }
    // res.send({ allsites });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/report", async (req, res, next) => {
  const { start, end, gp } = req.body;
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
    next(error);
  }
});

usersRouter.post("/update/tracker", async (req, res, next) => {
  const {
    date,
    dispatch_type,
    fm_ticket,
    fp,
    gp,
    gp_ticket,
    grade,
    gvr_id,
    id,
    location,
    notes,
    sb,
    warranty_status,
    atl_po,
    status,
  } = req.body;
  console.log("Ticket Update Running");
  const updateFields = {};

  if (date) {
    let split2 = date.split("T");
    let ticketDate = split2[0].toString();
    updateFields.date = ticketDate;
  }

  if (status) {
    updateFields.status = status;
  }

  if (dispatch_type) {
    updateFields.dispatch_type = dispatch_type;
  }

  if (fm_ticket) {
    updateFields.fm_ticket = fm_ticket;
  }

  if (fp) {
    updateFields.fp = fp;
  }

  if (gp) {
    updateFields.gp = gp;
  }

  if (gp_ticket) {
    updateFields.gp_ticket = gp_ticket;
  }
  if (grade) {
    updateFields.grade = grade;
  }
  if (gvr_id) {
    updateFields.gvr_id = gvr_id;
  }

  if (location) {
    updateFields.location = location;
  }
  if (notes) {
    updateFields.notes = notes;
  }

  if (sb) {
    updateFields.sb = sb;
  }
  if (warranty_status) {
    updateFields.warranty_status = warranty_status;
  }
  if (atl_po) {
    updateFields.atl_po = atl_po;
  }
  try {
    const updatedTicket = await updateTracker(id, updateFields);
  } catch ({ name, message }) {
    console.log(name, message);
    console.log(name, message);
    next({ name, message });
  }
});

module.exports = usersRouter;
