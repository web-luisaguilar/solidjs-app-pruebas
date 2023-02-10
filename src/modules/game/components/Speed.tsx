import { createEffect, createSignal, onCleanup } from 'solid-js'

interface SpeedProps {
  speed: string
  active?: boolean
}

export const Speed = (props: SpeedProps) => {
  const [degree, setDegree] = createSignal(0)
  createEffect(() => {
    if (props.active) {
      const colorInterval = setInterval(() => {
        if (degree() == 360) setDegree(0)
        setDegree(degree() + 2)
      }, 5)
      onCleanup(() => {
        clearInterval(colorInterval)
      })
    }
  })
  return (
    <div
      class=" absolute left-1/2 !-translate-x-1/4 bottom-[40px] flex justify-center items-center rounded-full z-50 outline-offset-2"
      style={{
        width: '198px',
        //transform: 'rotateY(50deg)',
        height: '198px',
        background: 'rgba(217, 217, 217, 0.25)',
        transform: 'matrix(1, 0, -0.09, 1, 0, 0)',
      }}
    >
      <div
        class="rounded-full border-8 flex justify-center items-center"
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          background: `linear-gradient(195.14deg, rgba(0, 0, 0, 0.6) 26%, rgba(0, 0, 0, 0) 138.1%) padding-box,linear-gradient(${degree()}deg, rgba(172,255,235,0.9) 0%, rgba(255,69,69,0.65) 100%) border-box`,
          'border-color': 'transparent',
        }}
      >
        <div class="text-white flex-col justify-center items-center pt-2">
          <span class=" font-dDinExp text-[64px]">{props.speed}</span>
          <span class="block text-center font-dDin text-2xl -translate-y-6">
            mph
          </span>
        </div>
      </div>
    </div>
  )
}
