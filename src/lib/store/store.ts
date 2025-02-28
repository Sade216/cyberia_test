import { configureStore } from '@reduxjs/toolkit'
import { projectsSlice } from '../reducers/projectsReducer'

export const mainStore = () => {
    return configureStore({
      reducer: {
        projects: projectsSlice.reducer
      }
    })
  }

export type AppStore = ReturnType<typeof mainStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']