import React from 'react';
import { Display } from 'common/components/display';
import { Operations } from 'features/components/operations/';
import { Numbers } from 'features/components/numbers';

export const Constructor = () => {
  return (
    <div>
      <Display value={'5'}/>
      <Operations/>
      <Numbers/>
    </div>
  );
};
