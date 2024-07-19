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
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Ошибка" + error);
  }
};

export const fetchRegistration = async ({ email, password, username }: SingupFormType) => {
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
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Ошибка" + error);
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
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Ошибка" + error);
  }
};

export const fetchFavTracks = async (access: string) => {
  try {
    const response = await fetch(
      "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/favorite/all/",
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response.json();
  } catch (error) {
    throw new Error("Ошибка" + error);
  }
};
