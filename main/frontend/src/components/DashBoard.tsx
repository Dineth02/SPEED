import React from "react";
import { useState } from 'react';
import { GetPaperInfo, Paperinfo } from "./Paperinfo";
import BootstrapClient from "@/components/BootstrapClient";

//assume we have retrive this infomation from the database.
let info: Paperinfo = {};

function ListPapers({ links }: any) {
  const listItems = links.map((item: string, index: number) => {
    info = GetPaperInfo(item);
    return (
      <details className="p-3 text-body-emphasis bg-body-subtle border border-body-subtle rounded-3">
        <summary>({info.title})</summary>
        <div className="card border border-0">
          <div className="card-body">
            <h5>Title: {info.title}</h5>
            <p>DOI: {info.DOI}</p>
            <p>Abstract: {info.abstract}</p>
            <p>Date: {info.issued?.toLocaleDateString()}</p>
            <p>Authours: {info.authors}</p>
            <hr />
            <h4>SE claim</h4>
            <textarea className="p-3 text-body-emphasis bg-body-subtle border border-body-subtle rounded-3"></textarea>
            <h5>support or against</h5>

            <input type="radio" className="btn-check" name={"support" + index} id={"option1" + index} autoComplete="off"></input>
            <label className="btn" htmlFor={"option1" + index}>support</label>

            <input type="radio" className="btn-check" name={"support" + index} id={"option2" + index} autoComplete="off" />
            <label className="btn" htmlFor={"option2" + index}>against</label>

            <h5>evedence type</h5>

            <input type="radio" className="btn-check" name={"strength" + index} id={"option3" + index} autoComplete="off"></input>
            <label className="btn" htmlFor={"option3" + index}>strong</label>

            <input type="radio" className="btn-check" name={"strength" + index} id={"option4" + index} autoComplete="off" />
            <label className="btn" htmlFor={"option4" + index}>weak</label>
            <h5>Comment</h5>
            <textarea className="p-3 text-body-emphasis bg-body-subtle border border-body-subtle rounded-3"></textarea> <br />
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
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
      <BootstrapClient />
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">welcome back {cookieValue}</h1>
            <h2>select the following papers to be checked on</h2>
            <ListPapers links={addresses}></ListPapers>
            <h5>select a bibtext file</h5>
            <input type="file" className="p-3 text-body-emphasis bg-body-subtle border border-body-subtle rounded-3" onChange={async (e) => {
              const [file]: FileList = e.target.files;
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