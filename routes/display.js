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
  getEmailCust,
  getAllByAddress,
  getAllByGvrId,
  getAllByGvrIdGcTracker,
  getAllByAddressGcTracker,
  getAllByGvrIdTicketing,
  getAllByAddressTicketing,
  getAllByGvrIdTroubled,
  getAllByAddressTroubled,
  getAllByAddressInbound,
  getAllByGvrIdInbound,
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

displayRouter.get("/troubledgvr/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByGvrIdTroubled(id);
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/addresstroubled/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByAddressTroubled(id);
    console.log(dispinfo, "search Address");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/searchgvr/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const searchGvr = await getTicketingSearchGvr(id);
    res.send(searchGvr);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/dispgvr/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByGvrId(id);
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/addressgvr/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByAddress(id);
    console.log(dispinfo, "search Address");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/trackergvrid/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByGvrIdGcTracker(id);
    console.log(dispinfo, "search Tracker GVR");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/trackeraddress/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByAddressGcTracker(id);
    console.log(dispinfo, "search Tracker Address");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/searchgp/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id, "GP Customer");
  try {
    const searchGp = await getTicketingSearchGp(id);
    console.log(searchGp, "search GP");
    res.send(searchGp);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/disp", async (req, res, next) => {
  try {
    console.log("runnind disp");

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const resDisp = await getAllSites();
    // const rrsmatrix = await getRrsMatrix();
    // const managers = await getAllManagers();
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    console.log(resDisp.length, "total legnth");

    const results = {};
    console.log(endIndex);
    console.log(startIndex);
    // if (endIndex < resDisp.lenth) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
    //   return;
    // }
    // if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
    // return;
    // }
    results.dispinfo = resDisp.slice(startIndex, endIndex);
    const dispinfo = results.dispinfo;
    console.log(results.next);
    console.log(results.previous, "previous");
    // console.log(results, "results");
    // console.log(dispinfo);
    res.send(
      { dispinfo, results, resDisp }
      // rrsmatrix, managers
    );
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/rrs", async (req, res, next) => {
  try {
    const rrsmatrix = await getRrsMatrix();

    res.send({ rrsmatrix });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/managers", async (req, res, next) => {
  try {
    const managers = await getAllManagers();

    res.send({ managers });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// displayRouter.get("/bfr", async (req, res, next) => {
//   try {
//     const bfrReport = await getBfr();
//     res.send({ bfrReport });
//   } catch ({ name, message }) {
//     next({ name, message });
//   }
// });

displayRouter.get("/allinbound", async (req, res, next) => {
  try {
    const inboundCalls = await getAllInbound();
    res.send({ inboundCalls });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/inboundgvrid/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByGvrIdInbound(id);
    console.log(dispinfo, "search Tracker GVR");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/inboundaddress/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByAddressInbound(id);
    console.log(dispinfo, "search Tracker Address");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/customeremail", async (req, res, next) => {
  try {
    const emailNotice = await getEmailCust();
    res.send({ emailNotice });
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

displayRouter.get("/ticketinggvrid/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByGvrIdTicketing(id);
    console.log(dispinfo, "search Ticketing GVR");
    res.send(dispinfo);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

displayRouter.get("/ticketingaddress/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("routes/display");
  try {
    const dispinfo = await getAllByAddressTicketing(id);
    console.log(dispinfo, "search Ticketing Address");
    res.send(dispinfo);
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
