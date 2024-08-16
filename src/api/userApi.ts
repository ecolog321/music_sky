import { SinginFormType, SingupFormType } from "../types/types";

export const fetchUser = async ({ email, password }: SinginFormType) => {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/user/login/",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { ok, status } = response;
    const responseData = await response.json();
    if (!ok) {
      throw new Error(responseData.message);
    }
    return responseData;
  } catch (err) {
    throw err;
  }
};

export const fetchRegistration = async ({
  email,
  password,
  username,
}: SingupFormType) => {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/user/signup/",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { ok, status } = response;
    const responseData = await response.json();
    if (!ok) {
      throw new Error(responseData.message);
    }
    return responseData;
  } catch (err) {
    throw err;
  }
};

export const fetchTokens = async ({ email, password }: SinginFormType) => {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/user/token/",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { ok, status } = response;
    const responseData = await response.json();
    if (!ok) {
      throw new Error(responseData.message);
    }
    return responseData;
  } catch (err) {
    throw err;
  }
};
