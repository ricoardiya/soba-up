import Matter from 'matter-js';
import React from 'react';

const Physics = (entities: any, { time, dispatch }: any) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  Matter.Events.on(engine, 'collisionStart', (event) => {
    dispatch({ type: 'game_over' });
  });
  return entities;
};

export default Physics;
