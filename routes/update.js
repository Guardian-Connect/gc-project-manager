const apiRouter = require("express");
require("dotenv").config();
const updateRouter = apiRouter.Router();
const {
  updateDisp,
  updateTracker,
  updateAlertTickets,
  updateSerials,
  updateModels,
  updateGrades,
} = require("../db");

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
    thisGuy,
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
  console.log(gvr_id, "pre run");
  const updateFieldsInfo = {};
  const updateFieldsSerials = {};
  const updateFieldsModels = {};
  const updateFieldsGrades = {};
  let id = parseInt(thisGuy);
  if (gvr_id) {
    let thisGuyTwo = parseInt(gvr_id);
    console.log(thisGuyTwo, "this fuckin guy");
    updateFieldsInfo.gvr_id = thisGuyTwo;
    updateFieldsSerials.gvr_id = thisGuyTwo;
    updateFieldsModels.gvr_id = thisGuyTwo;
    updateFieldsGrades.gvr_id = thisGuyTwo;
  }

  if (notes != null && notes.length > 1) {
    let newNotes = addNotesField(notes);
    updateFieldsInfo.notes = newNotes;
  } else if (notes.length <= 1) {
    updateFieldsInfo.notes = "X";
  }

  if (vendorRevenue) {
    updateFieldsInfo.v_revenue = vendorRevenue;
  }

  if (branchRevenue) {
    updateFieldsInfo.b_revenue = branchRevenue;
  }

  if (quote) {
    updateFieldsInfo.quote = quote;
  }

  if (gp_cust) {
    updateFieldsInfo.gp_cust = gp_cust;
  }

  if (contract) {
    updateFieldsInfo.contract = contract;
  }
  if (add_id) {
    updateFieldsInfo.add_id = add_id;
  }
  if (contractStatus) {
    updateFieldsInfo.contract_status = contractStatus;
  }

  if (site_address) {
    updateFieldsInfo.site_address = site_address;
  }

  if (totaldisp) {
    updateFieldsInfo.totaldisp = totaldisp;
  }

  if (activation_date) {
    let split2 = activation_date.split("T");
    let activation_date_final = split2[0].toString();
    updateFieldsInfo.dashboard_status = "Active";
    updateFieldsInfo.activation = activation_date_final;
  }

  if (warranty_date) {
    let split = warranty_date.split("T");
    let warranty_date_final = split[0].toString();
    updateFieldsInfo.warranty = warranty_date_final;
  }

  if (renewal) {
    updateFieldsInfo.renewal = renewal;
  }

  if (posvn) {
    updateFieldsSerials.posvn = posvn;
  }

  if (posmain) {
    updateFieldsSerials.posmain = posmain;
  }

  if (posreg1) {
    updateFieldsSerials.posreg1 = posreg1;
  }

  if (posreg2) {
    updateFieldsSerials.posreg2 = posreg2;
  }
  if (posreg3) {
    updateFieldsSerials.posreg3 = posreg3;
  }
  if (atgmodel) {
    updateFieldsSerials.atgmodel = atgmodel;
  }
  if (disp1) {
    updateFieldsSerials.disp1 = disp1;
  }
  if (grades1) {
    updateFieldsGrades.grades1 = grades1;
  }
  if (disp2) {
    updateFieldsSerials.disp2 = disp2;
  }

  if (grades2) {
    updateFieldsGrades.grades2 = grades2;
  }
  if (disp3) {
    updateFieldsSerials.disp3 = disp3;
  }
  if (grades3) {
    updateFieldsGrades.grades3 = grades3;
  }
  if (disp4) {
    updateFieldsSerials.disp4 = disp4;
  }

  if (grades4) {
    updateFieldsGrades.grades4 = grades4;
  }
  if (disp5) {
    updateFieldsSerials.disp5 = disp5;
  }
  if (grades5) {
    updateFieldsGrades.grades5 = grades5;
  }
  if (disp6) {
    updateFieldsSerials.disp6 = disp6;
  }
  if (grades6) {
    updateFieldsGrades.grades6 = grades6;
  }
  if (disp7) {
    updateFieldsSerials.disp7 = disp7;
  }
  if (grades7) {
    updateFieldsGrades.grades7 = grades7;
  }
  if (disp8) {
    updateFieldsSerials.disp8 = disp8;
  }
  if (grades8) {
    updateFieldsGrades.grades8 = grades8;
  }
  if (disp9) {
    updateFieldsSerials.disp9 = disp9;
  }
  if (grades9) {
    updateFieldsGrades.grades9 = grades9;
  }
  if (disp10) {
    updateFieldsSerials.disp10 = disp10;
  }
  if (grades10) {
    updateFieldsGrades.grades10 = grades10;
  }

  if (model1) {
    updateFieldsModels.model1 = model1;
  }

  if (model2) {
    updateFieldsModels.model2 = model2;
  }

  if (model3) {
    updateFieldsModels.model3 = model3;
  }

  if (model4) {
    updateFieldsModels.model4 = model4;
  }

  if (model5) {
    updateFieldsModels.model5 = model5;
  }

  if (model6) {
    updateFieldsModels.model6 = model6;
  }

  if (model7) {
    updateFieldsModels.model7 = model7;
  }

  if (model8) {
    updateFieldsModels.model8 = model8;
  }

  if (model9) {
    updateFieldsModels.model9 = model9;
  }

  if (model10) {
    updateFieldsModels.model10 = model10;
  }

  try {
    console.log(updateFieldsInfo);
    const updatedDispInfo = await updateDisp(id, updateFieldsInfo);
    const updatedDispSerials = await updateSerials(id, updateFieldsSerials);
    const updatedDispModels = await updateModels(id, updateFieldsModels);
    const updateDispGrades = await updateGrades(id, updateFieldsGrades);
    res.send({ updatedDispInfo });
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
    parts,
    travel,
  } = req.body;
  console.log("Ticket Update Running");

  let date_ob = new Date();
  let date2 = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hourz = date_ob.getHours() - 4;
  let hours = (hourz < 10 ? "0" : "") + hourz;
  let minutes = (date_ob.getMinutes() < 10 ? "0" : "") + date_ob.getMinutes();
  let dateStamp = year + "-" + month + "-" + date2;
  let time = hours + ":" + minutes;

  let newNotes = addNotesField(updateNotes);
  const updateFields = {};

  updateFields.complete_date = dateStamp;
  updateFields.complete_time = time;

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

  if (parts) {
    updateFields.parts = parts;
  }

  if (travel) {
    updateFields.travel = travel;
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
