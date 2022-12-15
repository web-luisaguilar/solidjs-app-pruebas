import { Engine, Scene } from '@babylonjs/core';
import { createEffect } from 'solid-js';
import { render } from 'solid-js/web/types';

// const PruebasBabylon = ({
//   antialias,
//   engineOPtions,
//   adaptToDeviceRatio,
//   sceneOptions,
//   onRender,
//   onSceneReady,
//   ...rest
// }) => {
//   let reactCanvas;
//   // const { current: canvas } = reactCanvas;
//   if (!reactCanvas) return;

//   const engine = new Engine(
//     reactCanvas,
//     antialias,
//     engineOPtions,
//     adaptToDeviceRatio
//   );
//   const scene = new Scene(engine, sceneOptions);
//   if (scene.isReady()) {
//     onSceneReady(scene);
//   } else {
//     scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
//   }

//   engine.runRenderLoop(() => {
//     if (typeof onRender === 'function') onRender(scene);
//     scene.render();
//   });

//   const resize = () => {
//     scene.getEngine().resize();
//   };

//   if (window) {
//     window.addEventListener('resize', resize);
//   }

//   scene.getEngine().dispose();

//   // return <canvas ref={reactCanvas} {...rest} width={900} height={600} />;

//   return <canvas width={900} height={600}></canvas>;
// };
const PruebasBabylon = (props) => {
  let renderCanvas;
  createEffect(() => {
    if (!renderCanvas) return;
    const engine = new Engine(
      renderCanvas,
      props.antialias,
      props.engineOptions,
      props.adaptToDeviceRatio
    );
    const scene = new Scene(engine, props.sceneOptions);
    if (scene.isReady()) {
      props.onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => props.onSceneReady(scene));
    }

    engine.runRenderLoop(() => {
      console.log(typeof props.onRender);
      if (typeof props.onRender === 'function') props.onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };
    if (window) {
      window.addEventListener('resize', resize);
    }
    scene.getEngine().dispose();
  }, [
    props.antialias,
    props.engineOptions,
    props.adaptToDeviceRatio,
    props.sceneOptions,
    props.onRender,
    props.onSceneReady,
  ]);
  return <canvas ref={renderCanvas} id="my-canvas" {...props}></canvas>;
};

export default PruebasBabylon;
