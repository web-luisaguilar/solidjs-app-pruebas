import { createSignal, For, Show } from 'solid-js'
import ControlRow from './ControlRow'
import { Motion, Presence } from '@motionone/solid'
import ControlFigure from './ControlFigure'

export interface Control {
  key: string
  info: string
  spesific?: string
}

const ControlsMenu = () => {
  const [menu, setMenu] = createSignal(true)
  const controls: Control[] = [
    { key: 'ESC', info: 'exit editor mode' },
    {
      key: 'SHIFT',
      info: 'SPRINT',
      spesific: '(PRESS + HOLD)',
    },
    { key: 'SPACE', info: 'JUMP' },
    {
      key: 'INFO',
      info: 'INFO',
    },
    { key: 'INV', info: 'INVENTORY' },
    {
      key: 'HOME',
      info: 'RESPAWN',
      spesific: '(TO START)',
    },
    { key: 'ESC', info: 'exit editor mode' },
    {
      key: 'SHIFT',
      info: 'SPRINT',
      spesific: '(PRESS + HOLD)',
    },
    { key: 'SPACE', info: 'JUMP' },
    {
      key: 'INFO',
      info: 'INFO',
    },
    { key: 'INV', info: 'INVENTORY' },
    {
      key: 'HOME',
      info: 'RESPAWN',
      spesific: '(TO START)',
    },
    { key: 'ESC', info: 'exit editor mode' },
    {
      key: 'SHIFT',
      info: 'SPRINT',
      spesific: '(PRESS + HOLD)',
    },
    { key: 'SPACE', info: 'JUMP' },
    {
      key: 'INFO',
      info: 'INFO',
    },
    { key: 'INV', info: 'INVENTORY' },
    {
      key: 'HOME',
      info: 'RESPAWN',
      spesific: '(TO START)',
    },
  ]

  return (
    <div
      class="w-full h-full absolute top-0 left-0"
      onclick={() => {
        setMenu(false)
        console.log('click')
      }}
      onClick={() => {}}
    >
      <Show when={menu()}>
        <div class="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 min-w-[500px] min-h-[300px] overflow-auto  max-w-[800px] max-h-[800px] bg-black/60 text-white/60 rounded-md font-interSemiBold text-lg lg:text-xl p-2">
          {' '}
          {/* Cambiar Estilos */}
          <div>
            <div class="bg-white/20 flex  justify-center items-center relative p-2">
              <h2 class="text-xxl">Controls Menu</h2>
              <div class="absolute top-1 right-1 opacity-60 hover:opacity-100 cursor-pointer hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 0 24 24"
                  width="28px"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </div>
            </div>
            <div class="p-4">
              {/*<table class="w-full text-white/60 mb-2">
              <thead class="w-full">
              <tr class="w-full bg-black/30 text-base lg:text-lg">
              <th class="w-1/3 py-2">Key</th>
              <th class="w-2/3 py-2">Description</th>
              </tr>
              </thead>
            </table>*/}
              <table class="w-full text-white/60 border-separate border-spacing-y-1 border-spacing-x-0">
                <tbody class="w-full font-interRegular pt-6 text-sm lg:text-base ">
                  <tr class="w-full flex flex-wrap ">
                    {' '}
                    {/*Agregar esta linea*/}
                    <For each={controls}>
                      {(control) => <ControlRow control={control}></ControlRow>}
                    </For>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Show>
    </div>
  )
}

export default ControlsMenu
