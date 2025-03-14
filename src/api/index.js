import axios from "axios";
import React from "react";
require("dotenv").config();
const moment = require("moment");
export let projectOne = "MAJ0001";
export let projectTwo = "LIO0002";
export let projectThree = "SOU0008";

// export async function getTicketingSearchGp(id) {
//   console.log("/api/index/GP");
//   try {
//     const { data } = await axios.post("/api/display/report", {
//       id,
//     });
//     console.log("data", data);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function createTroubledDisp(id) {
  try {
    const { data } = await axios.get(`/api/display/troubled/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getEmailCust() {
  try {
    const { data } = await axios.get(`/api/display/customeremail`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTicketingSearchGp(id) {
  try {
    const { data } = await axios.get(`/api/display/searchgp/${id}`);
    sessionStorage.setItem("SearchResult", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTicketingSearchGvr(id) {
  try {
    const { data } = await axios.get(`/api/display/searchgvr/${id}`);
    sessionStorage.setItem("SearchResult", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByGvrId(id) {
  try {
    const { data } = await axios.get(`/api/display/dispgvr/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByAddress(id) {
  try {
    const { data } = await axios.get(`/api/display/addressgvr/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByGvrIdTracker(id) {
  try {
    const { data } = await axios.get(`/api/display/trackergvrid/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByAddressTracker(id) {
  try {
    const { data } = await axios.get(`/api/display/trackeraddress/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByGvrIdTicketing(id) {
  try {
    const { data } = await axios.get(`/api/display/ticketinggvrid/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByAddressTroubled(id) {
  try {
    const { data } = await axios.get(`/api/display/addresstroubled/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByGvrIdTroubled(id) {
  try {
    const { data } = await axios.get(`/api/display/troubledgvr/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByAddressTicketing(id) {
  try {
    const { data } = await axios.get(`/api/display/ticketingaddress/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomething(pg) {
  try {
    // const id = "1";
    let id = pg.toString();
    console.log(typeof id, "page id", id);

    const { data } = await axios.get(`/api/display/disp?page=${id}&limit=100`);
    console.log(data, "all data");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRrsMatrix() {
  try {
    const { data } = await axios.get("/api/display/rrs");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllManagers() {
  try {
    const { data } = await axios.get("/api/display/managers");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInfo() {
  try {
    const { data } = await axios.get(`/api/users/disp/notes`);
    let info = data.dispinfo;
    return info;
  } catch (error) {
    throw error;
  }
}

export async function sendEmailTickets() {
  try {
    const { data } = await axios.get(`/api/update/sendemail`);

    return data;
  } catch (error) {
    throw error;
  }
}

// export async function getBfr() {
//   try {
//     const { data } = await axios.get(`/api/display/bfr`);
//     let info = data.bfrReport;
//     console.log(info, "BFR");
//     sessionStorage.setItem("bfr", JSON.stringify(info));
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

export async function getGcTracker() {
  try {
    const { data } = await axios.get(`/api/display/gctracker`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllInbound() {
  try {
    const { data } = await axios.get(`/api/display/allinbound`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByGvrIdInbound(id) {
  try {
    const { data } = await axios.get(`/api/display/inboundgvrid/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllByAddressInbound(id) {
  try {
    const { data } = await axios.get(`/api/display/inboundaddress/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInfoInstalls() {
  try {
    const { data } = await axios.get(`/api/users/disp/open`);
    // let info = data.dispinfo;
    // sessionStorage.setItem("dispinfo", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getReportData(start, end, gp) {
  try {
    const { data } = await axios.post("/api/users/report", {
      start,
      end,
      gp,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addSite(
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
) {
  try {
    const { data } = await axios.post("/api/dbpost/allsites", {
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
    });
    let string;
    let response = Object.values(data.allsites);
    response.forEach(function (e) {
      string = e.toString();
    });
    return string;
  } catch (error) {
    throw error;
  }
}

export async function createDisp(
  gvr_id,
  gp_cust,
  cus_name,
  site_address,
  contract
) {
  try {
    const { data } = await axios.post("/api/dbpost/createdisp", {
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createInbound(
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
  user
) {
  try {
    const { data } = await axios.post("/api/dbpost/inbound", {
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
      user,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateDisp(
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
  jc,
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
  warr_gvr_id
) {
  try {
    const { disp } = await axios.post("api/update", {
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
      jc,
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
    });
    return disp;
  } catch (error) {
    throw error;
  }
}

export async function updateTicket(
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
  email
) {
  try {
    const { tracker } = await axios.post("api/update/tracker", {
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
      email,
    });
    return tracker;
  } catch (error) {
    throw error;
  }
}

export async function updateAlertTicket(
  id,
  asc,
  confirmation,
  sr,
  gpticket,
  fp,
  gc,
  site,
  gvr
) {
  try {
    const { tracker } = await axios.post("api/update/ticketing", {
      id,
      asc,
      confirmation,
      sr,
      gpticket,
      fp,
      gc,
      site,
      gvr,
    });
    return tracker;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateTroubledDispensers(
  id,
  firstDate,
  secondDate,
  firstContact,
  secondContact,
  notes,
  status,
  resoDate
) {
  try {
    const { tracker } = await axios.post("api/update/troubled", {
      id,
      firstDate,
      secondDate,
      firstContact,
      secondContact,
      notes,
      status,
      resoDate,
    });
    return tracker;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addEmail(
  cust_gp,
  cus_name,
  rrs,
  cus_email1,
  cus_email2,
  cus_email3,
  cus_email4,
  cus_email5,
  cus_email6
) {
  try {
    const { data } = await axios.post("/api/users/custemail", {
      cust_gp,
      cus_name,
      rrs,
      cus_email1,
      cus_email2,
      cus_email3,
      cus_email4,
      cus_email5,
      cus_email6,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTicketing() {
  try {
    const { data } = await axios.get(`/api/display/ticketing`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTroubled() {
  try {
    const { data } = await axios.get(`/api/display/troubleds`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSpecificData(gp) {
  try {
    const { data } = await axios.get(`/api/users/records/${gp}`);
    // sessionStorage.setItem("specinfo", JSON.stringify(data.dispinfo));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAlert(id) {
  try {
    const { data } = await axios.get(`/api/users/delete/ticketing/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTroubled(id) {
  try {
    const { data } = await axios.get(`/api/users/delete/troubled/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getEmail(id) {
  try {
    const { data } = await axios.get(`/api/users/email/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTracker(id) {
  try {
    const { data } = await axios.get(`/api/users/tracker/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getGp(id) {
  try {
    const { data } = await axios.get(`/api/users/gp/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCompleteData(gp) {
  try {
    const { data } = await axios.get(`/api/users/complete/${gp}`);
    // sessionStorage.setItem("specinfo", JSON.stringify(data.dispinfo));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addTicket(
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
) {
  try {
    console.log("api firing");
    const { data } = await axios.post("/api/dbpost/gcticket", {
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
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSitesGvrid(id) {
  try {
    const { data } = await axios.get(`/api/display/getsitesgvr/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSitesAddress(id) {
  try {
    const { data } = await axios.get(`/api/display/getsitesaddress/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", data.user.username);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post("/api/users/register", {
      username,
      password,
    });
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", data.user.username);
    // sessionStorage.setItem("id", data.user.id);
    return data;
  } catch (error) {
    throw error;
  }
}

export function handleDate(d) {
  if (d === null) {
    let date = "";
    return date;
  } else {
    let date = moment.utc(d).format("yyyy-MM-DD");
    return date;
  }
}

export function handleDateTwo(d) {
  let date = moment.utc(d).format("MM/DD/yyyy");
  return date;
}

export function isLater(date1, site) {
  let d = handleDate(date1);
  let today = moment.utc().format("MM/DD/yyyy");
  if (moment.utc(d).isAfter(today)) {
    return <div>Warranty Date - {handleDate(site.warranty)}</div>;
  } else {
    return (
      <div className="yellow">
        Warranty Expired - {handleDate(site.warranty)}
      </div>
    );
  }
}

export function findSb(sb) {
  if (sb === "CUS") {
    return "Customer";
  } else if (sb === "ATL") {
    return "Atlanta";
  } else if (sb === "BIR") {
    return "Birmingham";
  } else if (sb === "CHA") {
    return "Charlotte";
  } else if (sb === "COL") {
    return "Columbia";
  } else if (sb === "FTL") {
    return "Fort Lauderdale";
  } else if (sb === "FTM") {
    return "Fort Myers";
  } else if (sb === "GRE") {
    return "Greensboro";
  } else if (sb === "GCS") {
    return "Guardian Connect";
  } else if (sb === "GUL") {
    return "Gulf/Pensacola";
  } else if (sb === "JAX") {
    return "Jacksonville";
  } else if (sb === "LAF") {
    return "Lafayette";
  } else if (sb === "NAS") {
    return "Nashville";
  } else if (sb === "RAL") {
    return "Raleigh";
  } else if (sb === "SAN") {
    return "Sanford";
  } else if (sb === "SAV") {
    return "Savannah";
  } else if (sb === "KNX") {
    return "Knoxville";
  } else if (sb === "TAL") {
    return "Tallahassee";
  } else if (sb === "TAM") {
    return "Tampa";
  } else if (sb === "PES") {
    return "Petro Solutions";
  } else if (sb === "SUB") {
    return "Sub-Contractor (Other)";
  } else if (sb === "APEC") {
    return "APEC";
  } else if (sb === "PARKERS") {
    return "Parker's";
  } else if (sb === "CIK") {
    return "Circle K";
  } else if (sb === "CKPOC") {
    return "Circle K - Proof of Concept Sites";
  } else {
    return "Unknown";
  }
}

export function phoneNumber(e) {
  let str = e;
  let phonenumber =
    "(" +
    str[0] +
    str[1] +
    str[2] +
    ")" +
    " " +
    str[3] +
    str[4] +
    str[5] +
    "-" +
    str[6] +
    str[7] +
    str[8] +
    str[9];
  return phonenumber;
}
