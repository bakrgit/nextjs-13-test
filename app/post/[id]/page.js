import PostDetailsComponent from "@/app/post/component/PostDetails";
import getData from "@/Libaray/getAllData";


const PostDetalis =async ({params}) => {
    const data = await getData(`https://jsonplaceholder.typicode.com/posts/${params.id}` )
    return (
        <>
            post detalis page
            <h1>user id</h1>
            <p>{data.userId}</p>
            <h1>title</h1>
            <p>{data.title}</p>
            <h1>body</h1>
            <p>{data.body}</p>
            <PostDetailsComponent userID={data.userId} />
        </>
    )
}

export default PostDetalis;
