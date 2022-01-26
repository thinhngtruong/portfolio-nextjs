import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL || "",
  key: process.env.NEXT_PUBLIC_GHOST_API_KEY || "",
  version: "v4",
});

export const getFeaturedPosts = async () => {
  return await ghostApi.posts
    .browse({
      limit: "all",
      filter: "featured:true"
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getPosts = async () => {
  return await ghostApi.posts
    .browse({
      limit: "all",
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
