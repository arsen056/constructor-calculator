import React from 'react';
import { Area } from 'common/components/area';
import { Button } from 'common/components/button';

import s from './Numbers.module.css';

export const Numbers = () => {
  return (
    <Area draggable={true}>
      <Button className={s.number}>7</Button>
      <Button className={s.number}>8</Button>
      <Button className={s.number}>9</Button>
      <Button className={s.number}>4</Button>
      <Button className={s.number}>5</Button>
      <Button className={s.number}>6</Button>
      <Button className={s.null}>0</Button>
      <Button className={s.number}>,</Button>
    </Area>
  );
};
