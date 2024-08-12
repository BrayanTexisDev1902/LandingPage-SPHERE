import { getStylesBadgeCategory } from "../helpers/getStylesBadgeCategory";

/* eslint-disable react/prop-types */
export const ListCategoryItem = ({ category, onClick, isSelected }) => {
  const { bgColor, textColor } = getStylesBadgeCategory(category.name);

  const borderStyle = isSelected ? "border-purple border-l-[3px]" : "border-graylight border-l-2";

  return (
    <div
      className={`flex justify-start items-center font-montserrat  py-4 px-6 gap-4 cursor-pointer hover:bg-slate-50 ${borderStyle} transition-colors duration-300 ease-in`}
      onClick={onClick}
    >
      <p className="font-medium text-[16px]">{category.name}</p>
      <span className={`rounded-[8px] px-2 font-bold text-[15px] ${bgColor} ${textColor}`}>
        {category.stock}
      </span>
    </div>
  );
};
