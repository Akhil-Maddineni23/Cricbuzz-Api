import React from 'react';

function Data1(props) {
  return (
    <div className="box1">
        <img
          src={props.info.image}
          alt="Image Not Found"
        />

        <table className="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Internationl Team</th>
              <td>{props.info.intlTeam}</td>
            </tr>
            <tr>
              <th scope="row">Born</th>
              <td>{props.info.DoB}</td>
            </tr>
            <tr>
              <th scope="row">Birth Place</th>
              <td>{props.info.birthPlace}</td>
            </tr>
            <tr>
              <th scope="row">Role</th>
              <td>{props.info.role}</td>
            </tr>
            <tr>
              <th scope="row">Bat Style</th>
              <td>{props.info.bat}</td>
            </tr>
            <tr>
              <th scope="row">Bowl Style</th>
              <td>{props.info.bowl}</td>
            </tr>
            <tr>
              <th scope="row">Played For</th>
              <td>{props.info.teams}</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default Data1;