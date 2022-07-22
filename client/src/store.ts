import { configureStore } from "@reduxjs/toolkit";
import basket from "./features/basket";
import user from "./features/user";

export const store = configureStore({
  reducer: {
    basket,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
