import { BlueprintCategory } from './AssetPannel';

interface CategoryProps {
  category: BlueprintCategory;
  changeCategory: (category: BlueprintCategory) => void;
}

const Category = (props: CategoryProps) => {
  return (
    <div class="pl-2 pr-4 py-1 w-full">
      <button
        class="w-full flex bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md text-white/60 hover:text-white cursor-pointer justify-between items-center py-1 hover:scale-105"
        onClick={() => props.changeCategory(props.category)}
      >
        <div class="grid grid-cols-5 gap-x-4 items-center">
          <img
            src={props.category.icon}
            alt={props.category.name}
            class="w-12 h-12 ml-2"
          />

          <span class="text-base lg:text-lg font-interMedium col-span-4 text-left pl-2">
            {props.category.name}
          </span>
        </div>
        <div class="w-1/6">
          <svg
            class="w-14 h-14 px-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Category;
