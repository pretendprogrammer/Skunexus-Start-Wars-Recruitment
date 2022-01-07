import "./App.css";

import Planets from "../Planets";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/`)
      .then((res) => res.json())
      .then((result) =>
        dispatch({ type: "setValues", payload: result.results })
      );
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets />
    </div>
  );
};

export default App;
