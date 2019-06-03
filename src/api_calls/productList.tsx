import { getAPI } from "../helpers/helpers";

export default async function fetchProductList(
  page: number, 
  perPage: number, 
  categoryID: string = "", 
  title: string = "",
  minPrice: string = "",
  maxPrice: string = "",
  minStock: string = "",
  maxStock: string = "",
  minWeight: string = "",
  maxWeight: string = "",
  productType: string = "",
  isNew: string = "",
  isActive: string = "",
): Promise<Response> {
  return getAPI(`/products?
    page=${page}&
    items_per_page=${perPage}&
    ${categoryID !== "" ? `filter_category=${categoryID}` : ""}&
    ${title !== "" ? `filter_title=${title}` : ""}&
    ${minPrice !== "" ? `filter_min_price=${minPrice}` : ""}&
    ${maxPrice !== "" ? `filter_max_price=${maxPrice}` : ""}&
    ${minStock !== "" ? `filter_min_stock=${minStock}` : ""}&
    ${maxStock !== "" ? `filter_max_stock=${maxStock}` : ""}&
    ${minWeight !== "" ? `filter_min_weight=${minWeight}` : ""}&
    ${maxWeight !== "" ? `filter_max_weight=${maxWeight}` : ""}&
    ${productType !== "" ? `filter_product_type=${productType}` : ""}&
    ${isNew !== "" ? `filter_is_new=${isNew}` : ""}&
    ${isActive !== "" ? `filter_is_active=${isActive}` : ""}
    `)
}