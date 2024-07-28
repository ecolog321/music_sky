import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getFavoiteTracks } from "../store/features/playlistSlise";

export const useInitiateLikeTracks = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.auth.tokens);

  useEffect(() => {
    if (tokens.access) {
      dispatch(getFavoiteTracks(tokens.access));
    }
  }, [tokens, dispatch]);
};
