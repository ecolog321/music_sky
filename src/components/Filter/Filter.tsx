

import { FC } from "react";
import sharedStyles from "../shared.module.css";

type Props = {
    title:string,
    list:string[],
    value:string,
    isOpen:boolean,
    onClick:(value:string)=> void;
}

export const Filter:FC<Props> = ({ isOpen, value, onClick, title, list }) => {
  return (
    <div>
      <button
        className={sharedStyles.filter__button}
        onClick={() => onClick(value)}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={sharedStyles.filter__button}>
          {list.map((item: string, id: number) => {
            return <li key={id}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
