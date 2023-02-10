import { Motion } from '@motionone/solid'
import { createEffect } from 'solid-js'

interface CheckpointProps {
  yards: string
}

export const Checkpoint = (props: CheckpointProps) => {
  return (
    <div class="absolute top-44 left-1/2 translate-x-1/5  md:top-24 md:left-1/2 md:translate-x-1/3 flex items-center justify-center">
      <div class="flex-col items-center justify-center">
        <Motion
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          exit={{ rotateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: 4,
            easing: 'linear',
          }}
        >
          <img class="m-auto" src={'/src/assets/s-key.jpeg'} />
        </Motion>
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
