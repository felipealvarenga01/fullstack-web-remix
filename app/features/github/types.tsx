export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export interface Repo {
  id: number;
  full_name: string;
  stargazers_count: string;
  html_url: string;
  language: string;
  name: string;
  
}

export interface LoaderData {
user: User;
repos: Repo[];
}