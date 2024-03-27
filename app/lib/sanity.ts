import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2022-03-27",
  dataset: "production",
  projectId: "qgxyf2ot",
  useCdn: false,
});
const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
