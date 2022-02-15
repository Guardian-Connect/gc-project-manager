import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/users/disp");
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
