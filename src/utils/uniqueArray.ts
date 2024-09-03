import { TrackType } from "../types/types";

export const createUniqueArray = (array: TrackType[], uniq: string) => {
  return Array.from(new Set(array.map((element) => String(element[uniq as keyof TrackType]))));
};

