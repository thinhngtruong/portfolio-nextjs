import React, { useState } from "react";
import { PostOrPage } from "@tryghost/content-api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Post, PostSkeleton } from "@/components/blog";
import { ConditionalWrapper } from "@/components/common";
import { getPosts } from "@/api/ghost-api";
import { LIMIT_POSTS } from "@/constants/index";

type PostProps = {
  posts: Array<PostOrPage & { visibility: string }>;
  isFeaturedPost: boolean;
};

export const Posts = (props: PostProps) => {
  const { posts: data, isFeaturedPost } = props;
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const currentPage = Math.round(posts.length / LIMIT_POSTS);
    const newPosts = await getPosts(currentPage + 1);
    const pagination = newPosts?.meta?.pagination;
    const page = pagination?.page || 1;
    const pages = pagination?.pages || 1;
    if (page > pages) {
      setHasMore(false);
      return;
    }
    setPosts((post) => [...post, ...(newPosts as Array<any>)]);
  };

  return (
    <ConditionalWrapper
      condition={!isFeaturedPost}
      wrapper={(children) => (
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<PostSkeleton />}
        >
          {children}{" "}
        </InfiniteScroll>
      )}
    >
      <>
        {posts.map((post) => (
          <Post key={post.id} post={post} isFeaturedPost={isFeaturedPost} />
        ))}
      </>
    </ConditionalWrapper>
  );
};
