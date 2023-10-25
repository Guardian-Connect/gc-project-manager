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
  sendEmailTickets,
  getEodTicketing,
  closeInstallTicket,
  closeStaticTicket,
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
    grades11,
    disp11,
    model11,
    grades12,
    disp12,
    model12,
    grades13,
    disp13,
    model13,
    grades14,
    disp14,
    model14,
    grades15,
    disp15,
    model15,
    grades16,
    disp16,
    model16,
    grades17,
    disp17,
    model17,
    grades18,
    disp18,
    model18,
    grades19,
    disp19,
    model19,
    grades20,
    disp20,
    model20,
    grades21,
    disp21,
    model21,
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
    gcdStatus,
    warr_gvr_id,
  } = req.body;
  console.log(gvr_id, "pre run");
  const updateFieldsInfo = {};
  const updateFieldsSerials = {};
  const updateFieldsModels = {};
  const updateFieldsGrades = {};
  let id = parseInt(thisGuy);

  if (warr_gvr_id) {
    let thisGuyTwo = parseInt(warr_gvr_id);
    console.log(thisGuyTwo, "this fuckin guy");
    updateFieldsInfo.warr_gvr_id = thisGuyTwo;
  }

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

  if (gcdStatus) {
    updateFieldsInfo.dashboard_status = gcdStatus;
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
    console.log(gcdStatus);
    let split2 = activation_date.split("T");
    let activation_date_final = split2[0].toString();
    if (gcdStatus) {
      updateFieldsInfo.dashboard_status = gcdStatus;
    } else {
      console.log("setting active");
      updateFieldsInfo.dashboard_status = "IS360 Only";
    }
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
  if (disp11) {
    updateFieldsSerials.disp11 = disp11;
  }
  if (grades11) {
    updateFieldsGrades.grades11 = grades11;
  }
  if (model11) {
    updateFieldsModels.model11 = model11;
  }
  if (disp12) {
    updateFieldsSerials.disp12 = disp12;
  }
  if (grades12) {
    updateFieldsGrades.grades12 = grades12;
  }
  if (model12) {
    updateFieldsModels.model12 = model12;
  }
  if (disp13) {
    updateFieldsSerials.disp13 = disp13;
  }
  if (grades13) {
    updateFieldsGrades.grades13 = grades13;
  }
  if (model13) {
    updateFieldsModels.model13 = model13;
  }
  if (disp14) {
    updateFieldsSerials.disp14 = disp14;
  }
  if (grades14) {
    updateFieldsGrades.grades14 = grades14;
  }
  if (model14) {
    updateFieldsModels.model14 = model14;
  }
  if (disp15) {
    updateFieldsSerials.disp15 = disp15;
  }
  if (grades15) {
    updateFieldsGrades.grades15 = grades15;
  }
  if (model15) {
    updateFieldsModels.model15 = model15;
  }
  if (disp16) {
    updateFieldsSerials.disp16 = disp16;
  }
  if (grades16) {
    updateFieldsGrades.grades16 = grades16;
  }
  if (model16) {
    updateFieldsModels.model16 = model16;
  }
  if (disp17) {
    updateFieldsSerials.disp17 = disp17;
  }
  if (grades17) {
    updateFieldsGrades.grades17 = grades17;
  }
  if (model17) {
    updateFieldsModels.model17 = model17;
  }
  if (disp18) {
    updateFieldsSerials.disp18 = disp18;
  }
  if (grades18) {
    updateFieldsGrades.grades18 = grades18;
  }
  if (model18) {
    updateFieldsModels.model18 = model18;
  }
  if (disp19) {
    updateFieldsSerials.disp19 = disp19;
  }
  if (grades19) {
    updateFieldsGrades.grades19 = grades19;
  }
  if (model19) {
    updateFieldsModels.model19 = model19;
  }
  if (disp20) {
    updateFieldsSerials.disp20 = disp20;
  }
  if (grades20) {
    updateFieldsGrades.grades20 = grades20;
  }
  if (model20) {
    updateFieldsModels.model20 = model20;
  }
  if (disp21) {
    updateFieldsSerials.disp21 = disp21;
  }
  if (grades21) {
    updateFieldsGrades.grades21 = grades21;
  }
  if (model21) {
    updateFieldsModels.model21 = model21;
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
  if (contractStatus === "2-MONITORING") {
    closeInstallTicket(notes, gvr_id);
  }

  if (contractStatus === "3-STATIC") {
    closeStaticTicket(notes, gvr_id);
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
    updateFields.part_desc = travel;
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

updateRouter.get("/sendemail", async (req, res, next) => {
  try {
    const email = await sendEmailTickets();
    console.log(email);
    res.send(email);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = updateRouter;
