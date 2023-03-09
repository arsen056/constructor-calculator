import React from 'react';
import { Display } from 'common/components/display';
import { Button } from 'common/components/button/Button';

export const Constructor = () => {
  return (
    <div>
      <Display value={'5'}/>
      <Button>5</Button>
    </div>
  );
};
