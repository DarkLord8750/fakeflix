import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import rootReducer from './reducers'; // Your root reducer

// Config for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap your rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = createStore(persistedReducer);

// Create persistor
const persistor = persistStore(store);

export default store;
export { persistor };
