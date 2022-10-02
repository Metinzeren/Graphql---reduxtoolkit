import { createSlice } from "@reduxjs/toolkit";
import client from "../../apollo";
import { GET_CHARACTERS } from "../../services/queries";

const initialState = {
  characters: [],
  isLoading: false,
  isError: false,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const fetchGetCharacters = () => (dispatch) => {
  dispatch(setLoading(true));
  client
    .query({
      query: GET_CHARACTERS,
    })
    .then((result) => {
      dispatch(setCharacters(result.data.characters.results));
    })
    .catch((error) => {
      dispatch(setError({ error: true }));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const getCharacters = (state) => {
  return state.character;
};

export const { setCharacters, setLoading, setError } = characterSlice.actions;
export default characterSlice.reducer;
