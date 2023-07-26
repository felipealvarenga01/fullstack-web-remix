import { LoaderFunction, useLoaderData } from "remix";
import { getCommits } from "~/features/github/api";

export const loader: LoaderFunction = async ({ params }) => {
  return await getCommits(params.repoName);
};