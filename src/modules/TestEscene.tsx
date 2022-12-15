import {
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Engine,
} from '@babylonjs/core';
const createScene = function () {
  // Creates a basic Babylon Scene object
  const scene = new Scene(engine);
  // Creates and positions a free camera
  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  // Targets the camera to scene origin
  camera.setTarget(Vector3.Zero());
  // Attaches the camera to the canvas
  camera.attachControl(canvas, true);
  // Creates a light, aiming 0,1,0
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  // Dim the light a small amount 0 - 1
  light.intensity = 0.7;
  // Built-in 'sphere' shape.
  const sphere = MeshBuilder.CreateSphere(
    'sphere',
    { diameter: 2, segments: 32 },
    scene
  );
  // Move phere upward 1/2 its height
  sphere.position.y = 1;
  // Built-in 'ground' shape.
  const ground = MeshBuilder.CreateGround(
    'ground',
    { width: 6, height: 6 },
    scene
  );
  return scene;
};
