import { BASE_URL, ACCESS_TOKEN } from "./constants";

export async function getAPI(uri: string) {
  return fetch(BASE_URL + uri, {
    headers: {
      "Content-Type": "application/json",
      'X-SIRCLO-ACCESS-TOKEN': ACCESS_TOKEN,
    },
  })
}