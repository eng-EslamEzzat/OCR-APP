import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
  data: {
    id: "",
    surname: "",
    givenName: "",
    sex: "",
    nationality: "",
    dateOfBirth: "",
    dateOfIssue: "",
    dateOfExpiry: ""
  },
  loggerState: ""
};

const recognitionSlice = createSlice({
  name: "recognition",
  initialState,
  reducers: {
    addRecognition: (state, action) => {
      state.image = action.payload.image;
      state.data = action.payload.data;
    },
    setLoggerState: (state, action) => {
      state.loggerState = action.payload.loggerState;
    },
    clearRecognition: (state) => {
      state = initialState;
    }
  }
});

export const { addRecognition, clearRecognition, setLoggerState } = recognitionSlice.actions;
export default recognitionSlice.reducer;
