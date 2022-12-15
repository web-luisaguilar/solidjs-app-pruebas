import { createEffect } from 'solid-js';
import { asset } from './Dropdown/data';

interface Props {
  assets: Array<asset>;
  callback: (data: asset) => void;
}

const Assets = ({ assets, callback }: Props) => {
  return (
    <div class="max-w-xxs">
      {assets.map((asset) => {
        return (
          <div
            class="max-w-xxs rounded-md p-3 gap-2 mb-1.5 text-blue-500 bg-gray-700 hover:cursor-pointer"
            onClick={() => callback(asset)}
          >
            <h2>{asset.name}</h2>
            <p>{asset.image}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Assets;
