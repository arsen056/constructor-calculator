import React from 'react';
import { Area } from 'common/components/area';
import { Button } from 'common/components/button';

export const Operations = () => {
  return (
    <Area>
      <Button>/</Button>
      <Button>*</Button>
      <Button>-</Button>
      <Button>+</Button>
    </Area>
  );
};
