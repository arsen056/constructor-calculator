import React, { FC } from 'react';
import { Area } from 'common/components/area';
import { Button } from 'common/components/button';
import { ComponentType } from 'common/types';

export const Operations:FC<ComponentType> = ({draggable}) => {
  return (
    <Area draggable={draggable}>
      <Button>/</Button>
      <Button>*</Button>
      <Button>-</Button>
      <Button>+</Button>
    </Area>
  );
};
