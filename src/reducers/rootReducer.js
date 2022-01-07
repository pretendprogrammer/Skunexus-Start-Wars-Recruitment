const initialState = {
  headers: [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population",
  ],
  values: [],
  functions: [
    {
      label: "Go to Films",
      callback: (row) => {
        console.log(`redirect to grid with ${row.films.length} Films`);
      },
    },
    {
      label: "Go to Residents",
      callback: (row) => {
        console.log(`redirect to grid with ${row.residents.length} Residents`);
      },
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setValues":
      return { ...state, values: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
