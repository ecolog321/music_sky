import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SinginFormType, Tokens, UserType } from "../../types/types";
import { fetchTokens, fetchUser } from "@api/userApi";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SinginFormType) => {
    const user = await fetchUser({ email, password });
    return user;
  }
);

export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SinginFormType) => {
    const tokens = await fetchTokens({ email, password });
    return tokens;
  }
);

type AuthStateType = {
  user: UserType | null;
  tokens: Tokens;
};

const initialState: AuthStateType = {
  user: null,
  tokens: {
    acsess: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    quitUser: (state) => {
      state.user = null;
      state.tokens.acsess = null;
      state.tokens.refresh = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      }
    );
    builder.addCase(
      getTokens.fulfilled,
      (state, action: PayloadAction<Tokens>) => {
        state.tokens.acsess = action.payload.acsess;
        state.tokens.refresh = action.payload.refresh;
      }
    );
  },
});

export const {quitUser} = authSlice.actions;
export const authReducer = authSlice.reducer;
