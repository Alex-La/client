import React, { useState } from "react";

const URL = "https://server-expres.herokuapp.com/auth/login";

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHendler = async (event) => {
    event.preventDefault();

    let body = { ...form };
    body = JSON.stringify(body);
    let headers = {};
    headers["Content-Type"] = "application/json";
    const response = await fetch(URL, { method: "POST", body, headers });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="cont">
      <div className="z-depth-1 grey lighten-4 row wrap">
        <form className="col s12" onSubmit={(e) => submitHendler(e)}>
          <div className="row">
            <div className="col s12"></div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="email"
                name="email"
                id="email"
                onChange={changeHandler}
              />
              <label htmlFor="email">Enter your email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="password"
                name="password"
                id="password"
                onChange={changeHandler}
              />
              <label htmlFor="password">Enter your password</label>
            </div>
            <label style={{ float: "right" }}>
              <a className="pink-text" href="#!">
                <b>Forgot Password?</b>
              </a>
            </label>
          </div>

          <br />
          <center>
            <div className="row">
              <button
                type="submit"
                name="btn_login"
                className="col s12 btn btn-large waves-effect indigo"
              >
                Login
              </button>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};
