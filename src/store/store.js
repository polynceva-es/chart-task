import { configureStore } from '@reduxjs/toolkit'
import { mainSlice } from './reducers/mainSlice'

export const store = configureStore({
  reducer: {
    main: mainSlice
  },
})