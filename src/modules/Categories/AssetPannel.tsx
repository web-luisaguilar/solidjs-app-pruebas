import { createRenderEffect, createSignal, For, Setter, Show } from 'solid-js';
import { allBlueprints, Blueprint } from 'js/editor';
import { Asset } from './Asset';
import { FetchError } from './FetchError';
import {
  ResetHoveredAssetName,
  useEditor,
  setSelectedCategory,
} from 'js/gui/stores';
import { SearchBar } from './SearchBar';
import uFuzzy from '@leeoniya/ufuzzy';
import { NoResults } from './NoResults';
import CategoryPanel from './CategoryPanel';

interface AssetPanelProps {
  assets: Blueprint[];
  setAssets: Setter<Blueprint[]>;
}

export interface BlueprintCategory {
  name: string;
  icon: string;
}

const Loading = () => {
  const editorState = useEditor();
  return (
    <Show
      when={editorState().selectedCategory == null}
      fallback={
        <div class="flex flex-wrap items-stretch">
          {[...Array(33)].map(() => (
            <div class="aspect-square bg-black bg-opacity-20 rounded p-1.5 w-[30%] h-auto m-1 animate-pulse pl-2"></div>
          ))}
        </div>
      }
    >
      <div class="flex flex-wrap items-stretch">
        {[...Array(23)].map(() => (
          <div class="aspect-video bg-black bg-opacity-20 rounded p-1.5 w-full h-16 mx-4 my-1 animate-pulse"></div>
        ))}
      </div>
    </Show>
  );
};

export const AssetPannel = (props: AssetPanelProps) => {
  const titleDefault = 'Asset Categories';
  const [error, setError] = createSignal<boolean>(false);
  const [loading, setLoading] = createSignal<boolean>(false);
  const [inputValue, setInputValue] = createSignal<string>('');
  const [filteredAssets, setFilteredAssets] = createSignal<Blueprint[]>([]);
  const [assetLabels, setAssetLabels] = createSignal<string[]>([]);

  const [searchAssets, setSearchAssets] = createSignal<Blueprint[]>([]);

  const [categories, setCategories] = createSignal<BlueprintCategory[]>(
    [] as BlueprintCategory[]
  );

  const [assetPanelTitle, setAssetPanelTitle] = createSignal(titleDefault);

  const opts: uFuzzy.Options = {
    intraMode: 1,
    intraSub: 1,
    intraTrn: 1,
    intraDel: 1,
  };
  const uf = new uFuzzy(opts);

  const fetchAssets = async () => {
    return allBlueprints();
  };

  // TODO hookup gql query for blueprints by category
  const fetchAssetsByCategory = async (category: string) => {
    const blueprints = await fetchAssets();
    return blueprints.filter((blueprint) => blueprint.category === category);
  };

  // TODO add gql query for getting list of all categories
  const getAllBlueprintCategories = async () => {
    const blueprints = await fetchAssets();
    const seen = new Set();
    const filteredArr = blueprints.filter((blueprint) => {
      const duplicate = seen.has(blueprint.category);
      seen.add(blueprint.category);
      return !duplicate;
    });
    return filteredArr.map((blueprint) => {
      return { name: blueprint.category, icon: blueprint.thumbnail };
    });
  };

  const changeCategory = async (category) => {
    setSelectedCategory(category.name);
    
    setLoading(true);
    setError(false);
    try {
      const assetsByCategories = await fetchAssetsByCategory(category.name);
      setFilteredAssets(assetsByCategories);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const handleFetch = async () => {
    setLoading(true);
    setError(false);
    try {
      const blueprints = await fetchAssets();
      const categories = await getAllBlueprintCategories();
      props.setAssets(blueprints);
      setAssetLabels(blueprints.map((asset) => asset.label));
      setCategories(categories);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  createRenderEffect(() => {
    handleFetch();
  });

  const filterAssets = (input: string): Blueprint[] => {
    const idxs = uf.filter(assetLabels(), input);
    // sort/rank only when <= 500 items
    if (idxs.length <= 500) {
      const info = uf.info(idxs, assetLabels(), input);
      const order = uf.sort(info, assetLabels(), input);
      return order.map((_, i) => props.assets[info.idx[order[i]]]);
    }
    return idxs.map((_, i) => props.assets[idxs[i]]);
  };

  const editorState = useEditor();

  const handleInput = (input: string) => {
    setInputValue(input);
    ResetHoveredAssetName();
    if (!input) {
      const editorState = useEditor();
      setSearchAssets([]);
      return;
    }
    const searchResults = filterAssets(input);
    setSearchAssets(searchResults);
  };
 

  return (
    <div class="h-full w-full flex flex-col">
      <div class="w-full font-interSemiBold text-white mb-5 text-lg lg:text-xl px-4">
        <Show
          when={editorState().selectedCategory !== null}
          fallback={() => {
            setAssetPanelTitle(titleDefault);
            return <span>{assetPanelTitle()}</span>;
          }}
        >
          <div class="w-full grid grid-cols-8">
            <button
              onclick={() => {
                setAssetPanelTitle(titleDefault);
                setSelectedCategory(null);
              }}
              class="col-span-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={2}
                stroke="currentColor"
                class="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <span class="col-span-6 text-center">{assetPanelTitle()}</span>
          </div>
        </Show>
      </div>
      <div class="mx-3.5 mb-3">
        <SearchBar inputValue={inputValue()} handleInput={handleInput} />
      </div>
      <div
        class="w-full overflow-y-auto hide-scrollbar pl-2"
        onScroll={ResetHoveredAssetName}
      >
        <Show when={!loading()} fallback={<Loading />}>
          <Show
            when={!error()}
            fallback={<FetchError handleClick={handleFetch} />}
          >
            <div class="flex flex-wrap items-stretch ">
              <Show
                when={inputValue() == ''}
                fallback={
                  <For each={searchAssets()} fallback={<NoResults />}>
                    {(asset) => <Asset asset={asset} />}
                  </For>
                }
              >
                <CategoryPanel
                  categories={categories}
                  changeCategory={changeCategory}
                  filteredAssets={filteredAssets}
                />
              </Show>
            </div>
          </Show>
        </Show>
      </div>
    </div>
  );
};
