import { Post } from "contentlayer/generated"
import PostItem from "./PostItem"

interface Props {
    posts: Post[]
}

const PostList = ({posts}: Props) => {
  return (
    <section className="grid gap-4">
        {posts.map((post) => (
            <PostItem key={post._raw.flattenedPath} post={post}/>
        ))}
    </section>
  )
}

export default PostList