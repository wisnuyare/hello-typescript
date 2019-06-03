import { getAPI } from "../helpers/helpers";

export default async function fetchProductDetail(id:number) : Promise<Response> {
    return getAPI(`/products/${id}`)
  }