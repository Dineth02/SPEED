import React, { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

const LoginpageComponent = () => {
  const navigate = useRouter();

  let username: string = ''
  let password: string = ''
  let remembered: boolean = false

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "username")
    {
      username = event.target.value
    }
    if(event.target.name === "password")
    {
      password = event.target.value
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.cookie = "username="+username+";samesite=strict;"
    document.cookie = "password="+password+";samesite=strict;"
    document.cookie = "autologin="+remembered+";samesite=strict;"
    navigate.push("/dashboard")
  }

  const cookieValue: string | undefined = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];
  const passwordValue: string | undefined = document.cookie.split("; ").find((row) => row.startsWith("password="))?.split("=")[1];
  if(cookieValue != undefined && passwordValue != undefined)
  {
    remembered = true;
    username = cookieValue;
    password = passwordValue;
    document.cookie = "username="+username+";samesite=strict;"
    document.cookie = "password="+password+";samesite=strict;"
    document.cookie = "autologin="+remembered+";samesite=strict;"
    navigate.push("/dashboard")
  }

  return (
    <div className="Login">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Login</h1>
            <form noValidate onSubmit={onSubmit}>
              <h4>Username</h4>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="form-control"
                  onChange={onChange}
                />
              </div>
              <br/>
              <h4>Password</h4>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginpageComponent;