import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favorites';
import albumPreferencesReducer from './slices/albumPreferences';

export const store = configureStore({
    reducer: {
        favoriteProducts: favoriteReducer,
        albumPreferences: albumPreferencesReducer,
    },
})