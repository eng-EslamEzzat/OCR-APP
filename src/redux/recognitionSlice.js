import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
  data: {
    document_number: "",
    surname: "",
    given_name: "",
    sex: "",
    nationality: "",
    date_of_birth: "",
    date_of_issue: "",
    date_of_expiry: ""
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
