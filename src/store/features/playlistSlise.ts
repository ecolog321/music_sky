import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "../../types/types";
import { getFavTracks } from "@api/trackApi";

export const getFavoiteTracks = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (access: string) => {
    const favoriteTracks = await getFavTracks(access);
    return favoriteTracks;
  }
);

type PlaylistStateType = {
  isPlaying: boolean;
  currentTrack: TrackType | null;
  currentPlaylist: TrackType[];
  tracks: TrackType[];
  isShuffled: boolean;
  shuffledPlaylist: TrackType[];
  filterOptions: {
    author: string[];
    genre:string[];
    order: string;
    searchField: string;
  };
  filteredPlaylist: TrackType[];
  likedTracks: number[];
};

const initialState: PlaylistStateType = {
  isPlaying: false,
  currentTrack: null,
  currentPlaylist: [],
  tracks: [],
  isShuffled: false,
  shuffledPlaylist: [],
  filterOptions: {
    author: [],
    genre: [],
    order: "По умолчанию",
    searchField: "",
  },
  filteredPlaylist: [],
  likedTracks: [],
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
    clearTrack: (state)=>{
      state.currentTrack=null;
    },
    setPlaylist: (state, action: PayloadAction<{ tracks: TrackType[] }>) => {
      state.currentPlaylist = action.payload.tracks;
      state.filteredPlaylist = action.payload.tracks;
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.currentPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      const nextIndex = currentIndex + 1;
      nextIndex >= playlist.length
        ? (state.currentTrack = playlist[playlist.length - 1])
        : (state.currentTrack = playlist[nextIndex]);
    },
    prevTrack: (state) => {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.currentPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      const prevIndex = currentIndex - 1;
      prevIndex < 0
        ? (state.currentTrack = playlist[0])
        : (state.currentTrack = playlist[prevIndex]);
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      state.isShuffled = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        order?: string;
        searchField?: string;
      }>
    ) => {
      state.filterOptions = {
        author: action.payload.author || state.filterOptions.author,
        genre: action.payload.genre || state.filterOptions.genre,
        order: action.payload.order || state.filterOptions.order,
        searchField:
          action.payload.searchField || state.filterOptions.searchField,
      };
      const filteredTracks = [...state.currentPlaylist].filter((track) => {
        const valueSearchField = track.name
          .toLowerCase()
          .includes(state.filterOptions.searchField.toLowerCase());
        const valueAuthor =
          state.filterOptions.author.length > 0
            ? state.filterOptions.author.includes(track.author)
            : true;
        const valueGenre =
          state.filterOptions.genre.length > 0
            ? state.filterOptions.genre.includes(track.genre[0])
            : true;
        return valueSearchField && valueAuthor && valueGenre;
      });
      switch (state.filterOptions.order) {
        case "Сначала новые":
          filteredTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filteredTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );

          break;
        default:
          break;
      }
      state.filteredPlaylist = filteredTracks;
    },
    likeTrack: (state, action: PayloadAction<number>) => {
      state.likedTracks.push(action.payload);
    },
    dislikeTrack: (state, action: PayloadAction<number>) => {
      state.likedTracks = state.likedTracks.filter(
        (id) => id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getFavoiteTracks.fulfilled,
      (state, action) => {
        state.likedTracks = action.payload.map((track:TrackType)=>track._id);
      }
    );
  },
});

export const {
  setCurrentTrack,
  nextTrack,
  prevTrack,
  setIsPlaying,
  setIsShuffled,
  setFilters,
  setPlaylist,
  likeTrack,
  dislikeTrack,
  clearTrack,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
