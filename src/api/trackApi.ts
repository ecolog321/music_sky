export async function getTracks() {
  const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", { cache: "default" });

  if (!response.ok) {
    throw new Error("Ошибка при отправке запроса");
  }

  // отправить ошибку

  return response.json();
}
