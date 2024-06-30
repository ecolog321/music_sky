import styles from './progressBar.module.css'

import { ChangeEvent, FC } from "react";

type Props={
    max:number,
    value:number,
    step:number,
    onChange:(value: ChangeEvent) => void;
}

export const ProgressBar: FC<Props>=({ max, value, step, onChange }) =>{
  return (
    <input
      className={styles.bar__player_progress} 
      type="range" 
      min="0" 
      max={max} 
      value={value} 
      step={step} 
      onChange={onChange}
    />
  );
}
