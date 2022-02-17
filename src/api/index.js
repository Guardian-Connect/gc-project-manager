import axios from "axios";

export async function getSomething() {
  try {
    console.log("starting");
    const { data } = await axios.get("/api/users/disp");
    sessionStorage.setItem("dispinf", JSON.stringify(data.dispinfo));
    let info = data.dispinfo;
    let disconnected = [];
    let connected = [];

    info.map((site) => {
      if (site.totaldisp === null) {
        console.log("running now");
        return disconnected.push(site.gvrid);
      } else {
        return connected.push(site.gvrid);
      }
    });
    sessionStorage.setItem("disconnected", JSON.stringify(disconnected));
    sessionStorage.setItem("connected", JSON.stringify(connected));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInfo(gp) {
  try {
    console.log(gp);
    const { data } = await axios.get(`/api/users/disp/${gp}`);
    console.log(data);
    let info = data.dispinfo;
    let disconnected = [];
    let connected = [];

    info.map((site) => {
      if (site.totaldisp === null && site.gp === gp) {
        return disconnected.push(site.gvrid);
      } else if (site.totaldisp != null && site.gp === gp) {
        return connected.push(site.gvrid);
      }
    });

    sessionStorage.setItem("site", JSON.stringify("12345"));
    sessionStorage.setItem("custinfo", JSON.stringify(info));
    sessionStorage.setItem("sitedisc", JSON.stringify(disconnected));
    sessionStorage.setItem("siteconnected", JSON.stringify(connected));
  } catch (error) {
    throw error;
  }
}
