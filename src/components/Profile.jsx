import React from "react";

function Profile(props) {
  return (
    <div className="print">
      {
        props.team.map((player, index) => {
            return (
            <div className="secondary" key = {Number(player.id)}>
                <img src={player.imageUrl} alt="ImageNotFound" />
                <p>{player.name}</p>
                <p>{player.battingStyle}</p>
                <p>{player.bowlingStyle}</p>
                <br></br>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  value = {Number(player.id)} 
                  onClick={e => props.viewMore(e.target.value)}
                >View More</button>
            </div>
            );
        })
      }
    </div>
  );
}

export default Profile;
