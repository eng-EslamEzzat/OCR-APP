import { configureStore } from '@reduxjs/toolkit'
import recognitionSlice from './recognitionSlice'

export default configureStore({
  reducer: {recognition: recognitionSlice},
})