export type UserType = {
    id:number,
    username:string,
    first_name:string,
    last_name:string,
    email:string
}

export type TrackType = {
    id:number,
    name:string,
    author:string,
    release_date:string,
    genre:string,
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
    acsess:string | null,
    refresh: string | null,
  }

