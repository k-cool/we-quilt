import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  // blacklist: ['userReducer'],
};

const rootReducer = combineReducers({
  userReducer,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정
export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger,
  ],
});

export const persistor = persistStore(store);
