//import { createEffect, createSignal, on, Show } from 'solid-js'
//import { effect } from 'solid-js/web/types'
//import Scene1 from './Babylon'
//import ControlsMenuBtn from './ControlsMenu/ControlsMenuBtn'
//import ErrorObjectPos from './Modals/ErrorObjectPos'
//import { Toolbar } from './Toolbar/Toolbar'
//const [active, setActive] = createSignal(true)
//const handleClick = (e) => {
//  e.stopPropagation()
//  setActive(false)
//}

import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'
import { NewMapForm } from './NewMap/NewMapForm'

const Pruebas = () => {
  //const [active, setActive] = createSignal(false)

  //const handleDblclick = (e) => {}
  //const handleClick = (e) => {
  //  e.target.select()
  //  e.target.focus()
  //  e.target.removeEventListener('click', handleClick)

  //  setActive(true)
  //}
  //const [w, setW] = createSignal()

  //createEffect(() => {
  //  window.addEventListener('resize', () => setW(window.innerWidth))
  //  console.log(w())
  //})

  //const arr = [{ id: '1' }, { id: '2' }]

  ////console.log(arr.find((el) => el.id === '1'))

  ////createEffect(
  ////  on(active, () => {
  ////    console.log('testing')
  ////  }),
  ////  [active]
  ////)
  //const url = 'https://test.com'
  //if (url.indexOf('http:') === 0) {
  //  console.log(url)
  //}
  //const focusout = (e) => {
  //  e.preventDefault()
  //  console.log(e)
  //  const next = document.getElementById('foc')
  //  next?.focus()
  //}

  //const onSubmit = () => {
  //  console.log('enviando')
  //}
  //const [count, setCount] = createSignal(0)
  //const contador = (e) => {
  //  e.preventDefault()
  //  if (e.key == 'Tab') {
  //    let arr = ['submit', 'cancel', 'test']
  //    if (count() < arr.length - 1) {
  //      setCount(count() + 1)
  //    } else {
  //      setCount(0)
  //    }
  //    const but = document.getElementById(arr[count()])
  //    but.focus()
  //    console.log(count())
  //    console.log(arr[count()])
  //  }
  //}
  //const handleEnter = (e, callback) => {
  //  console.log(e)
  //  if (e.key == 'Enter') {
  //    callback()
  //  }
  //  e.preventDefault()
  //}

  const [input, setInput] = createSignal()
  const calcHeight = (value) => {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2
    return newHeight
  }

  createEffect(() => {
    const textarea = document.querySelector(
      '.resize-textArea'
    ) as HTMLTextAreaElement
    textarea.addEventListener('keyup', () => {
      textarea.style.height = `${calcHeight(textarea.textContent)}px`
    })
  })

  const handleChange = (e) => {
    setInput(e.target.textContent)
    console.log(e.target.textContent)
    console.log(input())
  }
  return (
    <>
      <div
        onkeydown={(e) => console.log(e.key)}
        id="box"
        class="text-black w-screen h-screen"
        //onKeyDown={(e) => contador(e)}
      >
        {/*<div tabIndex={-1}>
          <input type="text" tabIndex={2} />
          <br />
          <br />
          <input type="text" tabIndex={1} />
          <br />
          <button tabIndex={0}> submit</button>
          <br />
        </div>*/}
        {/*<canvas class="w-screen h-screen absolute top-0  bg-green-400/10 left-0 z-50"></canvas>
        <NewMapForm />
        <textarea cols="30" rows="1" class="w-1/4 resize-textarea"></textarea>*/}
        <div class="w-1/4">
          <span
            onInput={(e) => handleChange(e)}
            class="textarea resize-textarea"
            role="textbox"
            contenteditable={true}
          ></span>
        </div>
        {/*<input type="text" />
        <input
          class=" border-2 rounded-lg focus:outline-blue-500"
          id="submit"
          tabIndex={1}
          //onKeyDown={(e) => handleEnter(e, onSubmit)}
          //onKeyDown={(e) => contador(e)}
        ></input>

        <input
          type="text"
          id="cancel"
          tabIndex={3}
          class="focus:outline-blue-500 focus:outline-2"
        />
        <input type="text" id="test" value="test" />
        <button class="outline  outline-blue-500" onclick={contador}>
          {' '}
          click
        </button>*/}
        {/*<input
          onFocus={handleClick}
          onDblClick={handleDblclick}
          type="url"
          value="https.//lhlfe"
          class="text-black"
          formNoValidate={true}
        />*/}
        {/*<ControlsMenuBtn />*/}
        {/*<Scene1 />*/}
        {/*<button
          class=" absolute  -translate-x-1/2 top-1/2 left-1/2 text-black border-black border p-2 hover:cursor-pointer"
          onClick={handleClick}
        >
          Click Me
        </button>

        <ErrorObjectPos
          errorText="Asset was put on a wall"
          active={active}
          setActive={setActive}
        /> */}

        {/*<div
          class={`h-14 w-14 p-2  md:min-h-fit md:min-w-[100px] {
            active ? 'px-7 flex min-w-[120px]' : ' min-w-FIT min-w'
          } border w-20 z-50 bg-black/90`}
        >
          <img class="object-contain object-center w-6 h-6" />
          <Show when={true}>
            <p class={`text-white uppercase pl-2 hidden md:!inline-flex z-10 `}>
              MAPS
            </p>
          </Show>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          class="fill-white scale-50 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
        >
          <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
        </svg>*/}
      </div>
    </>
  )
}

export default Pruebas
