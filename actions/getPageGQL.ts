import fetchGraphQL from "./contentful-graphql";

export async function getPageGQL(query: string):Promise<HomePage> {
  const result = await fetchGraphQL(`${query}`, { next: { revalidate: 0 } });
  // console.log(result)
  return result.data.homePage;
}
