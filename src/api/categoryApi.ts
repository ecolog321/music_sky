export const getCategoryPlaylist = async (access: string,id: string | string[] | undefined) => {
  const idN = id !== undefined ? +id+1 : undefined;
  const response = await fetch(
    `https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/${idN}/`,
    {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      },
  );
  if (!response.ok) {
    throw new Error("Ошибка при отправке запроса");
  }

  const responseData= await response.json();
  return responseData;
};
