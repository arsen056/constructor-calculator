import React, { ComponentProps, FC } from 'react';

import s from './Area.module.css';

type Props = {
  isRuntime?: boolean
} & ComponentProps<'div'>

export const Area:FC<Props> = ({className, isRuntime, ...rest}) => {

  const isRuntimeArea = isRuntime ? '' : s.shadow;

  const areaClassName = `${s.area} ${className} ` + isRuntimeArea;

  return (
    <div className={areaClassName} {...rest}/>
  );
};
