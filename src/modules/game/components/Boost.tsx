interface BoostProps {
  active?: Boolean
}
export const Boost = (props: BoostProps) => {
  return (
    <div class="bg-cover rounded-full flex justify-center items-center absolute right-40 bottom-40">
      <div
        class={` absolute w-[91px] h-[91px] outline outline-4 ${
          props.active ? 'animate-ping' : ''
        } outline-white/60 rounded-full`}
        style={
          props.active
            ? {
                'box-shadow': 'inset 0 0px 4px 0 rgb(255,255,255,70)',
              }
            : {}
        }
      ></div>
      <div class="w-[67px] h-[67px] bg-blue-500/50 flex rounded-full justify-center items-center outline-white outline-2 outline outline-offset-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-bolt"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="white"
          fill="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </svg>
      </div>
    </div>
  )
}
