import { useSelector } from "react-redux";
import "./Grid.css";

function Grid({ data: { header, values = [], actions = [] } }) {
  const appState = useSelector((state) => state);

  return (
    <table className="gridTable">
      <thead>
        <tr>
          {appState.headers.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {appState.values.map((row) => (
          <tr key={row.name + new Date().getTime()}>
            {appState.headers.map((colName) => (
              <td key={colName + row.name}>{row[colName]}</td>
            ))}
            {!!actions.length && (
              <td className="gridActions">
                {actions.map(({ label, action }) => (
                  <button onClick={() => action(row)}>{label}</button>
                ))}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
