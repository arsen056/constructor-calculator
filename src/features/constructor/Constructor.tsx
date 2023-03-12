import React from 'react';
import { useSelector } from 'react-redux';
import { selectConstructorComponents } from 'features/constructor/selectors';
import { useAppDispatch } from 'common/hooks/appDispatch';
import { ComponentType, pushElement } from 'features/runtime';

export const Constructor = () => {
  const dispatch = useAppDispatch();
  const components = useSelector(selectConstructorComponents);

  const onDragStartHandler = (e: DragEvent) => {

  };

  const onDragLeaveHandler = (e: DragEvent) => {

  };

  const onDragEndHandler = (e: DragEvent) => {

  };

  const onDragOverHandler = (e: DragEvent) => {
    e.preventDefault();
  };

  const dropHandler = (e: DragEvent, component: ComponentType) => {
    e.preventDefault();
    dispatch(pushElement({id: 1, order: 2, component: component.component}));
  };

  const componentsMap = components.map(c => {
    const Component = c.component;
    return (
      <Component
        onDragStart={(e: DragEvent) => onDragStartHandler(e)}
        onDragLeave={(e: DragEvent) => onDragLeaveHandler(e)}
        onDragEnd={(e: DragEvent) => onDragEndHandler(e)}
        onDragOver={(e: DragEvent) => onDragOverHandler(e)}
        onDrop={(e: DragEvent) => dropHandler(e, c.component)}
        draggable={true} key={c.id}
      />);
  });

  return (
    <div>
      {componentsMap}
    </div>
  );
};
