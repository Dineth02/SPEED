import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Credentals, DefaultCreds } from "./Credentals";
import { pbkdf2, createHash } from "crypto"

const LoginpageComponent = () => {
  const navigate = useRouter();

  const cred = DefaultCreds;
  let username = ''
  let password = ''

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
    const hash = createHash('sha512');
    hash.update(username,'utf-8'); 
    hash.end();
    hash.digest().toString('base64');
    //better way to do it is have the salt not base on the username (or even the hash of a username)
    pbkdf2(password,hash.digest().toString('base64'), 100000, 64, 'sha512', (err, derivedKey) => {
      if (err) throw err;
      console.log(hash.digest().toString('base64'));
      console.log(derivedKey.toString('hex')); 
      cred.username = username
      cred.hashedpassword = derivedKey.toString('hex')

      console.log(cred);
    //cred will be sent to the backend 
    document.cookie = "token=exampletoken;samesite=strict;"
    document.cookie = "username="+username+";samesite=strict;"
    document.cookie = "usernamehash="+hash.digest().toString('base64')+";samesite=strict;"
    document.cookie = "passwordhash="+cred.hashedpassword+";samesite=strict;"
    navigate.push("/dashboard")
    });
  };

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