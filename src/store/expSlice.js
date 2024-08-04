import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exp: [
    {
      id: 0,
      text: 'expanded',
    }
  ]
}

const expSlice = createSlice({
  name: 'exp',
  initialState,
  reducers: { }
});

export default expSlice.reducer;
