import { ChangeEvent } from "react";

export const handleChange = (e: ChangeEvent<HTMLInputElement>, data:string, setData:any) => {
    const { name, value } = e.target;
    setData((data:any) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };