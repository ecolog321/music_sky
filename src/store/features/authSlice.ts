import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SinginFormType,
  SingupFormType,
  Tokens,
  UserType,
} from "../../types/types";
import { fetchRegistration, fetchTokens, fetchUser } from "@api/userApi";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SinginFormType) => {
    const user = await fetchUser({ email, password });
    localStorage.setItem("email", email);
    return user;
  }
);

export const singupUser = createAsyncThunk(
  "user/singupUser",
  async ({ email, password, username }: SingupFormType) => {
    const user = await fetchRegistration({ email, password, username });
    return user;
  }
);

export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SinginFormType) => {
    const tokens = await fetchTokens({ email, password });
    localStorage.setItem("access", tokens.access);
    localStorage.setItem("refresh", tokens.refresh);
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
    access: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    quitUser: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
      localStorage.removeItem('email');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    },
    saveUser: (state, action: PayloadAction<string[]>) => {
      if (state.user) {
        state.user.email = action.payload[0];
      }
      state.tokens.access = action.payload[1];
      state.tokens.refresh = action.payload[2];
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
        state.tokens.access = action.payload.access;
        state.tokens.refresh = action.payload.refresh;
      }
    );
    builder.addCase(
      singupUser.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      }
    );
  },
});

export const { quitUser, saveUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
