import React, { useState , useEffect } from "react";
import "./viewProfile.css";
import Data1 from "./Data1";
import Data2 from "./Data2";

function ViewProfile(props){
  return (
    <div className="main">
    <h1 onClick = {props.closePopup}><strong>X</strong></h1>

      <div className="myDiv">
        { props.info ? <Data1 info = {props.info}/> : <p></p>}
        { props.batStats && props.bowlStats ? <Data2 bat = {props.batStats} bowl = {props.bowlStats}/> : <p></p>}
      </div> 
    </div>
  );
}

export default ViewProfile;

/*
<div>
<button onClick={handleClickOpen}>Open popup</button>


{popup ? (
        <div className="main">
        <h1 onClick={closePopup}><strong>X</strong></h1>
            <div className="myDiv">
              { info ? <Data1 info = {info}/> : <p></p>}
              { batStats && bowlStats ? <Data2 bat = {batStats} bowl = {bowlStats}/> : <p></p>}
            </div> 
          </div>
      ) : (
        ""
      )}

      
*/