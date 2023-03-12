import React, { FC } from 'react';
import { Area } from 'common/components/area';
import { Button } from 'common/components/button';

import { ComponentType } from 'common/types';

import s from './Numbers.module.css';

export const Numbers:FC<ComponentType> = ({...rest}) => {
  return (
    <Area {...rest}>
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
