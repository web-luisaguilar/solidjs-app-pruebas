import { _setCurrentMap, _setNewMapFormEnabled } from 'js/gui/stores'
import { _MapService } from 'js/services'
import { _GoToMap } from 'js/stories'
import { createEffect, createSignal, onMount } from 'solid-js'
import { MapNameInput } from './MapNameInput'

export const setCurrentMap = ({ map }) => {
  console.log('new map')
}
export const setNewMapFormEnabled = (map) => {
  //console.log('new map')
}
export const MapService = () => {
  console.log('test')
  return { map: 'test' }
}
MapService.createMap = ({ name }) => {
  console.log('test')
}
export const GoToMap = (map) => {}
export const NewMapForm = () => {
  const [inputValue, setInputValue] = createSignal('')
  const [mapNameInvalid, setMapNameInvalid] = createSignal(false)
  const [countTab, setCountTab] = createSignal(0)
  const [nextId, setNextId] = createSignal(1)

  const createNewMap = async () => {
    //const map = await MapService.createMap({ name: inputValue() })
    //if (false) {
    //  setNewMapFormEnabled(false)
    //  setCurrentMap(map)
    //  GoToMap(map)
    //} else {
    //  setMapNameInvalid(true)
    //}
    console.log('creandoMapa')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue()) {
      return
    }
    await createNewMap()
  }

  const handleClose = () => {
    console.log('cerrando')
    setNewMapFormEnabled(false)
  }
  //const tabsIDs = ['newMap-input', 'newMap-submit', 'newMap-cancel']
  enum TabType {
    INPUT = 'newMap-input',
    SUBMIT = 'newMap-submit',
    CANCEL = 'newMap-cancel',
  }

  console.log(Object.values(TabType))

  const handleTab = (e: KeyboardEvent) => {
    if (e.key == 'Tab') {
      e.preventDefault()
      e.stopPropagation()
      const target = e.target as HTMLElement
      const tabsIDs = Object.values(TabType)
      if (tabsIDs.indexOf(target.id) == 0) {
        setCountTab(0)
      } else {
      }

      if (countTab() < tabsIDs.length - 1) {
        setCountTab(tabsIDs.indexOf(target.id) + 1) // 0+1 = 1
      } else {
        setCountTab(0)
      }
      const nextFocus = document.getElementById(tabsIDs[countTab()])
      nextFocus?.focus()
    } else {
      return
    }
  }

  const handleEnter = (e: KeyboardEvent, callback: () => void) => {
    if (e.key == 'Enter') {
      e.preventDefault()
      console.log('enter')
      callback()
    } else {
      return
    }
  }
  //createEffect(() => {
  //  window.addEventListener('keydown', handleTab)
  //  document.activeElement.name ? document.activeElement.name : null
  //})

  return (
    <div
      class="modal-bg absolute w-screen h-screen z-[80]"
      onClick={() => handleClose()}
    >
      <form
        class="modal-new-map"
        onClick={(e) => e.stopPropagation()}
        onSubmit={async (e) => handleSubmit(e)}
        onkeydown={handleTab}
      >
        <p class="mt-4 lg:mt-5 text-white font-interSemiBold text-2xl leading-figma-auto pb-3">
          New Map
        </p>
        <MapNameInput
          inputValue={inputValue()}
          setInputValue={setInputValue}
          isInvalid={mapNameInvalid()}
          handleEnter={handleEnter}
          callbackEnter={createNewMap}
        />
        <div class="gap-x-10 lg:gap-x-8 mt-10 lg:mt-12 flex justify-center lg:mx-10">
          <button
            class="bg-[#0D99FF] modal-btn-go focus:outline-2 "
            id="newMap-submit"
            onClick={async (e) => handleSubmit(e)}
            onkeydown={(e) => {
              handleEnter(e, createNewMap)
            }}
          >
            Submit
          </button>
          <button
            class="modal-btn-go"
            id="newMap-cancel"
            onClick={() => handleClose()}
            onkeydown={(e) => {
              handleEnter(e, handleClose)
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
