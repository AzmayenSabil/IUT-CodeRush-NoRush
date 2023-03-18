import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { useAuthStore } from "../../../store/store";
import { passwordValidate } from "../../../helper/validate";
import { verifyPassword } from "../../../helper/helper";

import styles from "../../../styles/Username.module.css";

export default function Login() {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: {
      username: "example123",
      password: "admin@123",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values) => {
      setUsername(values.username);

      let loginPromise = verifyPassword({
        username: values.username,
        password: values.password,
      });

      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/profile");
      });
    },

  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
              />
              <button onClick={togglePasswordVisibility} type="reset">
                {passwordVisible ? "Hide" : "Show"}
              </button>
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{" "}
                <Link className="text-red-500" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
