import React from 'react';

import { useSelector } from 'react-redux';
import { selectRuntimeComponents } from 'features/runtime/selectors';

import s from './Runtime.module.css';

export const Runtime = () => {
  const runtimeComponents = useSelector(selectRuntimeComponents);

  return (
    <div className={s.runtime}>
      {runtimeComponents.length ? runtimeComponents.map( c => {
        const Component = c.component;

        return <Component key={c.id}/> ;
      } ) : ''}
    </div>
  );
};
