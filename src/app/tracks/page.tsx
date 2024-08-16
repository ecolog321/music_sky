import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { TrackType } from "../../types/types";
import { getTracks } from "@api/trackApi";

export default async function TrackPage () {
  let tracks: TrackType[] = [];
  let error: string | null = null;

  try {
    tracks = await getTracks();
  } catch (err) {
    error =
      err instanceof Error
        ? "Ошибка загрузки треков. " + err.message
        : "Неизвестная ошибка";
  }
  return <CenterBlock tracks={tracks} />;
};
