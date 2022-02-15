import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/users/disp");
    sessionStorage.setItem("dispinf", JSON.stringify(data.dispinfo));
    return data;
  } catch (error) {
    throw error;
  }
}
