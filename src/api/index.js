import axios from "axios";
require("dotenv").config();
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
        console.log("running now");
        return disconnected.push(site.gvrid);
      } else {
        return connected.push(site.gvrid);
      }
    });
    //project one sites
    info.map((site) => {
      if (site.gp === projectOne && site.totaldisp != null) {
        return pOneCon++;
      } else if (site.gp === projectOne && site.totaldisp === null) {
        return pOneDis++;
      }
    });
    //project two sites
    info.map((site) => {
      if (site.gp === projectTwo && site.totaldisp != null) {
        return pTwoCon++;
      } else if (site.gp === projectTwo && site.totaldisp === null) {
        return pTwoDis++;
      }
    });
    //project three sites
    info.map((site) => {
      if (site.gp === projectThree && site.totaldisp != null) {
        return pThreeCon++;
      } else if (site.gp === projectThree && site.totaldisp === null) {
        return pThreeDis++;
      }
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
    console.log(info);
    sessionStorage.setItem("dispinfo", JSON.stringify(info));
    return info;
  } catch (error) {
    throw error;
  }
}
// export async function getInfo(gp) {
//   try {
//     console.log(gp);
//     const { data } = await axios.get(`/api/users/disp/${gp}`);
//     console.log(data);
//     let info = data.dispinfo;
//     let disconnected = [];
//     let connected = [];

//     info.map((site) => {
//       if (site.totaldisp === null && site.gp === gp) {
//         return disconnected.push(site.gvrid);
//       } else if (site.totaldisp != null && site.gp === gp) {
//         return connected.push(site.gvrid);
//       }
//     });

//     sessionStorage.setItem("site", JSON.stringify("12345"));
//     sessionStorage.setItem("custinfo", JSON.stringify(info));
//     sessionStorage.setItem("sitedisc", JSON.stringify(disconnected));
//     sessionStorage.setItem("siteconnected", JSON.stringify(connected));
//   } catch (error) {
//     throw error;
//   }
// }
