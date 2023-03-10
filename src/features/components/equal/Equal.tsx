import React, { FC } from 'react';
import { Area } from 'common/components/area';
import { Button } from 'common/components/button';
import { ComponentType } from 'common/types';

export const Equal:FC<ComponentType> = ({...rest}) => {
  return (
    <Area {...rest}>
      <Button equal="equal">=</Button>
    </Area>
  );
};
