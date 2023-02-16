const apiRouter = require("express");
require("dotenv").config();
const updateRouter = apiRouter.Router();
const { updateDisp, updateTracker, updateAlertTickets } = require("../db");

function addNotesField(updateNotes) {
  let date_ob = new Date();
  let date2 = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hourz = date_ob.getHours();
  let hours = (hourz < 10 ? "0" : "") + hourz;
  let minutes = (date_ob.getMinutes() < 10 ? "0" : "") + date_ob.getMinutes();
  let note_date = year + "-" + month + "-" + date2;
  let time = hours + ":" + minutes;
  const newNotes = note_date + " " + "-" + " " + updateNotes;
  return newNotes;
}

updateRouter.post("/", async (req, res, next) => {
  const {
    id,
    gvr_id,
    gp_cust,
    contract,
    add_id,
    contractStatus,
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
    model1,
    model2,
    model3,
    model4,
    model5,
    model6,
    model7,
    model8,
    model9,
    model10,
    notes,
    quote,
    vendorRevenue,
    branchRevenue,
  } = req.body;
  const updateFields = {};
  if (notes != null && notes.length > 1) {
    let newNotes = addNotesField(notes);
    updateFields.notes = newNotes;
  } else if (notes.length <= 1) {
    updateFields.notes = "X";
  }

  if (vendorRevenue) {
    updateFields.v_revenue = vendorRevenue;
  }

  if (branchRevenue) {
    updateFields.b_revenue = branchRevenue;
  }

  if (quote) {
    updateFields.quote = quote;
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
  if (add_id) {
    updateFields.add_id = add_id;
  }
  if (contractStatus) {
    updateFields.contract_status = contractStatus;
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

  if (model1) {
    updateFields.model1 = model1;
  }

  if (model2) {
    updateFields.model2 = model2;
  }

  if (model3) {
    updateFields.model3 = model3;
  }

  if (model4) {
    updateFields.model4 = model4;
  }

  if (model5) {
    updateFields.model5 = model5;
  }

  if (model6) {
    updateFields.model6 = model6;
  }

  if (model7) {
    updateFields.model7 = model7;
  }

  if (model8) {
    updateFields.model8 = model8;
  }

  if (model9) {
    updateFields.model9 = model9;
  }

  if (model10) {
    updateFields.model10 = model10;
  }
  // if (posreg1) {
  //   updateFields.posreg1 = posreg1;
  // }

  try {
    const updatedTicket = await updateDisp(id, updateFields);
    // console.log(updatedTicket.length);
    res.send({ updatedTicket });
  } catch ({ name, message }) {
    console.log(name, message);
    console.log(name, message);
    next({ name, message });
  }
});

updateRouter.post("/tracker", async (req, res, next) => {
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
    updateNotes,
    sb,
    warranty_status,
    atl_po,
    status,
    trip,
  } = req.body;
  console.log("Ticket Update Running");

  let newNotes = addNotesField(updateNotes);
  const updateFields = {};

  if (date) {
    let split2 = date.split("T");
    let ticketDate = split2[0].toString();
    updateFields.date = ticketDate;
  }

  if (trip) {
    updateFields.trip = trip;
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
  if (updateNotes) {
    updateFields.update_notes = newNotes;
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

updateRouter.post("/ticketing", async (req, res, next) => {
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

module.exports = updateRouter;
