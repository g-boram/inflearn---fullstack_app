import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: '',
    email: '',
    name: '',
    role: 0,
    image: '',
  },
  isAuth: false,
  isLoading: false,
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    console.log('builder', builder)
  }
})

export default userSlice.reducer;