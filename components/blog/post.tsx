import NoPhoto from "@/images/no-photo.png";
import styles from "@/styles/blog.module.scss";
import { PostOrPage } from "@tryghost/content-api";
import classnames from "classnames";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "react-timeago";

type PostProps = {
  post: PostOrPage & { visibility: string };
  isFeaturedPost: boolean;
};

export const Post = (props: PostProps) => {
  const { post, isFeaturedPost } = props;
  return (
    <article
      className={classnames(styles.post, {
        [styles["featured-post"]]: isFeaturedPost,
      })}
    >
      {post.feature_image ? (
        <Image
          className={styles["post-img"]}
          src={post.feature_image}
          width={isFeaturedPost ? 440 : 200}
          height={isFeaturedPost ? 250 : 200}
          alt="Feature image"
          blurDataURL={post.feature_image}
          placeholder="blur"
        />
      ) : (
        <Image
          className={classnames(
            styles["post-img"],
            styles["post-img-no-photo"]
          )}
          src={NoPhoto}
          width={isFeaturedPost ? 400 : 200}
          height={isFeaturedPost ? 250 : 200}
          alt="Feature image"
        />
      )}
      <div className={styles["post-content"]}>
        <div className={styles["post-info"]}>
          <span>{post.visibility.toUpperCase()} - </span>
          <span>
            {format(new Date(post?.published_at || ""), "MMMM dd, yyyy")}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <a className={styles["post-title"]}> {post.title} </a>
        </Link>
        <p>{post.excerpt}</p>
        <span className={styles["post-info"]}>
          <TimeAgo date={post.published_at || new Date()} />
          <span className={styles["bull"]}>&bull;</span>
          <span className={styles["post-reading-time"]}>
            {post.reading_time} min read
          </span>
        </span>
      </div>
    </article>
  );
};
