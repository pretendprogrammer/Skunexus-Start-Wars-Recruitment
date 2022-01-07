import React from "react";
import { useSelector } from "react-redux";

function PlanetRow(props) {
  const appState = useSelector((state) => state);

  return (
    <tbody>
      {appState.values.map((row) => (
        <tr key={row.name + new Date().getTime()}>
          {appState.headers.map((colName) => (
            <td key={colName + row.name}>{row[colName]}</td>
          ))}
          <td className="gridActions">
            {appState.functions.map(({ label, callback }) => (
              <button onClick={() => callback(row)}>{label}</button>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default PlanetRow;
