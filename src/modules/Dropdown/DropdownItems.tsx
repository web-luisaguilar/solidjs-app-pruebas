import { itemsListDropdown } from '../types';
export const DropdownItems = ({
  callback,
  item,
}: {
  callback: (itemList) => void;
  item: itemsListDropdown;
}) => {
  return (
    <li
      class="w-full inline-flex items-center px-2 py-3 hover:bg-black hover:bg-opacity-30 cursor-pointer"
      onClick={() => callback(item.id)}
    >
      <img src={item.img} class="max-h-6" />
      <span class="ml-2">{item.name}</span>
    </li>
  );
};
