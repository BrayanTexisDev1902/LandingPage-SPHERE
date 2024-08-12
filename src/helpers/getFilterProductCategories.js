import { products } from "../data/productData";

export const getFilterProductCategories = (categorySelected) => {
    return products.filter(product => product.category === categorySelected);
}