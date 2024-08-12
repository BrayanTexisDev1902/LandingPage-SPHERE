import { Categories } from "../data/categories"

export const getCategoriesStock = () => {
    return Categories.filter(category => category.stock !== null)
}