"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const Credentals_1 = require("./Credentals");
const crypto_1 = require("crypto");
const LoginpageComponent = () => {
    const navigate = (0, navigation_1.useRouter)();
    const cred = Credentals_1.DefaultCreds;
    let username = '';
    let password = '';
    const onChange = (event) => {
        if (event.target.name === "username") {
            username = event.target.value;
        }
        if (event.target.name === "password") {
            password = event.target.value;
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const hash = (0, crypto_1.createHash)('sha512');
        hash.update(username, 'utf-8');
        hash.end();
        hash.digest().toString('base64');
        (0, crypto_1.pbkdf2)(password, hash.digest().toString('base64'), 100000, 64, 'sha512', (err, derivedKey) => {
            if (err)
                throw err;
            console.log(hash.digest().toString('base64'));
            console.log(derivedKey.toString('hex'));
            cred.username = username;
            cred.hashedpassword = derivedKey.toString('hex');
            console.log(cred);
            document.cookie = "token=exampletoken;samesite=strict;";
            document.cookie = "username=" + username + ";samesite=strict;";
            document.cookie = "usernamehash=" + hash.digest().toString('base64') + ";samesite=strict;";
            document.cookie = "passwordhash=" + cred.hashedpassword + ";samesite=strict;";
            navigate.push("/dashboard");
        });
    };
    return (<div className="Login">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Login</h1>
            <form noValidate onSubmit={onSubmit}>
              <h4>Username</h4>
              <div className="form-group">
                <input type="text" placeholder="Username" name="username" className="form-control" onChange={onChange}/>
              </div>
              <br />
              <h4>Password</h4>
              <div className="form-group">
                <input type="text" placeholder="Password" name="password" className="form-control" onChange={onChange}/>
              </div>
              <button type="submit" className="btn btn-outline-warning btn-block mt-4 mb-4 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = LoginpageComponent;
//# sourceMappingURL=Loginpage.js.map