import { Control } from './ControlsMenu'

export interface ControlRowProps {
  control: Control
}

const ControlRow = (props: ControlRowProps) => {
  return (
    <tr class="w-full cursor-default even:bg-black/10">
      <td class="w-1/2 px-2 py-1 font-interMedium">
        <img
          width={186}
          height={40}
          class="inline-block p-2 max-w-[186px]"
          src={props.control.icon}
          alt=""
        />
        {props.control.key}
      </td>

      <td class="w-1/2 px-2 py-1">{props.control.description}</td>
    </tr>
  )
}

export default ControlRow
