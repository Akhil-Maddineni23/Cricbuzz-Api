import React, { useState , useEffect } from "react";
import "./App1.css";
import Data1 from "./components/Data1";
import Data2 from "./components/Data2";

function App1() {

  const [popup,setPop]=useState(false);
  const [onMount , setOnMount] = useState([]);
  const [ info , setInfo] = useState(null);
  const [batStats , setBattingStats] = useState(null);
  const [bowlStats , setBowlingStats] = useState(null);


  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
  }

  const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c33f14dea6msh6d2c742b1d42614p15c195jsn5f78e79a0a62",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

  const url_info = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/576';
  const url_batting = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/576/batting';
  const url_bowling = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/576/bowling';

  async function GetPlayerDetails(){
    const response1 = await fetch(url_info , options);
    const data1 = await response1.json();
    setInfo(data1);

    const response2 = await fetch(url_batting , options);
    const data2 = await response2.json();
    setBattingStats(data2);

    const response3 = await fetch(url_bowling , options);
    const data3 = await response3.json();
    setBowlingStats(data3);
  }

  useEffect(() => {
    GetPlayerDetails();
  } , [onMount])

  return (
    <div>
    <button onClick={handleClickOpen}>Open popup</button>
    <div>
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
    </div>
  </div>
  );
}

export default App1;

