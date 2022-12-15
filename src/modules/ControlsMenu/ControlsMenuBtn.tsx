import { Motion, Presence } from '@motionone/solid'
import {
  Accessor,
  createEffect,
  createSignal,
  on,
  Setter,
  Show,
} from 'solid-js'
import { createFilter } from 'vite'
import ControlsMenu from './ControlsMenu'
const [active, setActive] = createSignal(false)
let box: HTMLDivElement

const ControlsMenuBtn = () => {
  const handleClick = () => {
    active() ? setActive(false) : setActive(true)
  }

  onclick = (e) => {
    if (!box.contains(e.target as HTMLDivElement)) setActive(false)
  }

  createEffect(() => {
    window.addEventListener('click', (e) => {
      if (!box.contains(e.target as HTMLDivElement)) setActive(false)
    })
  })

  return (
    <div ref={box}>
      <Presence exitBeforeEnter>
        <Show when={active()}>
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ControlsMenu />
          </Motion>
        </Show>
      </Presence>

      <button
        class="absolute bottom-4 left-4 bg-black/60 opacity-60 rounded-full w-11 h-11 p-2 flex items-center justify-center hover:opacity-100"
        onclick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </svg>
      </button>
    </div>
  )
}

export default ControlsMenuBtn
