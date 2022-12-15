import { DropdownItems } from './DropdownItems';
import { createSignal, For, Show } from 'solid-js';
import { itemsListDropdown } from '../types';

export const Dropdown = ({
  itemList,
  currentValue,
}: {
  itemList: Array<itemsListDropdown>;
  currentValue: number;
}) => {
  const [itemSelected, setItemSelected] = createSignal<number>(currentValue);

  const [hidden, setHidden] = createSignal<boolean>(false);
 

  const hiddenItems = () => {
    if (hidden()) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  const SelectedItem = (currentValue: number) => {
    setItemSelected(currentValue);
    setHidden(false);
  };
  console.log(hidden());
  if (itemList.length) {
    if (itemList.find((item) => item.id === itemSelected()) !== undefined) {
      return (
        <div class="m-auto  text-white text-base lg:text-lg font-interSemiBold relative ">
          <Show
            when={itemList.length}
            fallback={
              <div class="bg-black bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg inline-flex items-center w-44 lg:w-56 justify-between">
                <span class="inline-flex">Dropdown</span>
              </div>
            }
          >
            <div
              onClick={hiddenItems}
              class="bg-black bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg inline-flex items-center w-44 lg:w-56 justify-between cursor-pointer"
            >
              <span class={'inline-flex'}>
                <img
                  src={
                    itemList.filter((item) => item.id === itemSelected())[0].img
                  }
                  class="max-h-6"
                />
                <span class="ml-2 text-ellipsis max-w-full">
                  {
                    itemList.filter((item) => item.id === itemSelected())[0]
                      .name
                  }
                </span>
              </span>

              <svg
                class="ml-2 w-4 h-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            <Show when={hidden()}>
              <div
                id={'dropdownItems'}
                class=" z-10 w-44 lg:w-56 bg-black bg-opacity-20 rounded-lg absolute"
              >
                <ul class=" divide-y divide-gray-400 mt-2 py-2">
                  <For each={itemList}>
                    {(itemOn) => (
                      <DropdownItems callback={SelectedItem} item={itemOn} />
                    )}
                  </For>
                </ul>
              </div>
            </Show>
          </Show>
        </div>
      );
    } else {
      return <></>;
    }
  }
};
