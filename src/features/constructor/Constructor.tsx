import React from 'react';
import { useSelector } from 'react-redux';
import { selectConstructorComponents } from 'features/constructor/selectors';

export const Constructor = () => {

  const components = useSelector(selectConstructorComponents);

  const componentsMap = components.map(c => {
    const Component = c.component;
    return <Component draggable={true} key={c.id} />;
  });

  return (
    <div>
      {componentsMap}
    </div>
  );
};
