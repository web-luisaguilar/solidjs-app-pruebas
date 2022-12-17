import { createEffect, createSignal, Show } from 'solid-js'
import { effect } from 'solid-js/web/types'
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
  const [w, setW] = createSignal()

  createEffect(() => {
    window.addEventListener('resize', () => setW(window.innerWidth))
    console.log(w())
  })
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
        /> */}

        <div
          class={`h-14 w-14 p-2  md:min-h-fit md:min-w-[100px] {
            active ? 'px-7 flex min-w-[120px]' : ' min-w-FIT min-w'
          } border w-20 z-50 bg-black/90`}
        >
          <img class="object-contain object-center w-6 h-6" />
          <Show when={true}>
            <p class={`text-white uppercase pl-2 hidden md:!inline-flex z-10 `}>
              MAPS
            </p>
          </Show>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          class="fill-white scale-50"
        >
          <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
        </svg>
      </div>
    </>
  )
}

export default Pruebas
