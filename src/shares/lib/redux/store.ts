import { configureStore } from '@reduxjs/toolkit'
import siteReducer from './features/site/siteSlice';
import userReducer from './features/user/userSlice';
import themeReducer from './features/theme/themeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      site: siteReducer,
      user: userReducer,
      theme: themeReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']