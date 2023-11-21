import { configureStore } from '@reduxjs/toolkit';
import { appApi } from '../features/api.slice';
import user from '../features/user.slice';
import post from '../features/post.slice';

const store = configureStore({
    reducer: {
        user,
        post,
        [appApi.reducerPath]: appApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(appApi.middleware)
});

export default store;