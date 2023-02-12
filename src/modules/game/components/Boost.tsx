import { createEffect, createSignal, onCleanup, Show } from 'solid-js'

export const Boost = () => {
  const [boostActive, setBoostActive] = createSignal(false)
  const handleKeyDown = (e) => {
    if (e.code == 'Space') {
      setBoostActive(true)
    }
  }
  const handleKeyUp = (e) => {
    if (e.code == 'Space') {
      setBoostActive(false)
    }
  }
  createEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    onCleanup(() => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    })
  })
  return (
    <div
      id="boostBtn"
      onpointerdown={(e) => setBoostActive(true)}
      onPointerUp={(e) => setBoostActive(false)}
      class="bg-cover rounded-full flex justify-center items-center absolute right-20 bottom-10 md:right-[248px] md:bottom-10"
      style={{ transform: 'matrix(1, 0, -0.12, 0.99, 0, 0)' }}
    >
      <Show when={boostActive()}>
        <div
          class={` absolute w-[71px] h-[71px] md:w-[91px] md:h-[91px] outline outline-4 ${
            boostActive() ? 'animate-ping' : ''
          } outline-[#ACFFFA8C] rounded-full`}
        ></div>
        <p class="absolute -bottom-[42px] md:bottom-4 md:right-[92px] font-dDin text-white text-lg">
          BOOST!
        </p>
      </Show>
      <div
        class={`w-[50px] h-[50px] md:w-[67px] md:h-[67px] duration-500 ${
          boostActive() ? 'bg-[#4C93FAF0]' : 'bg-[#cacacaaa]'
        } flex rounded-full justify-center items-center  ${
          boostActive()
            ? 'outline outline-2 outline-[#ACFFFA]'
            : 'outline-none border-4 border-[rgba(217, 217, 217, 0.25)]'
        } outline-offset-4`}
      >
        <img src="" alt="" />
      </div>
    </div>
  )
}
