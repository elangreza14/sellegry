export const initialStateFetch = {
  status: "idle",
  error: null,
  data: [],
};

export const FetchingReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...initialState, status: "fetching" };
    case "FETCHED":
      return { ...initialState, status: "fetched", data: action.payload };
    case "FETCH_ERROR":
      return { ...initialState, status: "error", error: action.payload };
    default:
      return state;
  }
};
