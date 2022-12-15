import { useEditor } from 'js/gui/stores'
import { createSignal, Show } from 'solid-js'
import { focusCanvas } from 'js/gui/utils'
import { Tooltip, TooltipPosition } from './Tooltip'
const tooltipText = {
  remove: 'Delete model',
  rotateBackwards: 'rotate backwards 45 degrees',
  rotateForwards: 'rotate forwards 45 degrees',
  togglePositionGizmo: 'Toggle Position gizmo',
  toggleRotationGizmo: 'Toggle Rotation gizmo',
  toggleScalingGizmo: 'Toggle Scaling gizmo',
}

export enum ToolbarButtonType {
  REMOVE = 'remove',
  LOCK = 'lock',
  ROTATE_BACKWARDS = 'rotateBackwards',
  ROTATE_FORWARDS = 'rotateForwards',
  TOGGLE_POSITION_GIZMO = 'togglePositionGizmo',
  TOGGLE_ROTATION_GIZMO = 'toggleRotationGizmo',
  TOGGLE_SCALING_GIZMO = 'toggleScalingGizmo',
}

interface ToolbarButtonProps {
  type: ToolbarButtonType
  icon: string
  onClick: () => void
  disabled?: boolean
}

export const ToolbarButton = (props: ToolbarButtonProps) => {
  const editorState = useEditor()

  const [tooltipActive, setTooltipActive] = createSignal<boolean>(false)

  const entitySelected = (): boolean => {
    return editorState().selectedWorldEntityID !== null
  }

  const handleClick = () => {
    focusCanvas()
    if (props.disabled) {
      return
    }

    if (entitySelected()) {
      props.onClick()
    }
  }

  return (
    <div
      class={`${
        entitySelected() && !props.disabled
          ? 'cursor-pointer hover:scale-110'
          : 'cursor-default'
      } flex w-auto h-full relative px-1 py-1.5`}
      onClick={() => handleClick()}
      onMouseEnter={() =>
        entitySelected() && !props.disabled ? setTooltipActive(true) : null
      }
      onMouseLeave={() => setTooltipActive(false)}
    >
      <img
        class={`${
          entitySelected() && !props.disabled ? 'opacity-[1]' : 'opacity-[0.44]'
        } h-full w-full object-contain`}
        src={props.icon}
      ></img>

      <Show when={tooltipActive()}>
        <Tooltip
          text={tooltipText[props.type]}
          position={TooltipPosition.BOTTOM}
        ></Tooltip>
      </Show>
    </div>
  )
}
