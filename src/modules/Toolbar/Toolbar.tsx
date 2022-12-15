import { useEditor, useSelectedWorldEntityID } from 'js/gui/stores'
import trash from '/assets/images/icons/editor/delete.svg'
import lock from '/assets/images/icons/editor/lock.svg'
import rotateBackwards from '/assets/images/icons/editor/rotate-backwards.svg'
import rotateForwards from '/assets/images/icons/editor/rotate-forwards.svg'
import position from '/assets/images/icons/editor/position.svg'
import rotation from '/assets/images/icons/editor/rotation.svg'
import scaling from '/assets/images/icons/editor/scaling.svg'
import { ToolbarButton, ToolbarButtonType } from './ToolbarButton'
import { Editor, editorTools } from 'js/editor'
import { ECSEngine } from 'js/libs/tkecs'
import { WorldObjectComponent } from 'js/index.debug'
import { Show } from 'solid-js'
import { Gizmo } from 'js/editor/Gizmo'

export const Toolbar = () => {
  const editorState = useEditor()
  const selectedEntityID = useSelectedWorldEntityID()

  const getPlacementConfig = () => {
    const ecsEngine = ECSEngine.getInstance()
    const ent = ecsEngine.entityByKey(selectedEntityID())
    const placementConfig =
      ent?.get(WorldObjectComponent)?.data?.blueprint?.placementConfig
    return placementConfig
  }

  const disableRotate = (): boolean => {
    const placementConfig = getPlacementConfig()
    return placementConfig?.preventMoving
  }

  const handleClickRotate = (degree: number) => {
    const radians = editorTools.toRadians(degree)
    const placementConfig = getPlacementConfig()
    const attachesTo = placementConfig?.attachesTo
    if (attachesTo === 'wall') {
      editorTools.rotateRoll(-radians)
    } else {
      // ground, socket, ceiling
      editorTools.rotateYaw(radians)
    }
  }

  const blockPosition = () => {
    console.log('blocking')
  }

  return (
    <div
      class={`${
        editorState().toolbarAnimation
      } editor-toolbar absolute bg-[#333232]/70 z-[60] left-1/2  w-max bottom-5 h-10 md:h-12 px-2 flex items-center justify-center gap-x-16`}
    >
      <ToolbarButton
        icon={trash}
        type={ToolbarButtonType.REMOVE}
        onClick={async () => await Editor.removeModel()}
      ></ToolbarButton>

      <ToolbarButton
        disabled={disableRotate()}
        icon={rotateBackwards}
        type={ToolbarButtonType.ROTATE_BACKWARDS}
        onClick={() => handleClickRotate(-45)}
      ></ToolbarButton>

      <ToolbarButton
        disabled={disableRotate()}
        icon={rotateForwards}
        type={ToolbarButtonType.ROTATE_FORWARDS}
        onClick={() => handleClickRotate(45)}
      ></ToolbarButton>

      {/* CREANDO LOCK BUTTON */}
      <ToolbarButton
        icon={lock} //Imagen del candado
        type={ToolbarButtonType.LOCK}
        onClick={blockPosition}
      ></ToolbarButton>

      {/* CREANDO LOCK BUTTON */}

      <Show when={getPlacementConfig()?.attachesTo === 'free'}>
        <ToolbarButton
          icon={position}
          type={ToolbarButtonType.TOGGLE_POSITION_GIZMO}
          onClick={() => {
            Gizmo.togglePositionGizmo()
          }}
        ></ToolbarButton>
        <ToolbarButton
          icon={rotation}
          type={ToolbarButtonType.TOGGLE_ROTATION_GIZMO}
          onClick={() => {
            Gizmo.toggleRotationGizmo()
          }}
        ></ToolbarButton>
        <ToolbarButton
          icon={scaling}
          type={ToolbarButtonType.TOGGLE_SCALING_GIZMO}
          onClick={() => {
            Gizmo.toggleScalingGizmo()
          }}
        ></ToolbarButton>
      </Show>
    </div>
  )
}
