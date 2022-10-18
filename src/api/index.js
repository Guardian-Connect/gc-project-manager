import axios from "axios";
import React from "react";
require("dotenv").config();
const moment = require("moment");
export let projectOne = "MAJ0001";
export let projectTwo = "LIO0002";
export let projectThree = "SOU0008";
export async function getSomething() {
  try {
    const { data } = await axios.get("/api/users/disp");
    sessionStorage.setItem("dispinf", JSON.stringify(data.dispinfo));
    let info = data.dispinfo;
    let disconnected = [];
    let connected = [];
    let pOneCon = 0;
    let pOneDis = 0;
    let pTwoCon = 0;
    let pTwoDis = 0;
    let pThreeCon = 0;
    let pThreeDis = 0;
    info.map((site) => {
      if (site.totaldisp === null) {
        return disconnected.push(site.gvr_id);
      } else {
        return connected.push(site.gvr_id);
      }
    });
    //project one sites
    info.map((site) => {
      if (site.gp_cust === projectOne && site.totaldisp != null) {
        return pOneCon++;
      } else if (site.gp_cust === projectOne && site.totaldisp === null) {
        return pOneDis++;
      }
    });
    //project two sites
    info.map((site) => {
      if (site.gp_cust === projectTwo && site.totaldisp != null) {
        return pTwoCon++;
      } else if (site.gp_cust === projectTwo && site.totaldisp === null) {
        return pTwoDis++;
      }
    });
    //project three sites
    info.map((site) => {
      if (site.gp_cust === projectThree && site.totaldisp != null) {
        return pThreeCon++;
      } else if (site.gp_cust === projectThree && site.totaldisp === null) {
        return pThreeDis++;
      }

      let rows = ["ALL"];
      let columns = ["%"];
      info.map((site) => {
        let gp = site.gp_cust;
        let company = site.cus_name;
        if (!columns.includes(gp)) {
          columns.push(gp);
        }
        if (!rows.includes(company)) {
          rows.push(company);
        }
      });
      // let result = rows.reduce(function (result, field, index) {
      //   result[columns[index]] = field;
      //   return result;
      // }, {});
      let result = rows.map(function (x, i) {
        return { label: x, value: columns[i] };
      });
      sessionStorage.setItem("menuItems", JSON.stringify(result));
    });

    sessionStorage.setItem("render", JSON.stringify("1"));
    sessionStorage.setItem("ponecon", JSON.stringify(pOneCon));
    sessionStorage.setItem("ponedis", JSON.stringify(pOneDis));
    sessionStorage.setItem("pTwoCon", JSON.stringify(pTwoCon));
    sessionStorage.setItem("pTwoDis", JSON.stringify(pTwoDis));
    sessionStorage.setItem("pThreeCon", JSON.stringify(pThreeCon));
    sessionStorage.setItem("pThreeDis", JSON.stringify(pThreeDis));
    sessionStorage.setItem("disconnected", JSON.stringify(disconnected));
    sessionStorage.setItem("connected", JSON.stringify(connected));

    return data;
  } catch (error) {
    throw error;
  }
}
export async function getInfo() {
  try {
    const { data } = await axios.get(`/api/users/disp/notes`);
    let info = data.dispinfo;
    sessionStorage.setItem("dispinfo", JSON.stringify(info));
    return info;
  } catch (error) {
    throw error;
  }
}

export async function getGcTracker() {
  try {
    const { data } = await axios.get(`/api/users/gctracker`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllInbound() {
  try {
    const { data } = await axios.get(`/api/users/allinbound`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInfoInstalls() {
  try {
    const { data } = await axios.get(`/api/users/disp/open`);
    // let info = data.dispinfo;
    sessionStorage.setItem("dispinfo", JSON.stringify(data));
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
    sessionStorage.setItem("mockData", JSON.stringify(data.report));
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
  contract,
  cus_email1,
  cus_email2,
  rrs
) {
  try {
    const { data } = await axios.post("/api/users/allsites", {
      gvr_id,
      gp_cust,
      cus_name,
      site_address,
      contract,
      cus_email1,
      cus_email2,
      rrs,
    });
    return data;
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
    const { data } = await axios.post("/api/users/createdisp", {
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
  gp
) {
  try {
    const { data } = await axios.post("/api/users/inbound", {
      sb,
      gvr_id,
      notes,
      name,
      number,
      issue,
      gp,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateDisp(
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
  notes
) {
  try {
    const { disp } = await axios.post("api/users/update", {
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
    });
    return disp;
  } catch (error) {
    console.log(error);
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
  notes,
  sb,
  warranty_status,
  atl_po,
  status
) {
  try {
    const { tracker } = await axios.post("api/users/update/tracker", {
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
    });
    return tracker;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateAlertTicket(
  id,
  majorsrrs,
  parkers,
  others,
  confirmation,
  sr,
  gpticket,
  fp,
  gc,
  site,
  gvr
) {
  try {
    const { tracker } = await axios.post("api/users/update/ticketing", {
      id,
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
    const { data } = await axios.get(`/api/users/ticketing`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSpecificData(gp) {
  try {
    const { data } = await axios.get(`/api/users/records/${gp}`);
    sessionStorage.setItem("specinfo", JSON.stringify(data.dispinfo));
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
    sessionStorage.setItem("specinfo", JSON.stringify(data.dispinfo));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addTicket(
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
) {
  try {
    console.log("api index firing, gcticket");
    const { data } = await axios.post("/api/users/gcticket", {
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
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    console.log(username, password);
    const { data } = await axios.post("/api/users/login", {
      username,
      password,
    });
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", data.user.username);
    console.log(data);
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
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export function handleDate(d) {
  // console.log(d);
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
  // console.log(date);
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
