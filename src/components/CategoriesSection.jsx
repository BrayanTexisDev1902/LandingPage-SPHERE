import { Categories } from "../data/categories";
import { CategoryItem } from "./CategoryItem";
import { Container } from "./Container";

export const CategoriesSection = () => {
  const allCategories = Categories;
  return (
    <section className="flex h-auto w-full lg:pt-10">
      <Container className="flex-col p-5 py-20">
        <p className="text-3xl lg:text-[72px] font-extrabold mx-auto">
          What <span className="text-purple">we</span> provide?
        </p>
        <div className="grid w-full h-auto gap-4 pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          {allCategories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};
