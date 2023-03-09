import React, { ComponentProps, FC } from 'react';

import s from './Area.module.css';

export const Area:FC<ComponentProps<'div'>> = ({className, ...rest}) => {
  return (
    <div className={`${s.area} ${className}`} {...rest}/>
  );
};
