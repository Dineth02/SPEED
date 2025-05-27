import React from "react";
import { useState } from 'react';
import { GetPaperInfo, Paperinfo } from "./Paperinfo";

//assume we have retrive this infomation from the database.
let info: Paperinfo = {};

function ListPapers({links}: any) {
  const listItems = links.map((item: string) => {
    info = GetPaperInfo(item);
    return(
    <details>
      <summary>({info.title})</summary>
       <p>Title: {info.title}</p>
              <p>DOI: {info.DOI}</p>
              <p>Abstract: {info.abstract}</p>
              <p>Date: {info.issued?.toLocaleDateString()}</p>
              <p>Authours: {info.authors}</p>
              <p>SE claim</p>
              <textarea></textarea>
              <h1>support or against</h1>
              <input type="radio" name="support" value="support"/> yes <br/>
              <input type="radio" name="support" value="against"/> against <br/>
              <h1>evedence type</h1>
              <input type="radio" name="strength" value="strong"/> strong <br/>
              <input type="radio" name="support" value="weak"/> weak <br/>
              <summary>Comment</summary>
              <textarea></textarea>
              <button className="button">submit</button>
      </details>
    )
  }
  );
  return <div>{listItems}</div>;
}

const DashBoardComponent = () => {

  const [addresses, Setaddresses] = useState(['10.5281/zenodo.1005176']);

  const cookieValue: string | undefined = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];
  return (
    <div className="DashBoard">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">welcome back {cookieValue}</h1>
              <h1>select the following papers to be checked on</h1>
              <ListPapers links = {addresses}></ListPapers>
              <p>select a bibtext file</p>
              <input type="file" onChange={async (e)=>
                {
                  const [file] : FileList = e.target.files;
                  Setaddresses([...addresses, await file.text()]);
                }
              }></input>
              </div>
          </div>
        </div>
      </div>
  );
};

export default DashBoardComponent;