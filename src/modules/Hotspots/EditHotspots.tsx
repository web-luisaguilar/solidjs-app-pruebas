//import { InspectInput } from 'js/components/inspect'
//import { IconButtonSmall, ICON_TYPE } from 'js/gui/solid-js/buttons'
//import {
//ToolbarButton,
//ToolbarButtonType,
//} from 'js/gui/solid-js/editor/toolbar/ToolbarButton'
//import {
//Tooltip,
//TooltipPosition,
//} from 'js/gui/solid-js/editor/toolbar/Tooltip'
//import {
//  hideEditHotspot,
//  hideHotspot,
//  useSelectedWorldEntityID,
//  useUIState,
//} from 'js/gui/stores'
//import { InspectableComponent } from 'js/index'
//import { ECSEngine } from 'js/libs/tkecs'
import { createEffect, createSignal, onMount, Show } from 'solid-js'
//import trash from '/assets/images/icons/editor/delete.svg'

export function EditHotspot() {
  //funciones evitadas

  const useUIState = () => {}
  const useSelectedWorldEntityID = () => {}

  //funciones evitadas

  const uiState = useUIState()
  const selectedEntId = useSelectedWorldEntityID()
  const [tooltipActive, setTooltipActive] = createSignal<boolean>(false)

  //const getInspectObj = (): InspectableComponent | undefined => {
  //  const worldEntityId = selectedEntId()
  //  if (!worldEntityId) {
  //    return
  //  }
  //  const ecsEngine = ECSEngine.getInstance()
  //  const ent = ecsEngine.entityByKey(worldEntityId)
  //  const inspectObj = ent?.get(InspectableComponent)
  //  return inspectObj
  //}

  const handleFocus = () => {
    // stop listening for delete bc backspace is needed
    //InspectInput.isEnabled = false
  }

  const handleBlur = () => {
    // re-enable delete hotkey lstener
    //InspectInput.isEnabled = true
  }

  const handleTab = (event, nextFocusId) => {
    if (event.key == 'Tab') {
      event.preventDefault()
      const nextFocus = document.getElementById(nextFocusId)
      console.log(nextFocus)
      nextFocus?.focus()
    }
  }

  const handleEnter = (event) => {
    if (event.key == 'Enter') {
      event.preventDefault()
      saveHotspot()
    }
  }
  const test = '' | 'test'
  const saveHotspot = () => {
    const inspectObj = getInspectObj()
    if (!inspectObj) {
      return
    }
    inspectObj.saveHotspotData()
  }

  const saveData = () => {
    const inspectObj = getInspectObj()
    if (!inspectObj) {
      return
    }
    inspectObj.saveHotspotData()
  }

  //const calcHeight = (value) => {
  //  const numberOfLineBreaks = (value.match(/\n/g) || []).length
  //  // min-height + lines x line-height + padding + border
  //  const newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2
  //  return newHeight
  //}

  //createEffect(() => {
  //  const textarea: HTMLInputElement =
  //    document.querySelector('.resize-textArea')
  //  textarea.addEventListener('keyup', () => {
  //    textarea.style.height = `${calcHeight(textarea.textContent)}px`
  //  })
  //})

  return (
    <div
      class="bg-[#333232]/30 z-40 absolute top-20 left-1/2 -translate-x-1/2 min-w-max w-[300px] pt-2.5 pb-4 h-auto px-2 mx-auto my-2 rounded-md"
      style={{
        'box-shadow': 'inset -5px -5px 250px rgb(255 255 255 / 2%)',
        'backdrop-filter': 'blur(42px)',
        '-webkit-backdrop-filter': 'blur(42px)',
      }}
    >
      {/*<div class="w-full grid grid-cols-4 items-center justify-center mb-3 space-x-4">
        <h2 class="col-span-3 px-2 font-interMedium text-white text-lg text-left">
          Hotspot Information
        </h2>
        <div class="col-span-1 self-center justify-self-end">
          <div
            class={'cursor-default flex w-auto h-full relative p-1.5'}
            onClick={() => {
              //const inspectObj = getInspectObj()
              //if (!inspectObj) {
              //  return
              //}
              //inspectObj.deleteHotspot()
            }}
            onMouseEnter={() => setTooltipActive(true)}
            onMouseLeave={() => setTooltipActive(false)}
          >
            <img
              class={'icon-hotspots opacity-[1] btn-icon-shadow '}
              //src={trash}
            ></img>

            <Show when={tooltipActive()}>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-full">
                {/*<Tooltip
                  text={'Delete hotspot'}
                  position={TooltipPosition.TOP}
                ></Tooltip>*/}
              </div>
            </Show>
          </div>
        </div>
      </div>
      <form class="space-y-3 px-2 max-w-full">
        <div class="flex flex-col space-y-0.5">
          <label for="hotspotLabel" class="inspectInputLabel">
            Label:
          </label>
          <input
            type="text"
            id="hotspotLabel"
            name="hotspotLabel"
            class="inspectInputField"
            autocomplete="on"
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            onKeyDown={(evt) => {
              handleTab(evt, 'hotspotDescription')
              handleEnter(evt)
            }}
            value={
              ''
              //{getInspectObj()?.metadata?.hotspots[uiState().activeHotspot]
              //?.title}
            }
          ></input>
        </div>
        <div class="flex flex-col space-y-0.5">
          <label for="hotspotDescription" class="inspectInputLabel">
            Description:
          </label>

          <span
            id="hotspotDescription"
            data-name="hotspotDescription"
            class="inspectInputField text-area resize-textArea bg-white max-w-full w-[300px]"
            role="textbox"
            contentEditable={true}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            onKeyDown={(evt) => {
              handleTab(evt, 'saveHotspotButton')
              handleEnter(evt)
            }}
            textContent={
              '' //{
              //getInspectObj()?.metadata?.hotspots[uiState().activeHotspot]
              //  ?.description}
            }
          ></span>
        </div>
      </form>
      <div class="w-full flex justify-center space-x-4">
        <button
          id="saveHotspotButton"
          class="btn-hotspots"
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          onClick={() => {
            saveData()
            hideEditHotspot()
            hideHotspot()
          }}
        >
          Save Hotspot
        </button>
      </div> * /} 
      'test'
    </div>
  )
}
