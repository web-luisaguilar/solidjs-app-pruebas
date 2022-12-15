import { Motion, Presence } from '@motionone/solid'
import { Accessor, createEffect, mergeProps, Setter, Show } from 'solid-js'

interface ErrorObjectPosProps {
  errorText?: string
  active: Accessor<boolean>
  setActive: Setter<boolean>
}

const ErrorObjectPos = (props: ErrorObjectPosProps) => {
  const merge = mergeProps({ errorText: 'Unexpected error occurred' }, props)

  createEffect(() => {
    if (props.active()) {
      setTimeout(() => {
        props.setActive(false)
      }, 3000)
    }
  })

  return (
    <Presence exitBeforeEnter>
      <Show when={props.active()}>
        <Motion
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          transition={{ duration: 0.35 }}
        >
          <div id="statusPopupElement" class="fixed top-5 left-1/2  z-50">
            <div class="p-3 rounded-md bg-black bg-opacity-30 text-white font-interSemiBold text-base lg:text-lg border border-white/20 flex gap-2 max-w-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
              >
                <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              </svg>
              <h2>{merge.errorText}</h2>
            </div>
          </div>
        </Motion>
      </Show>
    </Presence>
  )
}

export default ErrorObjectPos
