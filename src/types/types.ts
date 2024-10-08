export type UserType = {
    id:number | null,
    username:string | null,
    first_name:string | null,
    last_name:string |null,
    email:string | null
}

export type TrackType = {
    _id:number,
    name:string,
    author:string,
    release_date:string,
    genre:string[],
    duration_in_seconds:number,
    album:string,
    logo:null | string,
    track_file:string,
    stared_user: UserType[]
}

export type SinginFormType = {
    email: string;
    password: string;
  };

  export type SingupFormType = {
    email: string;
    password: string;
    username:string,
  };

  export type Tokens={
    access:string | null,
    refresh: string | null,
  }

