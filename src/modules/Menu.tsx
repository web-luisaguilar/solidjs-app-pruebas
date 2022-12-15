import Assets from './Assets';
import SideBar from './SideBar';
import { asset, assets } from './Dropdown/data';
import { createEffect, createSignal } from 'solid-js';

const Menu = () => {
  const [showProps, setShowProps] = createSignal<boolean>(false);
  const [showSideBar, setShowSideBar] = createSignal<boolean>(true);

  const handleClick = (data: asset) => {
    console.log(data);
    setShowProps(true);
    setShowSideBar(false);
  };

  return (
    <div class="relative">
      <h2 class="text-white border">Menu</h2>
      <h3>Items</h3>
      <Assets assets={assets} callback={handleClick} />
      <SideBar
        assets={assets}
        showProps={showProps()}
        showSideBar={showSideBar()}
      />
    </div>
  );
};
export default Menu;
