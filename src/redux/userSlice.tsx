import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Andrés Fernández",
  email: "Andres.udo.info@gmail.com",
  phone: "+58 04123579911",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setEmail } = userSlice.actions;

export default userSlice.reducer;
