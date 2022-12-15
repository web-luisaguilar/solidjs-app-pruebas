import { Accessor, createEffect } from 'solid-js';

const Data = ({ count }: { count: Accessor<number> }) => {
  createEffect(() => {
    console.log(count);
  }, [count]);
  return <>{count}</>;
};
export default Data;
