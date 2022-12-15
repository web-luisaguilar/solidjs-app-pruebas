import { Show } from 'solid-js'
import { Control } from './ControlsMenu'

const ControlRow = ({ control }: { control: Control }) => {
  return (
    <td class="w-1/3 px-2 flex flex-col items-center justify-start p-4 pb-3 font-interMedium odd:bg-black/10 even:bg-black/5   ">
      <img src="/src/assets/s-key.jpeg" class="p-2 max-w-[186px]" />
      <p class="uppercase w-3/4 text-center">{control.info}</p>
      <Show when={control.spesific}>
        <p class="uppercase w-3/4 text-center">{control.spesific}</p>
      </Show>
    </td>
  )
}

export default ControlRow
