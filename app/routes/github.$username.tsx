import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderData } from "~/features/github";
import { GithubApi, GithubContainer } from "~/features/github";


export interface User {
  login: string
  avatar_url: string
  html_url: string
  bio: string
}

export const loader: LoaderFunction = async ({ params }) => {
return {
  user: await GithubApi.getGithubUser(params.username),
  repos: await GithubApi.getUserRepos(params.username),
  };
};

export function ErrorBoundary() {
  return <h3>Whoops! </h3>
}


export default function () {
  const { user, repos } = useLoaderData<LoaderData>(); 
  return <GithubContainer user={user} repos={repos}/>;
}