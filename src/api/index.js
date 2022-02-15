import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/users/disp");
    console.log(data.dispinfo, "back");
    sessionStorage.setItem("dispinf", JSON.stringify(data.dispinfo));
    return data;
  } catch (error) {
    throw error;
  }
}
