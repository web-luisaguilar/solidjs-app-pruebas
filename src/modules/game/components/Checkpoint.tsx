import { Motion, Presence } from '@motionone/solid'
import { createEffect, createSignal, Show } from 'solid-js'

interface CheckpointProps {
  yards: string
}

export const Checkpoint = (props: CheckpointProps) => {
  const [hide, setHide] = createSignal(true)

  createEffect(() => {
    setTimeout(() => {
      setHide(false)
    }, 5000)
  })
  return (
    <div class="absolute top-44 left-1/2 translate-x-1/5  md:top-24 md:left-1/2 md:translate-x-1/3 flex items-center justify-center">
      <div class="flex-col items-center justify-center">
        <Presence>
          <Show when={hide()}>
            <Motion
              initial={{ rotateY: 0, opacity: 0 }}
              animate={{ rotateY: 360, opacity: 1 }}
              exit={{ rotateY: 0, opacity: 0 }}
              transition={{
                duration: 1.75,
                easing: 'linear',
                delay: 2,
              }}
            >
              <img class="m-auto" src={'/src/assets/s-key.jpeg'} />
            </Motion>
          </Show>
        </Presence>
        <p
          class="text-[#ACFFFA] font-dDinBold w-fit text-2xl pt-2.5"
          style={{
            'text-shadow': '0px 0px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          CHECKPOINT
        </p>
        <p class="font-dDinBold text-white text-4xl -translate-y-0.5 w-fit m-auto">
          {props.yards}yd
        </p>
        <div
          class="rounded-full bg-[#ACFFFA] w-[16px] h-[16px] m-auto mt-2 outline outline-[#ACFFFA] outline-[3.5px] outline-offset-2"
          style={{
            'box-shadow': '0px 0px 4px #05CDFA',
            filter: 'drop-shadow(0px 0px 4px #05CDFA)',
          }}
        ></div>
      </div>
    </div>
  )
}
