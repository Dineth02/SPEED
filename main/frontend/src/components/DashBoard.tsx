import React from "react";
import { useState } from 'react';
import { GetPaperInfo, Paperinfo } from "./Paperinfo";

//assume we have retrive this infomation from the database.
const addresses: string[] = ['10.5281/zenodo.1005176', '10.1016/j.jss.2020.110823', '10.1109/TSE.2021.3099532', '10.1145/3395963', '10.1109/MS.2021.3105044', '10.1109/TEM.2022.3216633'];
let info: Paperinfo = {};
let selectedindex: number = 0

function Phase(index: number,callback: Function)
{
  info = GetPaperInfo(addresses[index]);
  selectedindex = index + 1;
  callback();
}

function ListPapers({callback}: any) {
  const listItems = addresses.map((item,index) =>
    <li><button className="button" onClick={()=>Phase(index,callback)}>{index + 1}: {item}</button></li>
  );
  return <ul>{listItems}</ul>;
}

const DashBoardComponent = () => {

  const [submitionview, setsubmitionview] = useState(false);
  const cookieValue: string | undefined = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];
  return (
    <div className="DashBoard">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">welcome back {cookieValue}</h1>
            {!submitionview && <div>
              <h1>select the following papers to be checked on</h1>
              <ListPapers callback={()=>setsubmitionview(true)}></ListPapers>
              </div>}
            { submitionview && <div>
              <button className="button" onClick={()=>{setsubmitionview(false)}}>back to DashBoard</button>
              <h1>Title: {info.title}</h1>
              <h1>DOI: {info.DOI}</h1>
              <h1>Abstract: {info.abstract}</h1>
              <h1>Date: {info.issued?.toLocaleDateString()}</h1>
              <h1>Authours: {info.authors}</h1>
              <h1>SE claim</h1>
              <textarea></textarea>
              <h1>support or against</h1>
              <input type="radio" name="support" value="support"/> yes <br/>
              <input type="radio" name="support" value="against"/> against <br/>
              <h1>evedence type</h1>
              <input type="radio" name="strength" value="strong"/> strong <br/>
              <input type="radio" name="support" value="weak"/> weak <br/>
              <summary>Comment</summary>
              <textarea></textarea>
              <h1>{selectedindex}out of {addresses.length}</h1>
              <button className="button">submit</button>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardComponent;