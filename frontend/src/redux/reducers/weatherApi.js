export const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "WE_ERROR_STATUS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
