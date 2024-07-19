import { fetchWithAuth } from "../utils/modules/fetchWithAuth";

export async function getTracks() {
  const response = await fetch(
    "https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/"
  );

  if (!response.ok) {
    throw new Error("Ошибка при отправке запроса");
  }


  return response.json().then((tracksData)=>tracksData.data);
}

export async function likeTrack({
  id,
  access,
  refresh,
}: {
  id: number;
  access: string;
  refresh: string;
}) {
  try {
    const response = await fetchWithAuth(
      `https://webdev-music-003b5b991590.herokuapp.com/catalog/track/${id}/favorite/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
    return response.json();
  } catch (error) {
    throw new Error("Ошибка" + error);
  }
}

export async function disLikeTrack({
  id,
  access,
  refresh,
}: {
  id: number;
  access: string;
  refresh: string;
}) {
  try {
    const response = await fetchWithAuth(
      `https://webdev-music-003b5b991590.herokuapp.com/catalog/track/${id}/favorite/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
      refresh
    );
    return response.json();
  } catch (error) {
    throw new Error("Ошибка" + error);
  }
}
