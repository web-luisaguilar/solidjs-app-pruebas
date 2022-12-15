import { createSignal, Show } from 'solid-js';
import { asset } from './Dropdown/data';
import { Dropdown } from './Dropdown';

interface Props {
  assets: Array<asset>;
  showProps: boolean;
  showSideBar: boolean;
}
const SideBar = ({ assets, showProps, showSideBar }: Props) => {
  const [sideBar, setSideBar] = createSignal<boolean>(true);
  return (
    <>
      <Dropdown assets={assets} />
      <Show when={sideBar}>
        <div class="max-w-ms w-1/4 max-h-full absolute right-0 top-0 flex  flex-wrap overflow-auto max-w-screen-sm">
          {assets.map((a) => {
            return (
              <div class="max-w-xxs rounded-md p-3 gap-2 mb-1.5 ml-2.5 text-blue-500 bg-gray-700 max-h-20 ">
                <h2>{a.name}</h2>
                <p>{a.image}</p>
              </div>
            );
          })}
        </div>
      </Show>
    </>
  );
};
export default SideBar;
