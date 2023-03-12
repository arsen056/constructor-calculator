import React from 'react';

import { useSelector } from 'react-redux';
import { selectRuntimeComponents } from 'features/runtime/selectors';

import s from './Runtime.module.css';

export const Runtime = () => {
  const runtimeComponents = useSelector(selectRuntimeComponents);

  const dragOver = (e: any) => {
    e.preventDefault();

  };

  const drop = (e: any) => {
    e.preventDefault();

  };

  return (
    <div
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => drop(e)}
      className={s.runtime}>
      {runtimeComponents.length ? runtimeComponents.map( c => {
        const Component = c.component;

        return <Component key={c.id}/> ;
      } ) : ''}
    </div>
  );
};
