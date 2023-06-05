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
} = require("../db");

displayRouter.get("/disp", async (req, res, next) => {
  try {
    const dispinfo = await getAllSites();
    const rrsmatrix = await getRrsMatrix();
    console.log(typeof dispinfo);

    res.send({ dispinfo, rrsmatrix });
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

displayRouter.get("/gctracker", async (req, res, next) => {
  try {
    const dispinfo = await getAllGcTracker();
    res.send({ dispinfo });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = displayRouter;
