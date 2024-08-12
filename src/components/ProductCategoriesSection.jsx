/* eslint-disable react-hooks/exhaustive-deps */
import { ListCategoryItem } from "./ListCategoryItem";
import { products } from "../data/productData";
import { CardProduct } from "./CardProduct";
import { Container } from "./Container";
import { getCategoriesStock } from "../helpers";
import { useProductCategories, useMoveScroll } from "../hooks";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export const ProductCategoriesSection = () => {
  const listCategories = getCategoriesStock();

  const { onItemSelected, dataState, selectedItem } = useProductCategories(
    products,
    listCategories
  );

  const { sliderRef, onScroll } = useMoveScroll(500);

  return (
    <section className="flex flex-col w-full lg:py-10">
      <Container className="justify-between items-center p-5 lg:pb-20">
        <p className="text-3xl lg:text-[47px] font-extrabold">
          New <span className="text-purple">arrival</span> for you
        </p>
        <div className="flex gap-3">
          <button
            className="h-auto w-auto rounded-full border-2 border-gray-500 bg-white p-3 hover:bg-black hover:text-white duration-300 ease-in hover:scale-[1.10]"
            onClick={() => onScroll("left")}
          >
            <ArrowLeftIcon aria-hidden="true" className="block h-6 w-6" />
          </button>
          <button
            className="h-auto w-auto rounded-full border-1 border-gray-400 bg-lemon p-3 hover:brightness-90 duration-300 ease-in hover:scale-[1.10]"
            onClick={() => onScroll("right")}
          >
            <ArrowRightIcon aria-hidden="true" className="block h-6 w-6" />
          </button>
        </div>
      </Container>
      <Container className={"flex-col md:flex-row p-5"}>
        <div className="flex flex-col md:w-1/4">
          {listCategories.map((category, index) => (
            <ListCategoryItem
              key={index}
              category={category}
              isSelected={category.name === selectedItem}
              onClick={() => onItemSelected(category.name)}
            />
          ))}
        </div>
        <div className="md:w-3/4 h-auto">
          <div ref={sliderRef} className="flex p-2 gap-14 overflow-hidden">
            {dataState.map((product, index) => (
              <CardProduct product={product} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
