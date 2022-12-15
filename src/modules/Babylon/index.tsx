import {
  ArcRotateCamera,
  Scene,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Engine,
  FreeCamera,
  FreeCameraGamepadInput,
  DirectionalLight,
  Angle,
  PointerEventTypes,
  StandardMaterial,
  Tools,
  Texture,
  Viewport,
  Color3,
  Vector2,
  UniversalCamera,
} from '@babylonjs/core'
import { createEffect, createSignal } from 'solid-js'

import '@babylonjs/core/Debug/debugLayer'
import '@babylonjs/inspector'

let canvas
const createScene = (canvas, engine) => {
  const scene = new Scene(engine)

  const camera = new FreeCamera('camera1', new Vector3(0, 5, -2), scene)

  camera.setTarget(Vector3.Zero())
  camera.speed = 0.25

  camera.attachControl(canvas, true)
  camera.minZ = 0.45
  camera.angularSensibility = 2500

  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)

  light.intensity = 0.7

  const sphere = MeshBuilder.CreateSphere(
    'sphere',
    { diameter: 2, segments: 32 },
    scene
  )
  sphere.position.y = 1

  const ground = MeshBuilder.CreateGround(
    'ground',
    { width: 15, height: 15 },
    scene
  )

  scene.gravity = new Vector3(0, -0.78, 0)
  scene.collisionsEnabled = true
  camera.checkCollisions = true
  camera.ellipsoid = new Vector3(1, 1, 1)
  camera.applyGravity = true
  ground.checkCollisions = true
  sphere.checkCollisions = true

  console.log(sphere.position)
  sphere.onCollide = () => {
    if (sphere.intersectsPoint(new Vector3(camera.position._x - 1, 1, 0))) {
      console.log('detectado')
    } else {
      console.log('nodetectado')
    }
  }
  //setInterval(() => {
  //  console.log(
  //    'is detected ' +
  //      sphere.intersectsPoint(new Vector3(camera.position._x - 1, 1, 0))
  //  )
  //}, 500)

  //PARA DETECTAR UN OBJETO CERCA LA SOLUCION QUE SE ME OCURRE ES CREAR UN RADIO DE CERCANIA CON UN MESH Y OBTENER CUANDO EXISTA COLICION CON OTRO OBJETO CON INTERSECTSPOINTS O MESH Y OBTENER LA POSICION DEL OTRO OBJETO Y COMPAR CON UN GRADO DE ERROR
  return scene
}

const Scene1 = () => {
  const [fps, setFps] = createSignal(0)
  createEffect(() => {
    const engine = new Engine(canvas, true)

    const scene = createScene(canvas, engine)

    engine.runRenderLoop(() => {
      setFps(engine.getFps())
      //scene.render()
      scene.render()
      scene.debugLayer.show({
        embedMode: true,
      })
    })

    createEffect(() => {
      window.addEventListener('resize', () => {
        engine.resize
      })
    })
  })

  return (
    <>
      <p class="absolute top-2 left-2 text-white">FPS:{fps()}</p>
      <canvas ref={canvas} class="border-white w-full h-full"></canvas>
    </>
  )
}

export default Scene1
