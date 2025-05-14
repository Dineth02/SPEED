import React from "react";

const DashBoardComponent = () => {
  const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];
  const passwordValue = document.cookie.split("; ").find((row) => row.startsWith("password="))?.split("=")[1];
  const autologin = document.cookie.split("; ").find((row) => row.startsWith("autologin="))?.split("=")[1];


  return (
    <div className="DashBoard">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">the cookie that has been read "username" is "{cookieValue}"</h1>
            <h4 className="display-4 text-center">the cookie that has been read "password" is "{passwordValue}"</h4>
            <h4 className="display-4 text-center">since autologin is {autologin}. {autologin ? "we logged you in based on the cookies in your browser" : "you logged in for the first time this session"}</h4>
            <h4>the cookies will authenticate you for a short time. when this database is linked to the frontend, we can then see if you are a moderator or a analyst</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardComponent;