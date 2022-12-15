import { useEditor, setSelectedCategory } from 'js/gui/stores';
import { Accessor, createEffect, For, Setter, Show } from 'solid-js';
import { BlueprintCategory } from './AssetPannel';
import Category from './Category';
import { Blueprint } from 'js/editor';
import { Asset } from '../Asset';

interface CategoryPanelProps {
  categories: Accessor<BlueprintCategory[]>;
  changeCategory: (category: BlueprintCategory) => void;
  filteredAssets: Accessor<Blueprint[]>;
}

const CategoryPanel = (props: CategoryPanelProps) => {
  const editorState = useEditor();

  return (
    <>
      <Show
        when={editorState().selectedCategory == null}
        fallback={
          <For each={props.filteredAssets()}>
            {(asset) => <Asset asset={asset} />}
          </For>
        }
      >
        <For each={props.categories()}>
          {(category) => {
            return (
              <Category
                category={category}
                changeCategory={props.changeCategory}
              />
            );
          }}
        </For>
      </Show>
    </>
  );
};
export default CategoryPanel;
