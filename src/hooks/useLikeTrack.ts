import React from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { disLikeTrack, likeTrack } from "@api/trackApi";
import {
  dislikeTrack,
  likeTrack as likeTrackAction,
} from "../store/features/playlistSlise";

export const useLikeTracks = (idTrack: number) => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.auth.tokens);
  const user = useAppSelector((state) => state.auth.user);
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const isLiked: boolean = likedTracks.includes(idTrack);
  const action = isLiked ? disLikeTrack : likeTrack;

  const handleLike = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!tokens.access || !tokens.refresh || !user) {
      return alert("Вы не авторизованы");
    }

    try {
      await action({
        id: idTrack,
        access: tokens.access,
        refresh: tokens.refresh,
      });
      if (isLiked) {
        dispatch(dislikeTrack(idTrack));
      } else {
        dispatch(likeTrackAction(idTrack));
      }
    } catch (error) {}
  };

  return { isLiked, handleLike };
};
