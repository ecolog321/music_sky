import { useEffect } from "react";
import { getTokens } from "../store/features/authSlice";
import { useAppDispatch, useAppSelector } from "./store"
import { getFavoiteTracks } from "../store/features/playlistSlise";

export const useInitiateLikeTracks = ()=>{
    const dispatch=useAppDispatch();
    const tokens=useAppSelector((state)=>state.auth.tokens);

    useEffect(()=>{
        if (tokens.acsess) {
            dispatch(getFavoiteTracks(tokens.acsess))
        }
    },[tokens,dispatch])
}