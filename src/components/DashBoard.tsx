import React from "react";
import { useState } from 'react';
// Load Citation.js
const { Cite } = require('@citation-js/core');
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')


// Parse input
const addresses = ['10.5281/zenodo.1005176', '10.5281/zenodo.1005176', '10.5281/zenodo.1005176', '10.5281/zenodo.1005176', '10.5281/zenodo.1005176']
let test = new Cite('10.5281/zenodo.1005176')
let result : string = test.format("data")
let obj = JSON.parse(result)[0]
console.log(obj)
let selectedindex = 0

function Phase(index: number,callback: Function)
{
  test = new Cite(addresses[index])
  result = test.format("data")
  obj = JSON.parse(result)[0]
  selectedindex = index + 1
  callback()
}

function List({callback}: any) {
  const listItems = addresses.map((item,index) =>
    <li><button className="button" onClick={()=>Phase(index,callback)}>{index + 1}: {item}</button></li>
  );

  return <ul>{listItems}</ul>;
}



const DashBoardComponent = () => {

  const [submitionview, setsubmitionview] = useState(false);
  const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("username="))?.split("=")[1];
  return (
    <div className="DashBoard">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">welcome back {cookieValue}</h1>
            {!submitionview && <div>
              <h1>select the following papers to be checked on</h1>
              <List callback={()=>setsubmitionview(true)}></List>
              </div>}
            { submitionview && <div>
              <button className="button" onClick={()=>{setsubmitionview(false)}}>back to DashBoard</button>
              <h1>Title: {obj.title}</h1>
              <h1>DOI: {obj.DOI}</h1>
              <h1>URL: {obj.URL}</h1>
              <h1>Abstract: {obj.abstract}</h1>
              <h1>Date: {obj.issued['date-parts'][0]}</h1>
              <h1>SE claim</h1>
              <textarea></textarea>
              <h1>support or against</h1>
              <h1>evedence type</h1>
              <h1>Comment</h1>
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