import ButtonBack from "@/app/components/ButtonBack";
import { allPosts} from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks";
import {notFound} from "next/navigation"

interface Props {
    params: {
        slug: string;
    }
}

export const generateStaticParams = () => {
    return allPosts.map((post) => ({slug: post._raw?.flattenedPath}))
    // return [
    //     {
    //         slug: "01-blog",
    //     },
    //     {
    //         slug: "02-blog",
    //     },
    //     {
    //         slug: "03-blog",
    //     }
    // ]
}

export const generateMetadata = ({params}: Props) => {
    const post = allPosts.find((post) => post._raw?.flattenedPath === params.slug);
    return {
        title: post?.title,
        description: post?.description,
    }
}

const PostLayout = ({params}: Props) => {
    const post = allPosts.find((post) => post._raw?.flattenedPath === params.slug);

    let MDXContent;

    if (!post) {
        return notFound()
    } else {
        MDXContent = useMDXComponent(post.body?.code)
    }
    
    return (
        <>
            <h1 className="text-center text-2xl font-bold uppercase">{post?.title}</h1>
            <div className="mb-8 text-center">
                <time className="text-gray-700">
                    {
                        new Date(post.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })
                    }
                </time>
            </div>
            <MDXContent/>
            <div className="mt-8 text-center">
                <ButtonBack>Volver</ButtonBack>
            </div>
        </>
    )
}

export default PostLayout