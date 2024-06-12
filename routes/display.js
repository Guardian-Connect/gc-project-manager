const apiRouter = require("express");
require("dotenv").config();
const displayRouter = apiRouter.Router();
const {
  getAllSites,
  getRrsMatrix,
  getAllInbound,
  getTicketing,
  getAllGcTracker,
  getBfr,
  getSitesGvr,
  getSitesAddress,
  getAllManagers,
  getTicketingSearchGvr,
  getTicketingSearchGp,
  troubledCreate,
  getTroubled,
} = require("../db");

// displayRouter.post("/searchgvr/:id", async (req, res, next) => {
//   const { id } = req.params;
//   console.log("routes/display");
//   try {
//     const searchGvr = getTicketingSearchGvr(id);

//     res.send({ searchGvr });
//   } catch ({ name, message }) {
//     next({ name, message });
//   }
// });

displayRouter.get("/troubled/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const troubledD = await troubledCreate(id);
    console.log(troubledD, "troubled Dispenser");
    res.send(troubledD);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/searchgvr/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const searchGvr = await getTicketingSearchGvr(id);
    console.log(searchGvr, "search GVR");
    res.send(searchGvr);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/searchgp/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchGp = await getTicketingSearchGp(id);
    console.log(searchGp, "search GVR");
    res.send(searchGp);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/disp", async (req, res, next) => {
  try {
    const dispinfo = await getAllSites();
    const rrsmatrix = await getRrsMatrix();
    const managers = await getAllManagers();

    res.send({ dispinfo, rrsmatrix, managers });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/bfr", async (req, res, next) => {
  try {
    const bfrReport = await getBfr();
    res.send({ bfrReport });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/allinbound", async (req, res, next) => {
  try {
    const inboundCalls = await getAllInbound();
    res.send({ inboundCalls });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/ticketing", async (req, res, next) => {
  try {
    const dispinfo = await getTicketing();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/troubleds", async (req, res, next) => {
  try {
    const dispinfo = await getTroubled();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/gctracker", async (req, res, next) => {
  try {
    const dispinfo = await getAllGcTracker();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/getsitesgvr/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const dispinfo = await getSitesGvr(id);
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/getsitesaddress/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("running sites display", id);
  try {
    const dispinfo = await getSitesAddress(id);
    console.log(dispinfo);
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = displayRouter;
