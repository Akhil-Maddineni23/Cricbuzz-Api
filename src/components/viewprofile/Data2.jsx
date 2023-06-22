import React from 'react';

function Data2(props) {
  
  return (
    <div className="box2">
        <p>
          <strong>Batting Career Summary</strong>
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th title="Matches Played">M</th>
              <th title="No of Innings Batted">Inn</th>
              <th title="No of Runs Scored">Runs</th>
              <th title="No of Not Outs">NO</th>
              <th title="Highest Score">HS</th>
              <th title="Batting Average">Avg</th>
              <th title="Batting Strike Rate">SR</th>
              <th title="No of 100s Scored">100</th>
              <th title="No of 200s Scored">200</th>
              <th title="No of 50s Scored">50</th>
              <th title="No of fours hit">4s</th>
              <th title="No of sixes hit">6s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Test</strong>
              </td>
              <td>{props.bat.values[0].values[1]}</td>
              <td>{props.bat.values[1].values[1]}</td>
              <td>{props.bat.values[2].values[1]}</td>
              <td>{props.bat.values[7].values[1]}</td>
              <td>{props.bat.values[4].values[1]}</td>
              <td>{props.bat.values[5].values[1]}</td>
              <td>{props.bat.values[6].values[1]}</td>
              <td>{props.bat.values[12].values[1]}</td>
              <td>{props.bat.values[13].values[1]}</td>
              <td>{props.bat.values[11].values[1]}</td>
              <td>{props.bat.values[8].values[1]}</td>
              <td>{props.bat.values[9].values[1]}</td>
            </tr>
            <tr>
              <td>
                <strong>ODI</strong>
              </td>
              <td>{props.bat.values[0].values[2]}</td>
              <td>{props.bat.values[1].values[2]}</td>
              <td>{props.bat.values[2].values[2]}</td>
              <td>{props.bat.values[7].values[2]}</td>
              <td>{props.bat.values[4].values[2]}</td>
              <td>{props.bat.values[5].values[2]}</td>
              <td>{props.bat.values[6].values[2]}</td>
              <td>{props.bat.values[12].values[2]}</td>
              <td>{props.bat.values[13].values[2]}</td>
              <td>{props.bat.values[11].values[2]}</td>
              <td>{props.bat.values[8].values[2]}</td>
              <td>{props.bat.values[9].values[2]}</td>
            </tr>
            <tr>
              <td>
                <strong>T20I</strong>
              </td>
              <td>{props.bat.values[0].values[3]}</td>
              <td>{props.bat.values[1].values[3]}</td>
              <td>{props.bat.values[2].values[3]}</td>
              <td>{props.bat.values[7].values[3]}</td>
              <td>{props.bat.values[4].values[3]}</td>
              <td>{props.bat.values[5].values[3]}</td>
              <td>{props.bat.values[6].values[3]}</td>
              <td>{props.bat.values[12].values[3]}</td>
              <td>{props.bat.values[13].values[3]}</td>
              <td>{props.bat.values[11].values[3]}</td>
              <td>{props.bat.values[8].values[3]}</td>
              <td>{props.bat.values[9].values[3]}</td>
            </tr>
            <tr>
              <td>
                <strong>IPL</strong>
              </td>
              <td>{props.bat.values[0].values[4]}</td>
              <td>{props.bat.values[1].values[4]}</td>
              <td>{props.bat.values[2].values[4]}</td>
              <td>{props.bat.values[7].values[4]}</td>
              <td>{props.bat.values[4].values[4]}</td>
              <td>{props.bat.values[5].values[4]}</td>
              <td>{props.bat.values[6].values[4]}</td>
              <td>{props.bat.values[12].values[4]}</td>
              <td>{props.bat.values[13].values[4]}</td>
              <td>{props.bat.values[11].values[4]}</td>
              <td>{props.bat.values[8].values[4]}</td>
              <td>{props.bat.values[9].values[4]}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          <strong>Bowling Career Summary</strong>
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th title="Matches Played">M</th>
              <th title="No of Innings Bowled">Inn</th>
              <th title="No of Balls Bowled">B</th>
              <th title="No of Runs Conceded">Runs</th>
              <th title="Wickets">Wkts</th>
              <th title="Best Bowling in Innings">BBI</th>
              <th title="Best Bowling in Match">BBM</th>
              <th title="Economy">Econ</th>
              <th title="Bowling Average">Avg</th>
              <th title="Bowling Strike Rate">SR</th>
              <th title="Five Wickets in an Innings">5W</th>
              <th title="Ten Wickets in an Match">10W</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Test</strong>
              </td>
              <td>{props.bowl.values[0].values[1]}</td>
              <td>{props.bowl.values[1].values[1]}</td>
              <td>{props.bowl.values[2].values[1]}</td>
              <td>{props.bowl.values[3].values[1]}</td>
              <td>{props.bowl.values[5].values[1]}</td>
              <td>{props.bowl.values[9].values[1]}</td>
              <td>{props.bowl.values[10].values[1]}</td>
              <td>{props.bowl.values[7].values[1]}</td>
              <td>{props.bowl.values[6].values[1]}</td>
              <td>{props.bowl.values[8].values[1]}</td>
              <td>{props.bowl.values[12].values[1]}</td>
              <td>{props.bowl.values[13].values[1]}</td>
            </tr>
            <tr>
              <td>
                <strong>ODI</strong>
              </td>
              <td>{props.bowl.values[0].values[2]}</td>
              <td>{props.bowl.values[1].values[2]}</td>
              <td>{props.bowl.values[2].values[2]}</td>
              <td>{props.bowl.values[3].values[2]}</td>
              <td>{props.bowl.values[5].values[2]}</td>
              <td>{props.bowl.values[9].values[2]}</td>
              <td>{props.bowl.values[10].values[2]}</td>
              <td>{props.bowl.values[7].values[2]}</td>
              <td>{props.bowl.values[6].values[2]}</td>
              <td>{props.bowl.values[8].values[2]}</td>
              <td>{props.bowl.values[12].values[2]}</td>
              <td>{props.bowl.values[13].values[2]}</td>
            </tr>
            <tr>
              <td>
                <strong>T20I</strong>
              </td>
              <td>{props.bowl.values[0].values[3]}</td>
              <td>{props.bowl.values[1].values[3]}</td>
              <td>{props.bowl.values[2].values[3]}</td>
              <td>{props.bowl.values[3].values[3]}</td>
              <td>{props.bowl.values[5].values[3]}</td>
              <td>{props.bowl.values[9].values[3]}</td>
              <td>{props.bowl.values[10].values[3]}</td>
              <td>{props.bowl.values[7].values[3]}</td>
              <td>{props.bowl.values[6].values[3]}</td>
              <td>{props.bowl.values[8].values[3]}</td>
              <td>{props.bowl.values[12].values[3]}</td>
              <td>{props.bowl.values[13].values[3]}</td>
            </tr>
            <tr>
              <td>
                <strong>IPL</strong>
              </td>
              <td>{props.bowl.values[0].values[4]}</td>
              <td>{props.bowl.values[1].values[4]}</td>
              <td>{props.bowl.values[2].values[4]}</td>
              <td>{props.bowl.values[3].values[4]}</td>
              <td>{props.bowl.values[5].values[4]}</td>
              <td>{props.bowl.values[9].values[4]}</td>
              <td>{props.bowl.values[10].values[4]}</td>
              <td>{props.bowl.values[7].values[4]}</td>
              <td>{props.bowl.values[6].values[4]}</td>
              <td>{props.bowl.values[8].values[4]}</td>
              <td>{props.bowl.values[12].values[4]}</td>
              <td>{props.bowl.values[13].values[4]}</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Data2;