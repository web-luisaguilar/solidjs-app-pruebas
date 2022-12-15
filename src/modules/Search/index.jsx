import { createEffect, createSignal, Show } from 'solid-js';

const Search = ({ data }) => {
  const [query, setQuery] = createSignal('');
  const [options, setOptions] = createSignal([]);
  const [optionSelected, setOptionSelected] = createSignal({});

  const handleInput = (e) => {
    setQuery(e.target.value);

    if (query() != '') {
      let op = data.filter((dato) => dato.name.includes(e.target.value));
      setOptions(op);
    } else {
      setOptions([]);
    }
    
  };

  const handleClick = (option) => {
    setOptionSelected(option);
    // setQuery('');
    // setOptions([]);
  };
  return (
    <div>
      <div class="flex rounded-md text-white relative">
        <input
          class="p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
          placeholder="Search"
          type="search"
          value={query()}
          onInput={handleInput}
        />
        <div class="bg-gray-700 p-2 rounded-md hover:bg-opacity-75 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </div>
      </div>

      <Show when={options().length > 0}>
        <div class="mt-2 absolute w-full divide-y divide-slate-500 rounded-md py-3 bg-slate-600">
          {options().map((option) => {
            return (
              <a onClick={() => handleClick(option)}>
                <div class="w-full hover:bg-opacity-50 hover:bg-slate-500 hover:cursor-pointer bg-slate-600 p-2 ">
                  {option.name}
                </div>
              </a>
            );
          })}
        </div>
      </Show>
    </div>
  );
};

export default Search;
