import { createSignal, For, Show } from 'solid-js';
import { op } from '../App';
import Data from './Data';

const getAllCate = async () => {
  const daq = [
    { name: 'test', tuh: 'test' },
    { name: 'test', tuh: 'test' },
    { name: 'test3', tuh: 'test2' },
    { name: 'test3', tuh: 'test2' },
    { name: 'test3', tuh: 'test2' },
  ];
  return daq.map((el) => {
    return { name: el.name, tuh: el.tuh };
  });
};

// getAllCate().then((data) => console.log(data));

const PruebasTypes = () => {
  const [input, setInput] = createSignal('test');
  const [count, setCount] = createSignal(0);
  return (
    <>
      {
        <div>
          {/* <For each={data}>{(dato) => <p>{dato.name}</p>}</For> */}
          <Show when={input()} fallback={<span>pr</span>}>
            probando
          </Show>
          <Data count={count} />
          <br />

          <button
            onClick={() => setCount(count() + 1)}
            class="bg-slate-500 p-2 rounded-md"
          >
            +
          </button>
          <br />

          <p>state:{count()}</p>
        </div>
      }
    </>
  );
};
export default PruebasTypes;
