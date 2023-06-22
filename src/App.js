import React, { useState, useEffect} from "react";
import "./App.css";
import DropDown from "./components/DropDown";
import Profile from "./components/Profile";
import ViewProfile from "./components/viewprofile/ViewProfile";

function App() {

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ff1e34c87bmshdd968f5347fe651p148010jsn529c80b2735d",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  
  //const isMounted = useRef(false);
  const [teamsList, setTeamsList] = useState([]);
  const [team , setTeam] = useState({
    teamId : "",
    playerDetails : []
  });
  const [popup,setPop]=useState(false);
  const [ info , setInfo] = useState(null);
  const [batStats , setBattingStats] = useState(null);
  const [bowlStats , setBowlingStats] = useState(null);

  const handleClickOpen=()=>{
    setPop(!popup)
  }

  const closePopup=()=>{
      setPop(false)
  }

  useEffect(() => {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international";
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeamsList(data.list.slice(1, 13));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function GetTeamData(teamId){
    try{
      console.log("Fetching Team Players of TeamId = " , teamId);
      const url = `https://cricbuzz-cricket.p.rapidapi.com/teams/v1/${teamId}/players`;
      const response = await fetch(url, options);
      const data = await response.json();
      const players = await data.player.filter((value) => {
        return Object.keys(value).length > 2;
      });

      for(let i =0; i<3 ; i++){
        
        try{
          let url = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${players[i].imageId}/i.jpg`;
          const response = await fetch(url , options);
          const img = await response.blob();
          const imgUrl = URL.createObjectURL(img);

          players[i]['imageUrl'] = imgUrl;
          const data = players[i];
          setTeam((prev) => ({
            ...prev,
            playerDetails : [...prev.playerDetails , data]
          }))
        }
        catch(err){
          console.log("Error while Fetching Player Photo" , err);
        }   
      }
    }
    catch(err){
      console.log("Error while Fetching Team Players:" , err);
    }  
  }

  const handleSelect = (e) => {
    console.log("Team Id = ", e);
    setTeam(() => ({
      teamId : e,
      playerDetails : []
    }))
    GetTeamData(e);
  };

  async function GetPlayerProfile(playerId){
    const url_info = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}`;
    const url_batting = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}/batting`;
    const url_bowling = `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${playerId}/bowling`;

    try{
      const response1 = await fetch(url_info , options);
      const data1 = await response1.json();
      setInfo(data1);
    }catch(err){
      console.log("Error while fetching Player Info = ",err);
    }
    
    try{
      const response2 = await fetch(url_batting , options);
      const data2 = await response2.json();
      setBattingStats(data2);
    }catch(err){
      console.log("Error while Fetching Player Bat Stats = ", err);
    }

    try{
      const response3 = await fetch(url_bowling , options);
      const data3 = await response3.json();
      setBowlingStats(data3);
    }catch(err){
      console.log("Error while Fetching player Bowl Stats = ", err);
    }
  }

  const handleViewMore = (playerId) => {
    console.log("View More clicked: Player Id = ", playerId);
    GetPlayerProfile(playerId);
    handleClickOpen();
  }

  return (
    <div className="App">
      <div className="map">
       <DropDown
          teamNames={teamsList}
          itemName="Team Names"
          onSelect={handleSelect}
        />
        <div className="container">
        {
          team.playerDetails.length>0 ? <Profile team = {team.playerDetails} viewMore = {handleViewMore} /> : <p>Select Any Team Name</p>
        }
        </div>

        <div>
          {
            popup ? 
            <ViewProfile 
              info = {info} 
              batStats = {batStats} 
              bowlStats = {bowlStats}
              closePopup = {closePopup} 
            />:<p></p>
          }
        </div>
      </div>   
    </div>
  );
}
export default App;

/*
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


