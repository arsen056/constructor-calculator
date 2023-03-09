import React, { FC, HTMLAttributes } from 'react';

import s from './Button.module.css';

type Props = {equal?: 'equal'} & HTMLAttributes<HTMLButtonElement>
export const Button:FC<Props> = ({className, equal, ...rest}) => {

  const isEqual = equal ? s.equal : '';

  const btnClassName = `${s.button} ${className} ${isEqual}`;

  return (
    <button className={btnClassName} {...rest} />
  );
};
