import React,{useState} from "react";

const Login = () => {

  const [auth, setAuth] = useState(false);

  const [account, setAccount] = useState({
    name: "",
    pass: ""
  });

  const LoginTest = () => {
    if (account.name.length > 0 && account.pass.length > 0) {
      setAuth(true);
    } else {
      alert("Sorry, something wrong!!!");
    }
  }

  if (auth) {
    return(<p>Welcome</p>);
  }

  return (
    <div>
      <div className="login-wrapper">
        <div className="login-form">
          <div className="form-group">
            <label>Username</label>
            <br />
            <input
              value={account.name}
              onChange={(e) => {
                setAccount({ ...account, name: e.target.value })
              }}
              className="title-input-field"
              placeholder="Username"
              type="text"
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              value={account.pass}
              onChange={(e) => {
                setAccount({ ...account, pass: e.target.value })
              }}
              className="title-input-field"
              placeholder="Password"
              type="password"
            ></input>
          </div>
          <div>
            <button
              onClick={LoginTest}
              className="button-save-journal">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const Context = () => {
  return {
    auth: true,
    setAuth
  }
}
