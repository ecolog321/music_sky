import { SinginFormType } from "../types/types";

export const fetchUser = async ({ email, password }: SinginFormType) => {
  try {
    const response = await fetch(
      "https://skypro-music-api.skyeng.tech/user/login/",
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

export const fetchTokens = async ({ email, password }: SinginFormType) => {
  try {
    const response = await fetch(
      "https://skypro-music-api.skyeng.tech/user/token/",
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
      "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
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
