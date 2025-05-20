"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DashBoardComponent = () => {
    const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
    const usernameValue = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];
    const userhashValue = document.cookie.split("; ").find((row) => row.startsWith("usernamehash="))?.split("=")[1];
    const passwordValue = document.cookie.split("; ").find((row) => row.startsWith("passwordhash="))?.split("=")[1];
    return (<div className="DashBoard">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">the cookie that has been read "token" is "{cookieValue}"</h1>
            <h2 className="display-4 text-center">the cookie that has been read "username" is "{usernameValue}"</h2>
            <h3 className="display-4 text-center">the cookie that has been read "usernamehash" is "{userhashValue}"</h3>
            <h4 className="display-4 text-center">the cookie that has been read "passwordhash" is "{passwordValue}"</h4>
            <h4>the cookies will authenticate you for a short time. when this database is linked to the frontend, we can then see if you are a moderator or a analyst</h4>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = DashBoardComponent;
//# sourceMappingURL=DashBoard.js.map