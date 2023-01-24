//import { _EditorInput } from 'js/editor/EditorInput'
import { createSignal, onMount, Setter, Show } from 'solid-js'
//import { _focusCanvas } from 'js/gui/utils'
//import _errorIcon from '/assets/images/icons/maps/error.svg'

interface InputProps {
  isInvalid?: boolean
  inputValue: string
  setInputValue: Setter<string>
  handleTab: (e: KeyboardEvent) => void
  handleEnter: (e: KeyboardEvent, callback: () => void) => void
  callbackEnter: () => void
}

export const MapNameInput = (props: InputProps) => {
  // eslint-disable-next-line prefer-const
  let inputRef: HTMLInputElement | undefined = undefined
  const [inputActive, setInputActive] = createSignal(true)

  onMount(() => {
    inputRef?.focus()
  })

  const handleFocus = () => {
    // stop listening for delete bc backspace is needed
    //EditorInput.isEnabled = false
    setInputActive(true)
  }

  const handleBlur = () => {
    // re-enable delete hotkey listener
    //EditorInput.isEnabled = true
    //focusCanvas()
    if (props.inputValue.length > 0) {
      return
    }
    setInputActive(false)
  }

  const handleChange = (e) => {
    props.setInputValue(e.currentTarget.value)
  }

  return (
    <div class="py-6 px-4 mb-0 w-full flex items-center justify-center relative">
      <div class="relative flex w-full">
        <input
          ref={inputRef}
          class={`px-3 py-1.5 border bg-transparent text-[15px] text-white font-interRegular flex-grow rounded w-full !caret-white outline-none ${
            props.isInvalid
              ? 'border-[#F4411E]'
              : 'border-white border-opacity-40 focus:border-[#0d9aff] focus:border-opacity-100 input-component'
          }`}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          onChange={(e) => handleChange(e)}
          //onKeyDown={(e) => props.handleTab(e)}
          id="newMap-input"
          onkeydown={(e) => {
            props.handleEnter(e, props.callbackEnter)
          }}
          value={props.inputValue}
          type="text"
          step={'any'}
        />
        <span
          class={`pointer-events-none absolute z-0 w-full h-full flex text-white font-interRegular ${
            inputActive()
              ? '-top-[18px] left-0 text-xs leading-3 tracking-tight'
              : 'top-0 bottom-0 items-center left-3 text-sm leading-7 opacity-60'
          }`}
        >
          Enter map name
        </span>
      </div>
      <Show when={props.isInvalid}>
        <div class="absolute -bottom-0.5 lg:-bottom-2 left-4 flex items-center space-x-1">
          <div class="w-5 lg:w-6">
            <img src={errorIcon} class="w-full h-autl" />
          </div>
          <p class="text-sm text-[#F4411E] font-interRegular text-left">
            This map name is already taken.
          </p>
        </div>
      </Show>
    </div>
  )
}
