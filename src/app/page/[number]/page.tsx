import PostList from "@/app/components/PostList";
import PostsPagination from "@/app/components/PostsPagination";
import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated"
import { getPagination } from "@/app/utils/pagination";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

interface Props {
    params: {
        number: string;
    }
}

export const generateStaticParams = () => {
    return Array.from({length: posts.length}).map((_, index) => ({
      number: `${index + 1}`,
    }))
}

export const metadata ={
    title: "Posts list",
    description: "Posts Description"
}

const LayoutPage = ({params}: Props) => {

    let arrayCurrentPosts;
    let totalPostsPages;
    let currentPage;

    try {
        currentPage = params.number
        const {currentPosts, totalPages } = getPagination(posts, 2, currentPage)
        arrayCurrentPosts = currentPosts
        totalPostsPages = totalPages
    } catch (error) {
        notFound();       
    }

    return (
    <div>
        <PostList posts={arrayCurrentPosts}/>
        {
          totalPostsPages > 1 && <PostsPagination totalPages={totalPostsPages} currentPage={parseInt(currentPage)} />
        }
    </div>
    )
}

export default LayoutPage