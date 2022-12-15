import { createEffect, createSignal, Show } from 'solid-js';

const Popup = ({ message }) => {
  const [popupState, setPopupState] = createSignal('pop');

  createEffect(() => {
    const popR = document.getElementById('popRef');
    console.log(popR);
    setTimeout(() => {
      popR.classList.remove('opacity-0');
      popR.classList.add('opacity-100');
    }, 500);
    setTimeout(() => {
      popR.classList.add('opacity-0');
      popR.classList.remove('opacity-100');
    }, 3000);
  }, popupState());

  return (
    <div>
      <Show when={popupState() != ''}>
        <div
          id="popRef"
          class="border-gray-400 w-fit opacity-100 duration-500 border p-3 rounded-lg bg-gray-400 bg-opacity-20 capitalize"
        >
          {message}
        </div>
      </Show>
    </div>
  );
};

export default Popup;
