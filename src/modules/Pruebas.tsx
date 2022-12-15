import { createEffect, createSignal, Show } from 'solid-js'
import Scene1 from './Babylon'
import ControlsMenuBtn from './ControlsMenu/ControlsMenuBtn'
import ErrorObjectPos from './Modals/ErrorObjectPos'
import { Toolbar } from './Toolbar/Toolbar'
//const [active, setActive] = createSignal(true)
//const handleClick = (e) => {
//  e.stopPropagation()
//  setActive(false)
//}

const Pruebas = () => {
  const [active, setActive] = createSignal(false)
  const handleClick = () => setActive(true)

  return (
    <>
      <div id="box" class="w-screen h-screen">
        {/*<ControlsMenuBtn />*/}
        {/*<Scene1 />*/}
        {/*<button
          class=" absolute  -translate-x-1/2 top-1/2 left-1/2 text-black border-black border p-2 hover:cursor-pointer"
          onClick={handleClick}
        >
          Click Me
        </button>

        <ErrorObjectPos
          errorText="Asset was put on a wall"
          active={active}
          setActive={setActive}
        />*/}

        {/*<Toolbar />*/}
      </div>
    </>
  )
}

export default Pruebas
