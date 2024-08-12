/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getFilterProductCategories } from "../helpers";

export const useProductCategories = (
  initialData = [],
  listCategories = [],
  initialselectedItem = null
) => {
  const [dataState, setDataState] = useState(initialData);
  const [selectedItem, setselectedItem] = useState(initialselectedItem);

  useEffect(() => {
    if (listCategories.length > 0) {
      setselectedItem(listCategories[0].name);
      const newCategories = getFilterProductCategories(listCategories[0].name);
      setDataState(newCategories);
    }
  }, []);

  const onItemSelected = (categorySelected) => {
    setselectedItem(categorySelected);
    const newCategories = getFilterProductCategories(categorySelected);
    setDataState(newCategories);
  };

  return {
    onItemSelected,
    dataState,
    selectedItem,
  };
};
