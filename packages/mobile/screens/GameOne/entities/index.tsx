import Matter from 'matter-js';
import { Dimensions } from 'react-native';
import InnerBound from '../../../components/GameOne/InnerBound/InnerBound';
import MainCircle from '../../../components/GameOne/MainCircle/MainCircle';
import OuterBound from '../../../components/GameOne/OuterBound/OuterBound';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function restart() {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.5;

  return {
    physics: { engine, world },
    MainCircle: MainCircle(
      world,
      'red',
      { x: windowWidth / 2 - 95, y: windowHeight / 2 - 95 },
      35
    ),
    InnerBound: InnerBound(
      world,
      'green',
      { x: windowWidth / 2, y: windowHeight / 2 },
      100
    ),
    OuterBound: OuterBound(
      world,
      'blue',
      { x: windowWidth / 2, y: windowHeight / 2 },
      171
    ),
  };
}
