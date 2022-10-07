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
  getTicketing,
  updateAlertTickets,
  deleteAlertTicket,
} = require("../db");
const { NotesSharp } = require("@mui/icons-material");
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

usersRouter.get("/ticketing", async (req, res, next) => {
  try {
    const dispinfo = await getTicketing();
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

usersRouter.get("/delete/ticketing/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const dispinfo = await deleteAlertTicket(id);
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
    console.log(dispinfo.rowCount);
    if (dispinfo.rowCount === 1) {
      res.send("Success");
    } else {
      console.log(error);
    }
    res.send({ dispinfo });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.post("/allsites", async (req, res, next) => {
  const {
    gvr_id,
    gp_cust,
    cus_name,
    site_address,
    contract,
    cus_email1,
    cus_email2,
    rrs,
  } = req.body;
  try {
    const allsites = await createSite(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract,
      cus_email1,
      cus_email2,
      rrs
    );
    // if (allsites.rowCount === 1) {
    //   res.send("Success");
    // } else {
    //   console.log(error);
    // }
    // res.send({ message: "Site Added!" });
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
    res.send({ message: "Site Added!" });
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
    console.log("firing in users, gcticket");
    const gctracker = await createGctracker(
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
    res.send({ gctracker });
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

usersRouter.post("/update", async (req, res, next) => {
  const {
    id,
    gvr_id,
    gp_cust,
    contract,
    site_address,
    totaldisp,
    activation_date,
    warranty_date,
    renewal,
    posvn,
    posmain,
    posreg1,
    posreg2,
    posreg3,
    atgmodel,
    disp1,
    grades1,
    disp2,
    grades2,
    disp3,
    grades3,
    disp4,
    grades4,
    disp5,
    grades5,
    disp6,
    grades6,
    disp7,
    grades7,
    disp8,
    grades8,
    disp9,
    grades9,
    disp10,
    grades10,
    notes,
  } = req.body;
  console.log("Users Running");
  const updateFields = {};
  console.log(notes.length, "notes length");
  if (notes != null && notes.length > 1) {
    updateFields.notes = notes;
  } else if (notes.length <= 1) {
    updateFields.notes = null;
  }

  if (gvr_id) {
    updateFields.gvr_id = gvr_id;
  }

  if (gp_cust) {
    updateFields.gp_cust = gp_cust;
  }

  if (contract) {
    updateFields.contract = contract;
  }

  if (site_address) {
    updateFields.site_address = site_address;
  }

  if (totaldisp) {
    updateFields.totaldisp = totaldisp;
  }

  if (activation_date) {
    let split2 = activation_date.split("T");
    let activation_date_final = split2[0].toString();
    updateFields.activation = activation_date_final;
  }

  if (warranty_date) {
    let split = warranty_date.split("T");
    let warranty_date_final = split[0].toString();
    updateFields.warranty = warranty_date_final;
  }

  if (renewal) {
    updateFields.renewal = renewal;
  }

  if (posvn) {
    updateFields.posvn = posvn;
  }

  if (posmain) {
    updateFields.posmain = posmain;
  }

  if (posreg1) {
    updateFields.posreg1 = posreg1;
  }

  if (posreg2) {
    updateFields.posreg2 = posreg2;
  }
  if (posreg3) {
    updateFields.posreg3 = posreg3;
  }
  if (atgmodel) {
    updateFields.atgmodel = atgmodel;
  }
  if (disp1) {
    updateFields.disp1 = disp1;
  }
  if (grades1) {
    updateFields.grades1 = grades1;
  }
  if (disp2) {
    updateFields.disp2 = disp2;
  }

  if (grades2) {
    updateFields.grades2 = grades2;
  }
  if (disp3) {
    updateFields.disp3 = disp3;
  }
  if (grades3) {
    updateFields.grades3 = grades3;
  }
  if (disp4) {
    updateFields.disp4 = disp4;
  }

  if (grades4) {
    updateFields.grades4 = grades4;
  }
  if (disp5) {
    updateFields.disp5 = disp5;
  }
  if (grades5) {
    updateFields.grades5 = grades5;
  }
  if (disp6) {
    updateFields.disp6 = disp6;
  }
  if (grades6) {
    updateFields.grades6 = grades6;
  }
  if (disp7) {
    updateFields.disp7 = disp7;
  }
  if (grades7) {
    updateFields.grades7 = grades7;
  }
  if (disp8) {
    updateFields.disp8 = disp8;
  }
  if (grades8) {
    updateFields.grades8 = grades8;
  }
  if (disp9) {
    updateFields.disp9 = disp9;
  }
  if (grades9) {
    updateFields.grades9 = grades9;
  }
  if (disp10) {
    updateFields.disp10 = disp10;
  }
  if (grades10) {
    updateFields.grades10 = grades10;
  }
  // if (posreg1) {
  //   updateFields.posreg1 = posreg1;
  // }

  try {
    const updatedTicket = await updateDisp(id, updateFields);
    console.log(updatedTicket.length);
    res.setDefaultEncoding({ updatedTicket });
  } catch ({ name, message }) {
    console.log(name, message);
    console.log(name, message);
    next({ name, message });
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
    console.log(updatedTicket, "users");
    res.send({ updatedTicket });
  } catch ({ name, message }) {
    console.log(name, message);
    console.log(name, message);
    next({ name, message });
  }
});

usersRouter.post("/update/ticketing", async (req, res, next) => {
  const {
    majorsrrs,
    parkers,
    others,
    confirmation,
    sr,
    gpticket,
    fp,
    gc,
    site,
    gvr,
    id,
  } = req.body;
  console.log("Ticket Update Running");
  const updateFields = {};

  if (majorsrrs) {
    updateFields.majors_rrs = majorsrrs;
  }
  if (parkers) {
    updateFields.parkers_rrs = parkers;
  }
  if (others) {
    updateFields.rrs_charges = others;
  }
  if (confirmation) {
    updateFields.confirmation_number = confirmation;
  }
  if (sr) {
    updateFields.sr_number = sr;
  }
  if (gpticket) {
    updateFields.gp_ticket = gpticket;
  }
  if (fp) {
    updateFields.fueling_position = fp;
  }
  if (gc) {
    updateFields.ticket_number = gc;
  }
  if (site) {
    updateFields.s_name = site;
  }
  if (gvr) {
    updateFields.gvr_id = gvr;
  }
  try {
    const updatedTicket = await updateAlertTickets(id, updateFields);
    console.log(updatedTicket, "users");
    res.send({ updatedTicket });
  } catch ({ name, message }) {
    console.log(name, message);
    console.log(name, message);
    next({ name, message });
  }
});

module.exports = usersRouter;
