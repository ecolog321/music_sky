import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "../../types/types";

type PlaylistStateType = {
  isPlaying: boolean;
  currentTrack: TrackType | null;
  currentPlaylist: TrackType[];
  tracks: TrackType[];
  isShuffled: boolean;
  shuffledPlaylist: TrackType[];
};

const initialState: PlaylistStateType = {
  isPlaying: false,
  currentTrack: null,
  currentPlaylist: [],
  tracks: [],
  isShuffled: false,
  shuffledPlaylist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<{
        currentTrack: TrackType;
        currentPlaylist: TrackType[];
      }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.currentPlaylist = action.payload.currentPlaylist;
      state.shuffledPlaylist = [...action.payload.currentPlaylist].sort(
        () => 0.5 - Math.random()
      );
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.currentPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const nextIndex = currentIndex + 1;
      nextIndex >= playlist.length
        ? (state.currentTrack = playlist[0])
        : (state.currentTrack = playlist[nextIndex]);
    },
  },
});

export const { setCurrentTrack, nextTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
