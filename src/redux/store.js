import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice/contactSlice';
import { filterReducer } from './slice/filterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slice/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: userReducer,
});
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
