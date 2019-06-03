import { getAPI } from "../helpers/helpers";

export default async function fetchProductSearch(
    searchQuery: string = ""
): Promise<Response> {
  return getAPI(`/products?filter_title=${searchQuery.split(' ').join('+')}`)
}