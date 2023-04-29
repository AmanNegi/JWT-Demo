import jwtDecode from "jwt-decode";

import MyButton from "../../components/Button";
import InputField from "../../components/InputField";
import { useState } from "react";
import { auth, profile, testBackend } from "../../services/api";
import OutputView from "./components/Ouput";

// eslint-disable-next-line react/prop-types
function Home() {
  const [outputHeading, setOutputHeading] = useState("Output");
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    token: "",
  });

  return (
    <main className="w-[100%] h-screen box-border flex flex-row ">
      <div className="w-1/2 p-10 border-r-2 dark:border-opacity-30 border-gray-300">
        <div className="flex flex-row items-center pb-4 border-b-2 dark:border-opacity-30 border-gray-300">
          <h1 className="text-4xl font-bold border-dashed mr-5 text-black dark:text-white">
            JWT Demo
          </h1>
          <MyButton name="Test Backend" onClick={execTestBackend} />
        </div>
        <div className="pb-5"></div>
        <InputField
          name="Email"
          id="email"
          value={formData.email}
          onChange={handleFieldChange}
        />
        <InputField
          name="Password"
          id="password"
          value={formData.password}
          onChange={handleFieldChange}
        />
        <MyButton additionalClass="mb-5" name="Login" onClick={execLogin} />

        <InputField
          name="Access Token"
          id="accessToken"
          value={formData.token}
          onChange={handleFieldChange}
        />
        <div className="flex flex-row gap-4">
          <MyButton name="Decode Token" onClick={execDecodeToken} />
          <MyButton name="Validate Token" onClick={execValidateToken} />
        </div>
      </div>
      <OutputView
        outputHeading={outputHeading}
        message={message}
      />
    </main>
  );

  function handleFieldChange(value) {
    setFormData({
      ...formData,
      [value.target.id]: value.target.value,
    });
  }

  async function execTestBackend() {
    try {
      const res = await testBackend();
      setOutputHeading("Output from Backend");
      console.log(res);
      setMessage(res.data);
      return;
    } catch (ex) {
      setOutputHeading("No output");
      setMessage("Backend not working!");
    }
  }

  async function execLogin() {
    const res = await auth(formData.email, formData.password);
    console.log(res);
    setMessage(res.data);
    setOutputHeading("Output from Backend");
    setFormData({ ...formData, token: res.data.accessToken });
  }

  function execDecodeToken() {
    try {
      const res = jwtDecode(formData.token);
      console.log(res);
      setMessage(res);
      setOutputHeading("Output from Frontend");
    } catch (ex) {
      setOutputHeading("Output from Frontend");
      setMessage("Invalid JWT Token");
    }
  }

  async function execValidateToken() {
    const res = await profile(formData.token);
    console.log(res);
    setMessage(res.data);
    setOutputHeading("Output from Backend");
  }
}
export default Home;
