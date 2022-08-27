import Matter from 'matter-js';
import React from 'react';
import { View } from 'react-native';

const OuterBound = (props: any) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  const color = props.color;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderStyle: 'solid',
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        borderRadius: widthBody / 2,
      }}
    />
  );
};

export default (world: any, color: string, pos: any, radius: number) => {
  const initialOuterBound = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: 'OuterBound',
    isStatic: true,
  });
  Matter.Composite.add(world, initialOuterBound);
  return {
    body: initialOuterBound,
    color,
    pos,
    renderer: <OuterBound />,
  };
};
