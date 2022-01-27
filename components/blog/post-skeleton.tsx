import React from "react";
import { Skeleton } from "antd";

type PostSkeletonProps = {};

export const PostSkeleton = (props: PostSkeletonProps) => {
  return <Skeleton active loading paragraph={{ rows: 4 }}></Skeleton>;
};
