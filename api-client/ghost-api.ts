import GhostContentAPI from "@tryghost/content-api";
import { LIMIT_POSTS } from "@/constants/index";

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL || "",
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY || "",
  version: "v4",
});

export const getFeaturedPosts = async (page: number) => {
  return await ghostApi.posts
    .browse({
      limit: LIMIT_POSTS,
      filter: "featured:true",
      page,
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getPosts = async (page: number) => {
  return await ghostApi.posts
    .browse({
      limit: LIMIT_POSTS,
      page,
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getSinglePost = async (slug: string) => {
  return await ghostApi.posts
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
};
