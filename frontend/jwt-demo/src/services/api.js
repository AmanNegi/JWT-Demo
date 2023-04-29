import axios from "axios";
import moment from "moment";
const API_URL = "http://localhost:3000";

export async function testBackend() {
  return await axios.get(API_URL + "/");
}

export async function auth(email, password) {
  const res = await axios.post(API_URL + "/auth", {
    email: email,
    password: password,
  });
  console.log(res);
  return res;
}

export async function profile(token) {
  console.log("TOKEN : " + token);
  try {
    const res = await axios.post(API_URL + "/profile", {
      token: token,
    });

    if (res.status === 200) {
      const expireAt = new Date(res.data.exp * 1000);
      const data = moment(expireAt).format();
      return { data: `Expires in ${data}` };
    }

    console.log(res);
    return res.data;
  } catch (e) {
    console.log("An error occured", e);
    return { data: e.response.data };
  }
}
