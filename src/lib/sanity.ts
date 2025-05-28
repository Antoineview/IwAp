import { createClient } from "@sanity/client";
// import { useSanityClient } from "@sanity/astro"; // Removed, not used
import type { QueryParams } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "d6wudfve",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false, // set to true for production
});

const builder = imageUrlBuilder(client);

export async function getPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    mood,
    "categories": categories[]->title,
    "author": author->{name, image}
  }`);
}

export async function getPost(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      mood,
      "categories": categories[]->title,
      "author": author->{name, pronouns, image, bio},
      body
    }`,
    { slug },
  );
}

export async function getCategories() {
  return await client.fetch(`*[_type == "category"] | order(importance desc) {
    _id,
    title,
    description,
    importance
  }`);
}

export async function getPostsByCategory(category: string) {
  return await client.fetch(
    `*[_type == "post" && $category in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      mood,
      "categories": categories[]->title,
      "author": author->{name, image}
    }`,
    { category },
  );
}

export function urlForImage(source: any) {
  return source?.asset?._ref ? builder.image(source).url() : null;
}

export async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"] | order(_createdAt desc)[0]`);
}
