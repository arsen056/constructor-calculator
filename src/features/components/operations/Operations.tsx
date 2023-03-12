import React, { FC } from 'react';
import { Area } from 'common/components/area';
import { Button } from 'common/components/button';
import { ComponentType } from 'common/types';

export const Operations:FC<ComponentType> = ({...rest}) => {
  return (
    <Area {...rest}>
      <Button>/</Button>
      <Button>*</Button>
      <Button>-</Button>
      <Button>+</Button>
    </Area>
  );
};
