/* eslint-disable react/prop-types */
export const CategoryItem = ({ category }) => {
  return (
    <div className="flex flex-col w-auto justify-center items-center gap-6 font-montserrat font-medium hover:font-bold hover:scale-110 duration-200 ease-in">
      <div className="flex justify-center items-center h-20 w-20 drop-shadow-lg border-1 bg-white border-gray-50 rounded-full">
        <img src={`/${category.name}.svg`} alt="icono" className="h-8 w-8" />
      </div>
      <p className="">{category.name}</p>
    </div>
  );
};
