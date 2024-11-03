import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
//actions    
  },
})

// Action creators are generated for each case reducer function
// export const {} = mainSlice.actions

export default mainSlice.reducer