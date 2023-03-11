import React, { FC } from 'react';

import s from './Display.module.css';

type Props = {
  value?: string
}

export const Display: FC<Props> = ({ value = 0 }) => {
  return (
    <div className={s.display}>
      <input className={s.input} value={value} type="text" />
    </div>
  );
};
