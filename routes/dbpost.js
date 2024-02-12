const apiRouter = require("express");
require("dotenv").config();
const dbpostRouter = apiRouter.Router();
const {
  createGctracker,
  createSite,
  createSiteDisp,
  createInbound,
} = require("../db");

dbpostRouter.post("/gcticket", async (req, res, next) => {
  const {
    date,
    gvr_id,
    dispatch,
    fm_ticket,
    grade,
    fp,
    sb,
    gp_ticket,
    atl_po,
    warranty_status,
    notes,
    status,
    email,
    checked,
    checkedTwo,
  } = req.body;
  try {
    console.log(
      "firing in users, gcticket",
      date,
      gvr_id,
      dispatch,
      fm_ticket,
      grade,
      fp,
      sb,
      gp_ticket,
      atl_po,
      warranty_status,
      notes,
      status,
      email,
      checked,
      checkedTwo
    );

    const gctracker = await createGctracker(
      date,
      gvr_id,
      dispatch,
      fm_ticket,
      grade,
      fp,
      sb,
      gp_ticket,
      atl_po,
      warranty_status,
      notes,
      status,
      email,
      checked,
      checkedTwo
    );
    res.send({ gctracker });
  } catch (error) {
    next(error);
  }
});

dbpostRouter.post("/allsites", async (req, res, next) => {
  const {
    gvr_id,
    gp_cust,
    cus_name,
    site_address,
    site_city,
    site_state,
    site_zip,
    contract,
    cus_email1,
    cus_email2,
    rrs,
    custAddId,
    contractor,
  } = req.body;
  try {
    console.log("RRS", rrs);
    const allsites = await createSite(
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      site_city,
      site_state,
      site_zip,
      contract,
      cus_email1,
      cus_email2,
      rrs,
      custAddId,
      contractor
    );
    res.send({ allsites });
  } catch (error) {
    next(error);
  }
});

dbpostRouter.post("/createdisp", async (req, res, next) => {
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

dbpostRouter.post("/inbound", async (req, res, next) => {
  const {
    sb,
    gvr_id,
    notes,
    name,
    number,
    issue,
    gp,
    problemType,
    gcIssue,
    dispNumber,
    totalDispNumer,
    totalFuelingPositions,
    totalCommercialDisp,
  } = req.body;
  try {
    const inboundRes = await createInbound(
      sb,
      gvr_id,
      notes,
      name,
      number,
      issue,
      gp,
      problemType,
      gcIssue,
      dispNumber,
      totalDispNumer,
      totalFuelingPositions,
      totalCommercialDisp
    );
    res.send({ inboundRes });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = dbpostRouter;
