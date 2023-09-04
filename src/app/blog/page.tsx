import PostList from "@/app/components/PostList";
import PostsPagination from "@/app/components/PostsPagination";
import { getPagination } from "@/app/utils/pagination";
import { allPosts, Post } from "contentlayer/generated"

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export const metadata ={
    title: "Posts list",
    description: "Posts Description"
}

const Posts = () => {
  const {currentPosts, totalPages} = getPagination(posts, 2)
  return (
    <div>
        <PostList posts={currentPosts}/>
        {
          totalPages > 1 && <PostsPagination totalPages={totalPages} />
        } 
    </div>
  )
}

export default Posts